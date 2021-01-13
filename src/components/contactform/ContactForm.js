import React, { Component } from "react";

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

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onAddContact(this.state.name, this.state.number);
    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
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
            type="phone"
            name="number"
            placeholder="enter number"
            value={number}
            onChange={this.handleNameInput}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
