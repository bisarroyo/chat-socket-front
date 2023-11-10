import { useRef, useState, ChangeEvent } from 'react'
import styles from '../styles/components/input.module.css'

interface AutoResizeTextAreaProps {
  onTextChange: (newText: string) => void
}

const Input: React.FC<AutoResizeTextAreaProps> = ({ onTextChange }) => {
  const [text, setText] = useState<string>('')
  const textareaRef = useRef<HTMLTextAreaElement | null>(null)

  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value
    setText(event.target.value)
    adjustTextareaHeight()
    onTextChange(newText)
  }

  const adjustTextareaHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
    }
  }

  return (
    <div className={styles.inputContainer}>
      <textarea
        className={styles.input}
        name='chat'
        id='chat'
        onChange={handleInputChange}
        value={text}
        ref={textareaRef}
        placeholder='Escribe tu mensaje aquí...'
        style={{
          minHeight: '50px', // Altura mínima
          maxHeight: '200px', // Altura máxima
          resize: 'none' // Evitar que el usuario pueda redimensionar manualmente
        }}
      />
      <textarea />
      <button className={styles.button}>Enviar</button>
    </div>
  )
}

export default Input
