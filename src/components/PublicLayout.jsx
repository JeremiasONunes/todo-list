import { Outlet } from 'react-router-dom'

import { Header } from './Header'
import styles from '../styles/components/PublicLayout.module.css'

/**
 * "Casca" das rotas públicas (Landing/Login/Cadastro/Recuperar senha/Sobre)
 * — renomeada de `AppLayout` nesta fase, quando a área logada ganhou seu
 * próprio layout (`AuthenticatedLayout`, sidebar) em vez de continuar
 * dividindo este aqui. Mesmo papel do `PublicLayout` do Lythra: renderiza
 * `Header` uma vez, `<Outlet />` recebe a rota ativa.
 *
 * Link "Pular para o conteúdo" — primeiro elemento focável da página, só
 * visível quando recebe foco (`styles.skipLink`, CSS puro, sem JS).
 */
function PublicLayout() {
  return (
    <div className={styles.shell}>
      <a href="#conteudo-principal" className={styles.skipLink}>
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo-principal" className={styles.content}>
        <Outlet />
      </main>
    </div>
  )
}

export { PublicLayout }
