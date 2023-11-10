import { Individual } from './Individual'
import styles from '../styles/components/sidebar.module.css'

export const Sidebar = () => {
  const messages = [
    {
      id: 1,
      chat: 'Bismark'
    },
    {
      id: 2,
      chat: 'Sheryl'
    }
  ]

  return (
    <section className={styles.sidebar}>
      {messages.map((message) => (
        <Individual key={message.id} message={message.chat} />
      ))}
    </section>
  )
}
