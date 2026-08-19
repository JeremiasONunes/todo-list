import { forwardRef } from 'react'

import styles from '../styles/components/Input.module.css'

/**
 * Campo de texto-base — `forwardRef` desde já, mesmo sem nenhum formulário
 * usando React Hook Form ainda (isso só chega na Fase 4, Autenticação). É mais
 * barato nascer certo agora do que descobrir depois (como aconteceu de verdade
 * no Lythra, mais de uma vez) que falta `forwardRef` só quando o primeiro
 * `register()` for escrito e o campo não funcionar.
 * @param {{ label?: string, id?: string, error?: string, className?: string }} props
 */
const Input = forwardRef(function Input({ label, id, error, className = '', ...props }, ref) {
  return (
    <div className={styles.field}>
      {label ? (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      ) : null}
      <input
        ref={ref}
        id={id}
        aria-invalid={!!error}
        className={`${styles.input} ${error ? styles.inputError : ''} ${className}`}
        {...props}
      />
      {error ? (
        <span role="alert" className={styles.errorText}>
          {error}
        </span>
      ) : null}
    </div>
  )
})

export { Input }
