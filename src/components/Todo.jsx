


const Todo = ({title,description,completed}) => {

    return <div>
        <h1>{title}</h1>
        <h2>{description}</h2>
        <button>{completed===true? "Completed":"Mark as complete"}</button>
    </div>
}

export default Todo;