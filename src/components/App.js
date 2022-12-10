import { useState } from "react";
const App = () => {
  const currentTime = ()=>{
    let time = new Date().toLocaleTimeString();
    setTime(time);
  }
  setInterval(currentTime, 1000);
  let time = new Date().toLocaleTimeString();
  const [count,setTime] = useState(time);
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={currentTime}>Get Time</button>
    </div>
  );
};

export default App;
