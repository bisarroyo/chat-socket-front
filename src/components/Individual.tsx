import styles from '../styles/components/individual.module.css'

interface IndividualProps {
  message: string
}

export const Individual: React.FC<IndividualProps> = ({ message }) => {
  return (
    <div className={styles.chat}>
      <p>{message}</p>
    </div>
  )
}
