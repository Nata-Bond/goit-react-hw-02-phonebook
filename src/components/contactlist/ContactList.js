import React from "react";
import ContactListItem from "./ContactListItem";
import s from "./contactList.module.css";

const ContactList = ({ contacts, onDeleteContact }) => {
  if (contacts.length === 0) {
    return null;
  }
  return (
    <ul className={s.list}>
      <ContactListItem contacts={contacts} onDeleteContact={onDeleteContact} />
    </ul>
  );
};

export default ContactList;
