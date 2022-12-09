import Login from "./Login";
import Heading from "./Heading";
const isLogged = true;
const App = () => {
    return (
      <div className="container">
    {isLogged &&
        <Login/>}
        {!isLogged&&<Heading/>}
      </div>
    );
}
export default App;
//<Heading/>
  