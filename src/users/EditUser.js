import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function EditUser() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [user, setUser] = useState({
    name: "",
    membershipOption: "",
    email: "",
  });

  const { name, membershipOption, email } = user;

  const onInputChance = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/user/${id}`, user);
    navigate("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit User</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your name here."
                name="name"
                value={name}
                onChange={(e) => onInputChance(e)}
              />
              <div className="mb-3">
                <label htmlFor="MembershipOption" className="form-label">
                  Membership Option
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter your desired membership option here."
                  name="membershipOption"
                  value={membershipOption}
                  onChange={(e) => onInputChance(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Email" className="form-label">
                  E-mail
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter your e-mail here."
                  name="email"
                  value={email}
                  onChange={(e) => onInputChance(e)}
                />
              </div>
              <button type="submit" className="btn btn-outline-primary">
                Submit
              </button>
              <Link className="btn btn-outline-danger mx-2" to="/">
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
