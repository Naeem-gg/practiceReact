import React from "react";

const App = (props)=>{
    return(
        <> 
        <h1>{props.name}</h1>
        <img src={props.src} alt="this is img" />
        <p>{props.phone}</p>
        <p>{props.email}</p>
        </>
    ); 
}

export default App;