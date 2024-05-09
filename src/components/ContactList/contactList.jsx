import { Contact } from "../Contact/contact.jsx";
import css from "./contactList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

export const ContactList = () => {
  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();
  const nameFilter = useSelector((state) => state.filters.nameFilter); 

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  const visibleContacts = contacts.items.filter((contact) =>
    contact.name.toLowerCase().includes(nameFilter.toLowerCase())
  );

  return (
    <ul className={css.contactList}>
      {visibleContacts.map((contact) => (
        <li key={contact.id}>
          <Contact contact={contact} onDelete={handleDelete} />
        </li>
      ))}
    </ul>
  );
};
