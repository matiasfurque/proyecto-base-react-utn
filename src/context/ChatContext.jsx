import { createContext, useState, useEffect } from "react"
import { users as mockUsers } from "../services/mockApi"

const ChatContext = createContext()

const ChatProvider = ({ children }) => {

  const [users, setUsers] = useState(() => {
    const storedUsers = localStorage.getItem("users")
    return storedUsers ? JSON.parse(storedUsers) : mockUsers
  })

  const [registeredUsers, setRegisteredUsers] = useState(() => {
    const stored = localStorage.getItem("registeredUsers")
    return stored ? JSON.parse(stored) : []
  })

  const [loggedUser, setLoggedUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  )
  const [selectedUserId, setSelectedUserId] = useState(null)

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users))
  }, [users])

  
  useEffect(() => {
    localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers))
  }, [registeredUsers])

  const handleSelectedUserId = (id) => {
    setSelectedUserId(id)
  }

  const login = (userData) => {
    const foundUser = registeredUsers.find(
      user => user.email === userData.email
    )

    if (!foundUser) return false
    if (foundUser.password !== userData.password) return false

    setLoggedUser(foundUser)
    localStorage.setItem("user", JSON.stringify(foundUser))

    return true
  }

  const register = (newUser) => {
    const userExists = registeredUsers.some(
      user => user.email === newUser.email
    )

    if (userExists) return false

    const userToSave = {
      id: Date.now(),
      firstName: newUser.firstName,
      lastName: "",
      email: newUser.email,
      password: newUser.password,
    }

    setRegisteredUsers(prev => [...prev, userToSave])
    setLoggedUser(userToSave)
    localStorage.setItem("user", JSON.stringify(userToSave))

    return true
  }

  const logout = () => {
    localStorage.removeItem("user")
    setLoggedUser(null)
    setSelectedUserId(null)
  }

  const handleMessages = (newMessage) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === selectedUserId
          ? {
              ...user,
              messages: [...user.messages, newMessage]
            }
          : user
      )
    )
  }

  const selectedUser = users.find(user => user.id === selectedUserId)

  return (
    <ChatContext.Provider
      value={{
        users,
        selectedUser,
        handleSelectedUserId,
        handleMessages,
        login,
        register,
        logout,
        loggedUser
      }}
    >
      {children}
    </ChatContext.Provider>
  )
}

export { ChatContext, ChatProvider }