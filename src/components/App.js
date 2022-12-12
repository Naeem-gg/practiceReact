import { useState } from "react"

export default function App() {
  const [styleobj,setStyle] = useState({});
  const [name,setName] = useState("Hello");
  const [btnName,setBtnName] = useState("");
  const mouseOver = ()=>{
    setStyle({backgroundColor:"black"})
  }
  const mouseOut = ()=>{
    setStyle({backgroundColor:"white"})

  }
  return (
    <div className="container">
    <h1>{btnName || "Hello"}</h1>
    <input type="text" placeholder="What's your name?" onChange={e=>setName(e.target.value)} />
    <button onMouseOver={mouseOver} onMouseOut={mouseOut} style={styleobj} onClick={()=>{setBtnName(name)}}>Submit</button>
  </div>
  )
}
