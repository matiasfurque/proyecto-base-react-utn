import { useState } from "react";
import { messages as mockMessages } from "../services/mockApi.js";

const Chat = () => {

  const [text, setText] = useState("")
  const [messages, setMessages] = useState(mockMessages)

  const handleChange = (event) => {
    setText(event.target.value)
  }
  const handleKeyDown = (event) =>{
    if (event.key === "Enter"){
      sendMessage()
    }
  }

  const sendMessage = () => {
    if (text.length === 0){
      return
    }
    const newMessage = {
      id: messages.length + 1,
      author: "yo",
      text: text,
      time: new Date().getHours() + ":" + new Date().getMinutes()
    }

    setMessages([...messages, newMessage])
    setText("")
  }

  return (
    <section className="chat">
      <header>
        <h2>Rodrigo Perez</h2>
        <p>Ultima conexion: hace 30 segundos</p>
      </header>

      <main className="chat-body">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`message ${message.author === "Lionel Messi" ? "me" : "received"}`}
          >
            <p><b>{message.author}</b>: {message.text}</p>
            <p className="timestamp">{message.time}</p>
          </div>
        ))}

        <div className="chat-input">
          <input
            type="text"
            placeholder="Escribe un mensaje"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            value={text}
          />
          <button onClick={sendMessage}>Enviar</button>
        </div>
      </main>
    </section>
  )
}

export { Chat }