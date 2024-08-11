import react from "react";


function HeaderWithButton() {


    const [title,setTitle]=useState("Ashutosh");


    function changeTitle(){
      setTitle(Math.random()+"")
    }

    return <div>
        <button onClick={changeTitle}></button>
        <h1>{"my name is " + Math.random()}</h1>
    </div>


}