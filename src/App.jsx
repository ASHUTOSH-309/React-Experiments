
import { useState } from 'react';
import Header from './components/Header'
import { HeaderWithButton } from './components/HeaderWithButton';
import Todo from './components/Todo';
import CardWrapper from './components/CardWrapper';

function App() {

  return (
    <div>
        <CardWrapper InnerComponent={TextComponent} />
    </div>
  )
}

function TextComponent() {

  return <div>
    <h1>hi there</h1>

  </div>

}



export default App
