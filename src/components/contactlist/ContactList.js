import React from "react";
import ContactListItem from "./ContactListItem";

const ContactList = ({ contacts }) => {
  if (contacts.length === 0) {
    return null;
  }
  return (
    <ul>
      <ContactListItem contacts={contacts} />
    </ul>
  );
};

export default ContactList;
