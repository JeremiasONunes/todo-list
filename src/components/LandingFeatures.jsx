import { BarChart3, CheckCircle2, Search, Target } from 'lucide-react'

import { Card } from './Card'
import styles from '../styles/components/LandingFeatures.module.css'

/**
 * Renderização orientada a dados (mesmo padrão do Lythra): a estrutura visual
 * existe uma vez, o array `FUNCIONALIDADES` diz o que preencher nela — em vez
 * de 4 blocos de JSX quase idênticos copiados e colados.
 *
 * "Analytics de produtividade" foi a última a nascer (Fase 7, `/analytics`)
 * — até lá descrevia um produto ainda sendo construído, mesmo raciocínio já
 * usado no Lythra pra "Recomendações por IA": nunca uma promessa vazia.
 *
 * Ícones de linha (`lucide-react`) no lugar de emoji — mesma troca de
 * `Sidebar`: um conjunto consistente de ícones lê como decisão de design
 * deliberada, emoji variado lê como marcador de rascunho.
 */
const FUNCIONALIDADES = [
  {
    icon: CheckCircle2,
    titulo: 'Gerencie suas tarefas',
    descricao: 'Crie, edite e conclua tarefas com poucos cliques, sem telas complicadas.',
  },
  {
    icon: Target,
    titulo: 'Prioridade e prazo',
    descricao: 'Marque o que é urgente e defina prazos — nada de tarefa importante se perdendo.',
  },
  {
    icon: Search,
    titulo: 'Busca e filtros',
    descricao: 'Encontre qualquer tarefa rapidamente por texto, status ou prioridade.',
  },
  {
    icon: BarChart3,
    titulo: 'Analytics de produtividade',
    descricao: 'Acompanhe quantas tarefas você conclui, sua taxa de conclusão e sua evolução.',
  },
]

function LandingFeatures() {
  return (
    <section id="funcionalidades" className={styles.secao}>
      <h2 className={styles.titulo}>Tudo que você precisa pra manter o ritmo</h2>
      <div className={styles.grade}>
        {FUNCIONALIDADES.map(({ icon, titulo, descricao }) => {
          const Icon = icon
          return (
            <Card key={titulo} className={styles.item}>
              <span className={styles.iconWrapper} aria-hidden="true">
                <Icon size={22} />
              </span>
              <h3 className={styles.itemTitulo}>{titulo}</h3>
              <p className={styles.itemDescricao}>{descricao}</p>
            </Card>
          )
        })}
      </div>
    </section>
  )
}

export { LandingFeatures }
