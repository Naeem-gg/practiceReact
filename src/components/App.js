import Heading from "./Heading";
import Entry from "./Entry";
import emoji from "./emojipedia";

const oneEntry = (entry) =>{
  return<Entry
        key={entry.id}
        name={entry.name}
        emoji={entry.emoji}
        meaning={entry.meaning}
        />
}

const App = () => {

  return (
    <>
    <Heading/>
      

      <dl className="dictionary">
        {emoji.map(oneEntry)}
      </dl> 
    </>
  );
}

export default App;
