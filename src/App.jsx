
import { useState } from 'react';
import Header from './components/Header'
import { HeaderWithButton } from './components/HeaderWithButton';

function App() {


  return (
    <div>
    
      <HeaderWithButton />
      <Header title={"Title 2"} />
      <Header title={"Title 3"} />
      <Header title={"Title 4"} />
      <Header title={"Title 5"} />
    </div>
  )
}

export default App
