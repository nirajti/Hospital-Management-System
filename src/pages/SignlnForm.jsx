import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { adminDetailsData } from "./data.js";
import "../App.css";
import ".App.jsx";


class SignUpForm extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      email: "",
      password: "",
      dob: "",
      mobileNumber: "",
      location: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();

    // Here you can add code to handle the form submission,
    // such as sending the data to a backend server or performing validation

    // For demonstration purposes, let's just log the form data to the console
    console.log("Form submitted:", this.state);
  }

  render() {
    return (
      <div>
        <div>
          <h3 style={{ textAlign: "center", paddingBottom: "10px" }}>
            Digital Medical Record Database
          </h3>
        </div>
        <div className="FormCenter">
          <div className="FormTitle">
            <NavLink to="/sign-in" className="FormTitle__Link">
              Login
            </NavLink>{" "}
            or
            <NavLink exact to="/" className="FormTitle__Link">
              Register
            </NavLink>
          </div>

          <form onSubmit={this.handleSubmit} className="FormFields">
            <div className="FormField">
              <label className="FormField__Label" htmlFor="username">
                Username
              </label>
              <input
                type="text"
                id="username"
                className="FormField__Input"
                placeholder="Enter your username"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
              />
            </div>

            <div className="FormField">
              <label className="FormField__Label" htmlFor="email">
                E-mail ID
              </label>
              <input
                type="email"
                id="email"
                className="FormField__Input"
                placeholder="Enter your email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>

            <div className="FormField">
              <label className="FormField__Label" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="FormField__Input"
                placeholder="Enter your password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>

            <div className="FormField">
              <label className="FormField__Label" htmlFor="dob">
                Date of Birth
              </label>
              <input
                type="date"
                id="dob"
                className="FormField__Input"
                name="dob"
                value={this.state.dob}
                onChange={this.handleChange}
              />
            </div>

            <div className="FormField">
              <label className="FormField__Label" htmlFor="mobileNumber">
                Mobile Number
              </label>
              <input
                type="text"
                id="mobileNumber"
                className="FormField__Input"
                placeholder="Enter your mobile number"
                name="mobileNumber"
                value={this.state.mobileNumber}
                onChange={this.handleChange}
              />
            </div>

            <div className="FormField">
              <label className="FormField__Label" htmlFor="location">
                Location
              </label>
              <input
                type="text"
                id="location"
                className="FormField__Input"
                placeholder="Enter your location"
                name="location"
                value={this.state.location}
                onChange={this.handleChange}
              />
            </div>

            <div className="FormField">
              <button
                className="FormField__Button mr-20"
                disabled={!this.canBeSubmitted()}
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  canBeSubmitted() {
    const {
      username,
      email,
      password,
      dob,
      mobileNumber,
      location
    } = this.state;
    return (
      username.length > 0 &&
      email.length > 0 &&
      password.length > 0 &&
      dob.length > 0 &&
      mobileNumber.length > 0 &&
      location.length > 0
    );
  }
}

export default SignUpForm;
