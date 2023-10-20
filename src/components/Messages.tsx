interface MessagesProps {
  messages: string[]
}

const Messages: React.FC<MessagesProps> = ({ messages }) => {
  return (
    <ul>
      {messages.map((message, index) => (
        <li key={index}>{message}</li>
      ))}
    </ul>
  )
}

export default Messages
