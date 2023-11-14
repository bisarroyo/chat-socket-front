import styles from '../styles/components/individual.module.css'

interface IndividualProps {
  message: string
  text: string
}

export const Individual: React.FC<IndividualProps> = ({ message, text }) => {
  return (
    <div className={styles.chat}>
      <p>{message}</p>
      <p>{text}</p>
    </div>
  )
}
