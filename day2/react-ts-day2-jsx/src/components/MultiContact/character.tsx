import clsx from "clsx";
import styles from "./multichat.module.css";
interface Character {
  name: string;
  email: string;
}
function Character({
  value,
  contacts,
  onselectContact,
}: {
  value: Character;
  contacts: Character[];
  onselectContact: (contact: Character) => void;
}) {
  return (
    <div>
      {/* {value.name} */}
      <div>
        {contacts.map((contact) => (
          <button
            className={clsx(styles.button)}
            key={contact.email}
            onClick={() => onselectContact(contact)}
          >
            {contact.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Character;
