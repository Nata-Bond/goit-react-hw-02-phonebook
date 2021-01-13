import React from "react";

const ContactListItem = ({ contacts }) => {
  return contacts.map((contact) => {
    const { id, name, number } = contact;
    return (
      <li key={id}>
        {name} : {number}
      </li>
    );
  });
};

export default ContactListItem;
