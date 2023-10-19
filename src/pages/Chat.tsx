import ChatElement from '../components/ChatElement'
import styles from './chat.module.css'

export default function Chat() {
  return (
    <div className={styles.mainContainer}>
      <ChatElement />
    </div>
  )
}
