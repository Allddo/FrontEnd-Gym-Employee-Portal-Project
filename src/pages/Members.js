import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Home() {
  const [users, setUsers] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/users");
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/user/${id}`);
    loadUsers();
  };

  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr className="rowheaders">
              <th scope="col">Entry Number</th>
              <th scope="col">Full Name</th>
              <th scope="col">Membership Option</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr className="rowsvals">
                <th scope="row" key={index}>
                  {" "}
                  {index + 1}{" "}
                </th>
                <td> {user.name} </td>
                <td> {user.membershipOption} </td>
                <td> {user.email} </td>
                <td>
                  <Link
                    className="btn btn-success mx-2 shadow"
                    to={`/viewuser/${user.id}`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-warning mx-2 shadow"
                    to={`/edituser/${user.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2 shadow"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link className="btn btn-danger mt-4" to="/employeeportal">
          Go back to employee portal
        </Link>
      </div>
    </div>
  );
}
