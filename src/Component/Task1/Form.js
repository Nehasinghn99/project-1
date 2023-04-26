import React, { useState } from "react";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Form.css";

const Form = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    gender: "",
    langauage: "",
  });

  const [records, setRecords] = useState([]);

  const inputEvent = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    if (
      user.name.length &&
      user.email.length &&
      user.password.length &&
      user.address.length &&
      user.gender.length &&
      user.langauage.length
    ) {
      e.preventDefault();
      const newUser = { ...user, id: new Date().getTime().toString() };
      setRecords([...records, newUser]);
      console.log(newUser);
    } else {
      alert("required the fill data");
      // toast.error("required the fill data");
    }
    // setUser({name:"", email:"", password:"", address:"", gender:"", langauage:""})
  };


  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <div className="header">Registration Form</div>

        <div className="containerlist" style={{ color: "red" }}>
          <div className="namelist">
            <input
              name="name"
              id="name"
              type="text"
              autoComplete="off"
              placeholder="Your Name"
              onChange={inputEvent}
              value={user.name}
            />
          </div>

          <div className="emaillist">
            <input
              name="email"
              id="email"
              type="text"
              autoComplete="off"
              placeholder="Your Email"
              onChange={inputEvent}
              value={user.email}
            />
          </div>

          <div className="passwordlist">
            <input
              name="password"
              id="password"
              type="password"
              autoComplete="off"
              placeholder="Your Password"
              onChange={inputEvent}
              value={user.password}
            />
          </div>

          <div className="addresslist">
            <input
              name="address"
              id="address"
              type="textarea"
              autoComplete="off"
              placeholder="Your Address"
              onChange={inputEvent}
              value={user.address}
            />
          </div>
        </div>

        <div className="genderlist">
          <label>Gender :</label>
          <input
            name="gender"
            id="male"
            type="radio"
            autoComplete="off"
            onChange={inputEvent}
            value="male"
            checked={user.gender == "male"}
          />
          Male
          <input
            name="gender"
            id="female"
            type="radio"
            autoComplete="off"
            onChange={inputEvent}
            value="female"
          />
          Female
        </div>

        <div className="langauagelist">
          <label>Langauage :</label>
          <input
            name="langauage"
            id="Hindi"
            type="checkbox"
            autoComplete="off"
            onChange={inputEvent}
            value="Hindi"
            checked={user.langauage == "Hindi"}
          />
          Hindi
          <input
            name="langauage"
            id="English"
            type="checkbox"
            autoComplete="off"
            onChange={inputEvent}
            value="English"
          />
          English
        </div>

        <button className="btn">Register</button>
      </div>
      <ToastContainer />
    </form>
  );
};

export default Form;
