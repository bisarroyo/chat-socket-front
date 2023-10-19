import Input from './Input'
import styles from '../styles/components/chatElement.module.css'

import { io } from 'socket.io-client'
import { useState } from 'react'

const socket = io('http://localhost:3000/')

export default function ChatElement() {
  const [input, setInput] = useState('')

  const onChange = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input) {
      console.log(input)
      socket.emit('chat message', input)
      setInput('')
    }
  }

  return (
    <section className={styles.chatContainer}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <Input value={input} onChange={onChange} />
      </form>
    </section>
  )
}
