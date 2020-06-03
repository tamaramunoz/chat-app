import React, { useContext } from 'react'
import { ChatContext } from './Context/ChatProvider'

function App() {

  const { saludo } = useContext(ChatContext)

  return (
    <div>
      chat {saludo}
    </div>
  );
}

export default App;
