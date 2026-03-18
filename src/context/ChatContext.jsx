import { createContext, useState } from "react"
import { users as mockUsers } from "../services/mockApi"

const ChatContext = createContext()

const ChatProvider = ({ children }) => {
  const [users, setUsers] = useState(mockUsers)
  const [selectedUserId, setSelectedUserId] = useState(null)

  const handleSelectedUserId = (id) => {
    setSelectedUserId(id)
  }

  const handleMessages = (newMessage) => {
    setUsers(prev =>
      prev.map(user =>
        user.id === selectedUserId
          ? { ...user, messages: [...user.messages, newMessage] }
          : user
      )
    )
  }

  const selectedUser = users.find(u => u.id === selectedUserId)

  return (
    <ChatContext.Provider value={{
      users,
      selectedUser,
      handleSelectedUserId,
      handleMessages
    }}>
      {children}
    </ChatContext.Provider>
  )
}

export { ChatContext, ChatProvider }