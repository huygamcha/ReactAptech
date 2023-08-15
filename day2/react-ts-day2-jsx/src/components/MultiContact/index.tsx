import { useState } from "react";
import Character from "./character";
import Chat from "./chat";
import { contacts } from "./data";
function MultiContact() {
  const [obj, setObj] = useState(contacts[0]);
  const handleClick = (contact: Character) => {
    console.log(contact);
  };
  return (
    <div key={obj.name}>
      <Character
        contacts={contacts}
        value={obj}
        onselectContact={(contact) => setObj(contact)}
      />
      <Chat key={obj.email} value={obj} />
    </div>
  );
}

export default MultiContact;
