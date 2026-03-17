import { useEffect, useState } from "react"
//import { users } from "../services/mockApi.js"
const Aside = ({onActiveUser}) => {
  const [search, setSearch] = useState ("")
  const [users, setUsers] = useState ([])
  const fetchingData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/users")

      if (!response.ok) {
        throw new Error("Error al obtener los datos")
        
      }
      
    
    const data = await response.json()
    setUsers(data.users)
  } catch (error) {
    console.error("Error al obtener los datos:", error)
  }}
  useEffect(() => {
    fetchingData()
  }, [])
  
  
  
  
  
  const handleChange = (event) =>{
    setSearch(event.target.value)
  }
  //filter()
  //for()
  //forEach()

const filteredUsers = users.filter((user) => {
  const fullName = `${user.firstName} ${user.lastName}`.toLowerCase()
  return fullName.includes(search.toLowerCase())
})

const handleClick = (id) => {
  onActiveUser(id)
}

  return (
    <>
      <aside>
        <h1> 💬  CHAT UTN</h1>
        <input className = "search" type="search" placeholder="Buscar contacto" onChange={handleChange}/>
        {
          filteredUsers.length === 0 ? <p className="not-found-text">No hay contactos que coincidan con la búsqueda.</p> : " "
        }
        <ul>
          {
            filteredUsers.map((user) => (
              <li key={user.id} onClick={()=>handleClick(user.id)}> 
              <img src={user.image} alt="Foto de perfil" />
                <div>
                  {user.firstName} {user.lastName} 
                <span>{user.address.country}</span>
                </div>
              </li>
              
            ))
          }
        </ul>
      </aside>
    </>
  )
}

export {Aside};