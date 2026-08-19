/**
 * Persistência da sessão — separado de `AuthContext.jsx` pra exportar uma
 * constante sem disparar o aviso `react-refresh/only-export-components`
 * (mesma razão de `routeConfig.jsx` viver separado de `AppRoutes.jsx`).
 *
 * Guarda só o `id` do usuário logado, nunca o objeto inteiro — a sessão é
 * sempre rehidratada lendo o usuário fresco de `usuarioService` (ver
 * `AuthContext.jsx`), nunca confiando num dado que pode estar desatualizado.
 */
const CHAVE_SESSAO = 'todolist:sessao'

function lerUsuarioIdPersistido() {
  return localStorage.getItem(CHAVE_SESSAO)
}

function persistirUsuarioId(usuarioId) {
  if (usuarioId) {
    localStorage.setItem(CHAVE_SESSAO, usuarioId)
  } else {
    localStorage.removeItem(CHAVE_SESSAO)
  }
}

export { lerUsuarioIdPersistido, persistirUsuarioId }
