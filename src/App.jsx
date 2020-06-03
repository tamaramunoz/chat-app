import React, { useContext } from 'react'
import { ChatContext } from './Context/ChatProvider'
import Navbar from './Components/Navbar'
import Chat from './Components/Chat'


const App = () => {

  const { usuario } = useContext(ChatContext)

  return usuario !== null ? (
    <>
      <Navbar />
      {
        usuario.estado ? (
          <Chat />
        ) : (
          <div>Debes iniciar sesión</div>
        )
      }
      
    </>
  ) : (
      <div>Cargando...</div>
    )
}   

export default App
