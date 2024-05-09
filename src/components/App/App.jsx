import {ContactForm} from "../ContactForm/contactForm";
import SearchBox from "../SearchBox/searchBox";
import { ContactList } from "../ContactList/contactList";
import css from './App.module.css'

export default function App() {
  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm  />
      <SearchBox  />
      <ContactList />
    </div>

  );
}