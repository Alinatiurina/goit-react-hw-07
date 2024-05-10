import { Contact } from "../Contact/contact.jsx";
import css from "./contactList.module.css";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice.js";
import { selectFilter } from "../../redux/filtersSlice.js";

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
 
  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={css.contactList}>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Contact contact={contact} onDelete={handleDelete} />
        </li>
      ))}
    </ul>
  );
};
