import React from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export default function TerminateEmployment() {
  let navigate = useNavigate();
  const [username, setUsername] = useState("");

  const onUsernameInput = (e) => {
    setUsername(e.target.value);
  };

  const onSubmit = async (e) => {
    let a = 0;
    e.preventDefault();
    await axios
      .delete(`http://localhost:8080/employee/${username}`)
      .catch((error) => {
        if (error.response.status === 500) {
          // handle "employee does not exist" error here
          console.log("Employee does not exist.");
        } else {
          // handle other errors here
          console.error(error);
        }
        a = 1;
      });
    if (a === 0) {
      navigate("/");
    }
  };

  return (
    <div className="container">
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label mt-4">
            Enter employee username below.
          </label>
          <input
            type={"text"}
            className="form-control mt-4"
            placeholder="Enter your username here to confirm termination."
            value={username}
            onChange={(e) => onUsernameInput(e)}
          />
          <button type="submit" className="btn btn-outline-primary mt-4">
            Submit
          </button>
          <Link
            className="btn btn-outline-danger mx-4 mt-4"
            to="/employeeportal"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}
