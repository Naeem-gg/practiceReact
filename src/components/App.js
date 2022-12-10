import Form from "./Form";

var userIsRegistered = false;

const App=()=> {
  return (
    <div className="container">
    {userIsRegistered?<Form text="Login" bool={true}/>:
      <Form text="Register" bool={false}/>}

    </div>
  );
}

export default App;
