
import { useState } from 'react';
import Header from './components/Header'
import { HeaderWithButton } from './components/HeaderWithButton';

function App() {

  const [title,setTitle]=useState("Parent")
  function updateTitle(){
    setTitle(Math.random()+"")
  }

  return (
    <div>
      <button onClick={updateTitle}>Update First Title</button>
      <Header title={title} />
      <Header title={"Title 2"} />
      <Header title={"Title 3"} />
      <Header title={"Title 4"} />
      <Header title={"Title 5"} />
    </div>
  )
}

export default App
