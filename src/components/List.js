import { useState } from "react";
export default function List(props) {

    const [state,setState] = useState(false);
    const change = ()=>{
      props.delItem(props.id)
      return setState(p=>!p)
    }
  return (
    
    <li style={{textDecoration:state?"line-through":"none"}} onClick={change}>{props.item}</li>
    
    )
}

  