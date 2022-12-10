import { useState } from "react";
const App = ()=>{
  const [count,setState] = useState(0)
  const increase = ()=>{
    setState(count+1);
  }
  return(
    <div className="container">
      <h1>{count}</h1>
      <button onClick={()=>setState(count-1)}>-</button>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default App;