
import Header from './components/Header'

function App() {
const [title,setTitle]=useState(" ");


function changeTitle(){
  setTitle(toString(Math.random()))
}

  return (
    <div>
      <button  onClick={changeTitle}>Click me to change the title</button>
      <Header title={title} />
      <Header title={"Title 2"} />
    </div>
  )
}

export default App
