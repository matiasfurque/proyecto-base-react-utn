import { useState } from 'react'
import { Chat } from "./Chat"
import { Aside } from "./Aside"

const App = () =>{
  const [activeUser, setActiveUser] = useState(null)

  const handleActiveUser = async (id) => {
    try{
      const response = await fetch(`https://dummyjson.com/users/${id}`)
      if (!response.ok){
        throw new Error("Error al obtener los datos")
        
      }
      const data = await response.json()
      setActiveUser(data)
    }
    catch(error){
      console.error("Error al obtener los datos:", error)
    }
  }

  return (
    <main className='app'>
    <Aside onActiveUser={handleActiveUser}/>
    <Chat activeUser={activeUser} />
    </main>
    )
}

export {App}