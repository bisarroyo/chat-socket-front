import { io } from 'socket.io-client'
import './App.css'
import Chat from './pages/Chat'

const socket = io()

function App() {
  return (
    <>
      <h1>
        <Chat />
      </h1>
    </>
  )
}

export default App
