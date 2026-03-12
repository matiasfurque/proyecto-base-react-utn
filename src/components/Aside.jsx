import { useState } from "react"
import { users } from "../services/mockApi.js"
const Aside = () => {
  const [search, setSearch] = useState ("")
  const handleChange = (event) =>{
    setSearch(event.target.value)
  }
  //filter()
  //for()
  //forEach()

  const filteredUsers = users.filter((user) => user.name.toLowerCase().includes(search.toLowerCase()))
  

  return (
    <>
      <aside>
        <h1>CHAT UTN</h1>
        <input type="search" placeholder="Buscar contacto" onChange={handleChange}/>
        <ul>
          {
            filteredUsers.map((user) => (
              <li> 
                {user.name} 
                <span>{user.status}</span>
              </li>
              
            ))
          }
        </ul>
      </aside>
    </>
  )
}

export {Aside};