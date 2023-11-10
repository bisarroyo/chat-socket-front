import ChatElement from '../components/ChatElement'
import { Sidebar } from '../components/Sidebar'

import styles from './chat.module.css'

export default function Chat() {
  return (
    <div className={styles.mainContainer}>
      <Sidebar />
      <ChatElement />
    </div>
  )
}
