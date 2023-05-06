import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function RegisterEmployee() {
  let navigate = useNavigate();
  const [employee, setEmployee] = useState({
    name: "",
    title: "",
    username: "",
    password: "",
  });

  const { name, title, username, password } = employee;

  const onInputChance = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/employee", employee);
    navigate("/");
  };

  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="Name" className="form-label">
            Name
          </label>
          <input
            type={"text"}
            className="form-control"
            name="name"
            placeholder="Enter employee name here."
            value={name}
            onChange={(e) => onInputChance(e)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Title" className="form-label">
            Title
          </label>
          <input
            type={"text"}
            name="title"
            className="form-control"
            placeholder="Enter employee title here."
            value={title}
            onChange={(e) => onInputChance(e)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Username" className="form-label">
            Username
          </label>
          <input
            type={"text"}
            name="username"
            className="form-control"
            placeholder="Enter employee username here."
            value={username}
            onChange={(e) => onInputChance(e)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Password" className="form-label">
            Password
          </label>
          <input
            type={"password"}
            name="password"
            className="form-control"
            placeholder="Enter employee password here."
            value={password}
            onChange={(e) => onInputChance(e)}
          />
        </div>
        <button type="submit" className="btn btn-outline-success">
          Register
        </button>
        <Link className="btn btn-outline-danger mx-2" to="/">
          Cancel
        </Link>
      </form>
    </div>
  );
}
