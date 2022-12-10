import Input from "./input";
const Form=(props)=> {
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      
      {!props.bool&&<Input type="password" placeholder="Confirm Password" />}
      <button type="submit">{props.text}</button>
    </form>
  );
}

export default Form;
