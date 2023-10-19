import Input from './Input'
import styles from '../styles/components/chatElement.module.css'

export default function ChatElement() {
  return (
    <section className={styles.chatContainer}>
      <form action='' className={styles.form}>
        <Input />
      </form>
    </section>
  )
}
