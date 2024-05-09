import css from "./contact.module.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { deleteContact } from "../../redux/contactsOps";
import { useDispatch } from 'react-redux';
import { MdClose } from 'react-icons/md';
import { isPending } from "@reduxjs/toolkit";

export const Contact = ({ contact }) => {
    const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));
  return (
    <div className={css.container}>
      <div className={css.contact}>
        <p className={css.text}><FaUser /> {contact.name}</p>
        <p className={css.text}> <BsFillTelephoneFill /> {contact.number}</p></div>
      <button className={css.button} onClick={handleDelete}>Delete</button>
    </div>
  );
};