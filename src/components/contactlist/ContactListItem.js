import React from "react";
import s from "./contactList.module.css";

const ContactListItem = ({ contacts, onDeleteContact }) => {
  return contacts.map((contact) => {
    const { id, name, number } = contact;
    return (
      <li className={s.listItem} key={id}>
        {name} : {number}
        <button
          className={s.button}
          type="button"
          onClick={() => onDeleteContact(id)}
        >
          Delete
        </button>
      </li>
    );
  });
};

export default ContactListItem;
