
import { useEffect, useState } from 'react';
import Todo from './components/Todo';


function App() {
  const [todos, setTodos] = useState([{
    id:100,
    title:"first",
    description:"first description"
  }])


  useEffect(() => {
    setInterval(() => {
      fetch("https://sum-server.100xdevs.com/todos").
        then(async(res) => {
         const json=await res.json()
         
          setTodos(json.todos)
        })
    }, 2000)
  }, [])


  return (
    <div>
        {
          todos.map(todo=> <Todo key={todo.id} title={todo.title} description={todo.description} completed={todo.completed} />)
        }
    </div>
  )
}




export default App
