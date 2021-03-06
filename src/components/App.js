import React, { Component } from "react";
import { v4 as uuid } from "uuid";
import ContactForm from "./contactform/ContactForm";
import ContactList from "./contactlist/ContactList";
import Filter from "./filter/Filter";
import s from "./app.module.css";

export default class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  componentDidMount() {
    const enteredContacts = localStorage.getItem("contacts");
    if (enteredContacts) {
      this.setState({ contacts: JSON.parse(enteredContacts) });
    }
  }

  componentDidUpdate(prevProps, PrevState) {
    console.log("ComponentDidUpdate");
    // console.log("PrevState:", PrevState);
    // console.log("this.state:", this.state);

    if (PrevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  addContact = (name, number) => {
    const contact = {
      id: uuid(),
      name,
      number,
    };
    this.setState((prevState) => {
      return { contacts: [...prevState.contacts, contact] };
    });
  };

  changeFilter = (filter) => {
    this.setState({ filter });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  checkUnique = (name) => {
    const { contacts } = this.state;
    const isExist = !!contacts.find((contact) => contact.name === name);
    isExist && alert(`${name} is already exist`);
    return !isExist;
  };

  deleteContact = (id) => {
    console.log(id);
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter((contact) => contact.id !== id),
      };
    });
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <div className={s.container}>
        <h2>Phonebook</h2>
        <ContactForm
          onAddContact={this.addContact}
          onCheckUnique={this.checkUnique}
        />
        <h2>Contacts</h2>
        <Filter filter={filter} onChangeFilter={this.changeFilter} />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
