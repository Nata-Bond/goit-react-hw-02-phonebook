import React, { Component } from "react";
import s from "./contactForm.module.css";

export default class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleNameInput = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    this.setState({ [name]: value });
  };

  resetForm = () => {
    this.setState({ name: "", number: "" });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    const { onAddContact } = this.props;
    const isValidForm = this.handleValidForm();
    if (isValidForm) {
      onAddContact(name, number);
    }
    return this.resetForm();
  };

  handleValidForm = () => {
    const { name, number } = this.state;
    const { onCheckUnique } = this.props;
    if (!name || !number) {
      alert("some field is empty");
      return false;
    }
    return onCheckUnique(name);
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            className={s.input}
            type="text"
            name="name"
            placeholder="enter name"
            value={name}
            onChange={this.handleNameInput}
          />
        </label>
        <label>
          Number
          <input
            className={s.input}
            type="tel"
            name="number"
            placeholder="enter number"
            value={number}
            onChange={this.handleNameInput}
          />
        </label>
        <button className={s.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
