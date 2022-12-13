import React, { useState } from "react";

function App() {
  const [state, setState] = useState({
    fName:"",
    lName:""
  });

  function handleChange(event){
    const {name,value} = event.target;
    let updateValue = {};
    if(name==="fName")
    updateValue = {fName:value};
    else if(name==="lName")
    updateValue = {lName:value};

    setState((pre)=>({
      ...pre,
      ...updateValue
    }))
  }

  return (
    <div className="container">
      <h1>
        Hello {state.fName} {state.lName}
      </h1>
      <form onSubmit={e=>e.preventDefault()}>
        <input
          name="fName"
          onChange={handleChange}
          placeholder="First Name"
          value={state.fName}
        />
        <input
          name="lName"
          onChange={handleChange}
          placeholder="Last Name"
          value={state.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
export default App;
