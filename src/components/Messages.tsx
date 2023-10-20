import styles from '../styles/components/messages.module.css'

interface MessagesProps {
  messages: string[]
}

const Messages: React.FC<MessagesProps> = ({ messages }) => {
  return (
    <ul className={styles.messagesContainer}>
      {messages.map((message, index) => (
        <li key={index}>{message}</li>
      ))}
    </ul>
  )
}

export default Messages
