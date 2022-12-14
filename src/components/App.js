import React, { useState } from "react";
import List from "./List";

export default function App() {
  const [todo,addTodo] = useState("A Item");
  const [arr,addArr] = useState([]);


  
  const handleChange = (event) =>{
    const value = event.target.value;
    addTodo(value);
  }
  const addToArray = () => {
    addArr(pre=>{
      if(todo!=="")
      return([...pre,todo])
      else return([...pre])
    })
    addTodo("")
  }
  const deleteItem = (id) =>{
    addArr((pre)=>{
      return pre.filter((single,index)=>{
        return (index !==id)
      })
    })
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={todo}/>
        <button onClick={addToArray}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
        {arr.map((item,index)=>
          <List key={index} id={index} item={item} delItem={deleteItem}/>
        )}
        </ul>
      </div>
    </div>
  );
}

//CHALLENGE: Make this app work by applying what you've learnt.
//1. When new text is written into the input, its state should be saved.
//2. When the add button is pressed, the current data in the input should be
//added to an array.
//3. The <ul> should display all the array items as <li>s
