import React,{useState,useEffect} from "react";            
export default function Fetch() {
  let [name,setName] = useState("click");
  return (
    <div>
    <div className="d" style={{display:"flex"}}>

        <button onClick={()=>setName("Posts")}>Posts</button>
        <button onClick={()=>setName("Users")}>Users</button>
        <button onClick={()=>setName("Comments")}>Comments</button>
    </div>
        <h1>{name}</h1>
    </div>
  )
}
