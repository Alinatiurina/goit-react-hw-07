import css from "./contact.module.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { deleteContact } from "../../redux/contactsSlice";
import { useDispatch } from 'react-redux';
import { MdClose } from 'react-icons/md';

export const Contact = ({ contact, onDelete }) => {
  return (
    <div className={css.container}>
      <div className={css.contact}>
        <p className={css.text}><FaUser /> {contact.name}</p>
        <p className={css.text}> <BsFillTelephoneFill /> {contact.number}</p></div>
      <button className={css.button} onClick={() => onDelete(contact.id)}>Delete</button>
    </div>
  );
};