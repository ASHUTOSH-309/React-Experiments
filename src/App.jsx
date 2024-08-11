
import { useState } from 'react';
import Header from './components/Header'
import { HeaderWithButton } from './components/HeaderWithButton';
import Todo from './components/Todo';

function App() {

  const [todos, setTodos] = useState([
    {
      title: "Title 1",
      description: "Description 1"
    },

    {
      title: "Title 2",
      description: "Description 2"
    },

    {
      title: "Title 3",
      description: "Description 3"
    },
  ])

  function AddTodo(){
    setTodos([...todos,{
      title:"Sample Todo",
      description:"Sample description"
    }])
  }



  return (
    <div>

      <button onClick={AddTodo}>Add New Todo</button>
      {todos.map((todo)=>{
        return <Todo title={todo.title} description={todo.description} />
      })}

    </div>
  )
}

export default App
