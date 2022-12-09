import Heading from "./Heading";
import Entry from "./Entry";
import emoji from "./emojipedia";



const App = () => {

  return (
    <>
      <Heading />


      <dl className="dictionary">
        {emoji.map(entry => <Entry
            key={entry.id}
            name={entry.name}
            emoji={entry.emoji}
            meaning={entry.meaning}
          />
        )}
      </dl>
    </>
  );
}

export default App;
