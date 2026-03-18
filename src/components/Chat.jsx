import { useState, useRef, useEffect, useContext } from 'react';
import { ChatContext } from '../context/ChatContext';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Chat = () => {
  const [text, setText] = useState('');
  const chatBodyRef = useRef(null);

  const { selectedUser, handleMessages } = useContext(ChatContext);
  const { user, logout } = useAuth();

  const navigate = useNavigate();

  const sendMessage = () => {
    if (!text) return;

    const newMessage = {
      id: Date.now(),
      author: user.email,
      text,
      isMine: true,
      time: `${new Date().getHours()}:${new Date().getMinutes().toString().padStart(2, '0')}`,
    };

    handleMessages(newMessage);
    setText('');
  };

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [selectedUser]);

  if (!selectedUser) {
    return <p className="not-found-chat">Selecciona un chat 💬</p>;
  }

  return (
    <section className="chat">
      <header>
        <h2>{selectedUser.firstName} {selectedUser.lastName}</h2>
        <button
          onClick={() => {
            logout();
            navigate('/login');
          }}
        >
          Salir
        </button>
      </header>

      <div className="chat-body" ref={chatBodyRef}>
        {selectedUser.messages.map((msg) => (
          <div
  key={msg.id}
  className={`message ${msg.isMine ? "me" : "received"}`}
>
  <p>{msg.text}</p>
  <span className="time">{msg.time}</span>
</div>
        ))}
      </div>

      <div className="chat-input">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button onClick={sendMessage}>Enviar</button>
      </div>
    </section>
  );
};

export { Chat };
