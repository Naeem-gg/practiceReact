import Card from "./Card";
import contacts from "./contacts";
const createCard = (oneContact)=>{
  return(
    <Card 
    name={oneContact.name} 
    key={oneContact.id}
    // id={oneContact.id}
    phone={oneContact.phone}
    email={oneContact.email}
    img={oneContact.imgURL}
    />
    );
  }

const App = () => {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(createCard)}
      {/* <Card name={contacts[0].name} img={contacts[0].imgURL} phone={contacts[0].phone} email={contacts[0].email} />
      <Card name={contacts[1].name} img={contacts[1].imgURL} phone={contacts[1].phone} email={contacts[1].email} />
      <Card name={contacts[2].name} img={contacts[2].imgURL} phone={contacts[2].phone} email={contacts[2].email} /> */}
    </div>
  );
}

export default App;
