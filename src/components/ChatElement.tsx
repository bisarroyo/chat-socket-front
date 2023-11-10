import Input from './Input'
import styles from '../styles/components/chatElement.module.css'

import { io } from 'socket.io-client'
import { FormEvent, useState, useEffect } from 'react'
import Messages from './Messages'

const socket = io('http://localhost:3000/', {
  auth: {
    user: 'Bismark'
  }
})

export default function ChatElement() {
  const [clearText, setCleartext] = useState<boolean>(false)
  const [input, setInput] = useState<string>('')
  const [messages, setMessages] = useState<string[]>([])

  const handleTextChange = (newText: string) => {
    setInput(newText)
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (input) {
      console.log(input)
      socket.emit('chat message', input)
      setCleartext(true)
    }
  }

  const receiveMessages = (messages: string) =>
    setMessages((state) => [messages, ...state])

  useEffect(() => {
    socket.on('chat message', receiveMessages)

    return () => {
      socket.off('chat message', receiveMessages)
    }
  }, [])

  return (
    <section className={styles.chatContainer}>
      <Messages messages={messages} />
      <form onSubmit={handleSubmit} className={styles.form}>
        <Input onTextChange={handleTextChange} clearText={clearText} />
      </form>
    </section>
  )
}
