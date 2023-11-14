import { Individual } from './Individual'
import styles from '../styles/components/sidebar.module.css'

export const Sidebar = () => {
  const messages = [
    {
      id: 1,
      chat: 'Bismark',
      text: 'Hola como estas?'
    },
    {
      id: 2,
      chat: 'Sheryl',
      text: 'Mensaje nuevo'
    }
  ]

  return (
    <section className={styles.sidebar}>
      {messages.map((message) => (
        <Individual
          key={message.id}
          message={message.chat}
          text={message.text}
        />
      ))}
    </section>
  )
}
