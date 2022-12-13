import React, { useState } from "react";

export default function App (){
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });
  const handleChange = (event) =>{
    const updateState = {};
    const {name,value} = event.target; 
    if(name==="fName")
    updateState.fName = value;
    else if(name === "lName")
    updateState.lName = value;
    else if(name==="email")
    updateState.email = value;
    setContact((pre)=>({
      ...pre,
      ...updateState
    }))
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form onSubmit={e=>e.preventDefault()}>
        <input name="fName" onChange={handleChange} placeholder="First Name" />
        <input name="lName" onChange={handleChange} placeholder="Last Name" />
        <input name="email" onChange={handleChange} placeholder="Email" />
        <button>Submit</button>
      </form>
    </div>
  );
}