import css from "./contactForm.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";

export const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (event) => {
      event.preventDefault();
    dispatch(addContact({ name, number }));
    setName("");
    setNumber("");
  };

  return (
    <form onSubmit={handleSubmit} className={css.container}>
      <div className={css.form}>
        <label>Name:</label>
        <input
          className={css.input}
          name="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className={css.form}>
        <label>Number:</label>
        <input
          className={css.input}
          name="number"
          type="text"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="xxx-xx-xx"
        />
      </div>
      <button className={css.button} type="submit">
        Add contact
      </button>
    </form>
  );
};
