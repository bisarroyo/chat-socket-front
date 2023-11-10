import { useRef, useState, useEffect, ChangeEvent } from 'react'
import styles from '../styles/components/input.module.css'

interface AutoResizeTextAreaProps {
  onTextChange: (newText: string) => void
  clearText: boolean
}

const Input: React.FC<AutoResizeTextAreaProps> = ({
  onTextChange,
  clearText
}) => {
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

  useEffect(() => {
    // Se ejecuta cuando clearText cambia a true
    if (clearText) {
      setText('')
      // Notificar al padre que se ha borrado el texto
      onTextChange('')
    }
  }, [clearText, onTextChange])

  return (
    <div className={styles.inputContainer}>
      <textarea
        className={styles.textArea}
        name='chat'
        id='chat'
        onChange={handleInputChange}
        value={text}
        ref={textareaRef}
        placeholder='Escribe tu mensaje aquí...'
      />
      <button className={styles.button}>Enviar</button>
    </div>
  )
}

export default Input
