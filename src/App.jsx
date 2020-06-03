import React, { useContext } from 'react'
import { ChatContext } from './Context/ChatProvider'
import Navbar from './Components/Navbar'


const App = () => {

  const { usuario } = useContext(ChatContext)

  return usuario !== null ? (
    <>
      <Navbar />
      <div> chat </div>
      
    </>
  ) : (
      <div>Cargando...</div>
    )
}   

export default App
