import styles from '../styles/components/input.module.css'

export default function Input() {
  return (
    <div className={styles.inputContainer}>
      <input className={styles.input} type='text' name='chat' id='chat' />
      <button className={styles.button}>Enviar</button>
    </div>
  )
}
