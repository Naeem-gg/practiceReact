import { useState } from "react";
export default function App() {
  const [fName,setfName] = useState("");
  const [lName,setlName] = useState("");
  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const setNames = ()=>{ 
    setFirstName(fName)
    setLastName(lName)
  }

  return (<div className="container">
    <h1>Hello {firstName} {lastName}</h1>
    <form onSubmit={e=>e.preventDefault()}>
      <input name="fName" placeholder="First Name" onChange={e=>setfName(e.target.value)} />
      <input name="lName" placeholder="Last Name" onChange={e=>setlName(e.target.value)} />
      <button onClick={setNames}>Submit</button>
    </form>
  </div>);
}
