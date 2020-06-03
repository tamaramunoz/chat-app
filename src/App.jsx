import React, { useContext } from 'react'
import { ChatContext } from './Context/ChatProvider'
import Navbar from './Components/Navbar'

function App() {

  const { saludo } = useContext(ChatContext)

  return (
    <div>
      <Navbar />
      {saludo}
    </div>
  );
}

export default App;
