import { Link } from 'react-router-dom'

import buttonStyles from '../styles/components/Button.module.css'
import styles from '../styles/components/LandingCTA.module.css'

/**
 * Segunda chamada pra ação, no fim da rolagem — quem chegou até aqui já viu
 * funcionalidades e benefícios, não deveria precisar rolar de volta ao topo
 * pra achar o botão de começar (mesmo raciocínio do Lythra pro CTA duplo).
 */
function LandingCTA() {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.titulo}>Pronto pra organizar sua rotina?</h2>
      <Link
        to="/cadastro"
        className={`${buttonStyles.button} ${buttonStyles.primary} ${buttonStyles.lg}`}
      >
        Começar agora — é grátis
      </Link>
    </section>
  )
}

export { LandingCTA }
