import React from "react";


const Header=React.memo(function({ title }) {

    return <div>
        <h1>My name is {title}</h1>
    </div>

})


export default Header;