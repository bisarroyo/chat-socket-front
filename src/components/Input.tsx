import styles from '../styles/components/input.module.css'

interface InputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  value: string
}

const Input: React.FC<InputProps> = ({ onChange, value }) => {
  return (
    <div className={styles.inputContainer}>
      <input
        className={styles.input}
        type='text'
        name='chat'
        id='chat'
        onChange={onChange}
        value={value}
      />
      <button className={styles.button}>Enviar</button>
    </div>
  )
}

export default Input
