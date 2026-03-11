import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Chat } from "./components/Chat"
import {Aside} from "./components/Aside"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Chat />
    <Aside />
  </StrictMode>,
)
