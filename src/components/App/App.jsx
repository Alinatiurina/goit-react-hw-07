import {ContactForm} from "../ContactForm/contactForm";
import SearchBox from "../SearchBox/searchBox";
import { ContactList } from "../ContactList/contactList";
import css from './App.module.css'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contactsOps";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import { selectLoading, selectError } from "../../redux/contactsSlice";


export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && <Loader>Loading </Loader>}  
      {isError && <Error>Error! Please, try again.</Error>}
      <ContactList />
    </div>
  );
}