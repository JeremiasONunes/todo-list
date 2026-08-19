import { createContext, useContext, useEffect, useState } from 'react'

import { usuarioService } from '../services/usuarioService'
import { lerUsuarioIdPersistido, persistirUsuarioId } from './authStorage'

const AuthContext = createContext(null)

/**
 * Sessão simulada — `carregando` cobre a janela de hidratação no boot
 * (relendo o usuário persistido antes de `RequireAuth` decidir redirecionar
 * ou não). Sem `papel`/role: neste app todo usuário logado só enxerga as
 * próprias tarefas, não existe distinção de tipo de conta.
 */
function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(null)
  const [carregando, setCarregando] = useState(true)

  useEffect(() => {
    let cancelado = false

    async function hidratar() {
      const usuarioIdPersistido = lerUsuarioIdPersistido()
      if (!usuarioIdPersistido) {
        return
      }

      const encontrado = await usuarioService.buscarPorId(usuarioIdPersistido)
      if (cancelado) {
        return
      }

      if (encontrado) {
        setUsuario(encontrado)
      } else {
        // Sessão persistida aponta pra um usuário que não existe mais — descarta.
        persistirUsuarioId(null)
      }
    }

    hidratar().finally(() => !cancelado && setCarregando(false))

    return () => {
      cancelado = true
    }
  }, [])

  /** `null` quando as credenciais não conferem (mesmo contrato de
   * `usuarioService.verificarCredenciais`) — quem chama decide como mostrar
   * o erro. */
  async function login(email, senha) {
    const encontrado = await usuarioService.verificarCredenciais(email, senha)
    if (!encontrado) {
      return null
    }
    setUsuario(encontrado)
    persistirUsuarioId(encontrado.id)
    return encontrado
  }

  function logout() {
    setUsuario(null)
    persistirUsuarioId(null)
  }

  /** Propaga o erro de `usuarioService.criar` (e-mail já cadastrado) —
   * diferente de `login`, aqui é uma falha real. */
  async function cadastrar(dados) {
    const novoUsuario = await usuarioService.criar(dados)
    setUsuario(novoUsuario)
    persistirUsuarioId(novoUsuario.id)
    return novoUsuario
  }

  const valor = {
    usuario,
    autenticado: !!usuario,
    carregando,
    login,
    logout,
    cadastrar,
  }

  return <AuthContext.Provider value={valor}>{children}</AuthContext.Provider>
}

function useAuth() {
  const contexto = useContext(AuthContext)
  if (!contexto) {
    throw new Error('useAuth precisa ser usado dentro de um AuthProvider.')
  }
  return contexto
}

export { AuthProvider, useAuth }
