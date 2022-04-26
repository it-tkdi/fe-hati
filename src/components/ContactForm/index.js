import React, { Component } from "react";
import axios from 'axios';

class ContactForm extends Component {
  state = {
    name: "",
    email: "",
    subject: "",
    lastname: "",
    message: "",
    notes: "",
    error: {},
  };

  changeHandler = (e) => {
    const error = this.state.error;
    error[e.target.name] = "";

    this.setState({
      [e.target.name]: e.target.value,
      error,
    });
  };

  submitHandler = (e) => {
    e.preventDefault();

    const { name, email, subject, lastname, message, notes, error } = this.state;

    if (name === "") {
      error.name = "Please enter your name";
    }
    if (email === "") {
      error.email = "Please enter your email";
    }
    if (subject === "") {
      error.subject = "Please enter your subject";
    }
    if (lastname === "") {
      error.lastname = "Please enter your Lastname";
    }
    if (message === "") {
      error.message = "Select your event list";
    }
    if (notes === "") {
      error.notes = "Please enter your note";
    }

    if (error) {
      this.setState({
        error,
      });
    }
    if (
      error.name === "" &&
      error.email === "" &&
      // error.email === "" &&
      error.subject === "" &&
      error.lastname === "" &&
      error.message === "" &&
      error.notes === ""
    ) {
      this.setState({
        name: "",
        email: "",
        subject: "",
        lastname: "",
        message: "",
        notes: "",
        error: {},
      });
    }

    const dataToSubmit = {
      name,
      email,
      subject,
      lastname,
      message
    };

    axios.post("http://localhost:5000/", dataToSubmit)
    .then(function (res){
      console.log(res);
      if(res.data === 'success'){
        alert('Email sent!');
      }
    }).catch((err)=> {
      console.log(err);
    });
  };

  render() {
    const { name, email, subject, lastname, message, error } = this.state;

    return (
      <form onSubmit={this.submitHandler} className="form">
        <div className="row">
          <div className="col-lg-6 col-sm-6">
            <div className="form-field">
              <input
                value={name}
                onChange={this.changeHandler}
                type="text"
                name="name"
                placeholder="Name"
              />
              <p>{error.name ? error.name : ""}</p>
            </div>
          </div>
          <div className="col-lg-6 col-sm-6">
            <div className="form-field">
              <input
                value={lastname}
                onChange={this.changeHandler}
                type="text"
                name="lastname"
                placeholder="Lastname"
              />
              <p>{error.lastname ? error.lastname : ""}</p>
            </div>
          </div>
          <div className="col-lg-6 col-sm-6">
            <div className="form-field">
              <input
                onChange={this.changeHandler}
                value={email}
                type="email"
                name="email"
                placeholder="Email"
              />
              <p>{error.email ? error.email : ""}</p>
            </div>
          </div>
          <div className="col-lg-6 col-sm-6">
            <div className="form-field">
              <input
                onChange={this.changeHandler}
                value={subject}
                type="text"
                name="subject"
                placeholder="Subject"
              />
              <p>{error.subject ? error.subject : ""}</p>
            </div>
          </div>
          <div className="col-lg-12 col-sm-12">
            <div className="form-field">
              <textarea name="message" placeholder="Message" value={message} onChange={this.changeHandler}></textarea>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="contact-form-action">
              <button className="form-button" type="submit">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
export default ContactForm;
