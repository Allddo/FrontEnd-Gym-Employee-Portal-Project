import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function HomePage() {
  let navigate = useNavigate();
  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const loadEmployee = async () => {
    const result = await axios
      .get(`http://localhost:8080/employee/${inputUsername}`)
      .catch((error) => {
        if (error.response.status === 500) {
          // handle "employee does not exist" error here
          console.log("Employee does not exist.");
        } else {
          // handle other errors here
          console.error(error);
        }
      });
    if (result != null) {
      navigate("/employeeportal");
    }
  };

  const handleUsernameChange = (event) => {
    setInputUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setInputPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    loadEmployee();
    //console.log(inputUsername);
  };

  return (
    <div className="container">
      <h1 className="loginHeader">Employee Login</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="Username" className="form-label">
            Username
          </label>
          <input
            type={"text"}
            className="form-control"
            name="username"
            placeholder="Enter your username here."
            value={inputUsername}
            onChange={(e) => handleUsernameChange(e)}
          />
          <div className="mb-3">
            <label htmlFor="Password" className="form-label">
              Password
            </label>
            <input
              type={"password"}
              name="password"
              className="form-control"
              placeholder="Enter your password here."
              value={inputPassword}
              onChange={(e) => handlePasswordChange(e)}
            />
          </div>
          <button type="submit" className="btn btn-primary shadow">
            Login
          </button>
          <Link className="btn btn-success mx-2 shadow" to="/registeremployee">
            Register New Employee
          </Link>
        </div>
      </form>
    </div>
  );
}
