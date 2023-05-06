import React from "react";
import { Link } from "react-router-dom";

export default function EmployeePortal() {
  return (
    <div className="container">
      <h1 className="mt-3">Employee Portal</h1>

      <button className="btn btn-success mt-4 mx-2">Clock In</button>
      <button className="btn btn-danger mt-4 mx-2">Clock Out</button>

      <div className="dropdown mt-5">
        <button
          type="button"
          className="btn btn-primary dropdown-toggle"
          data-bs-toggle="dropdown"
        >
          Actions
        </button>
        <ul className="dropdown-menu">
          <li>
            <Link className="dropdown-item" to="/adduser">
              Sign Up New Member
            </Link>
          </li>
          <li>
            <div>
              <Link className="dropdown-item" to="/terminateemployment">
                Terminate Employment
              </Link>
            </div>
          </li>
          <li>
            <Link className="dropdown-item" to="/members">
              Member List
            </Link>
          </li>
        </ul>
      </div>

      <h1 className="tasks mt-4">Daily Tasks</h1>

      <ol class="list-group list-group-numbered mt-5">
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto">
            <div class="fw-bold">Organize Equipment</div>
            Only uptairs
          </div>
          <span class="badge bg-danger rounded-pill">+</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto">
            <div class="fw-bold">Stock Fridges</div>
            Energy drinks only
          </div>
          <span class="badge bg-warning rounded-pill">+</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto">
            <div class="fw-bold">Front Desk Duty</div>
            Remember to smile
          </div>
          <span class="badge bg-success rounded-pill">+</span>
        </li>
      </ol>
      <span class="badge bg-danger rounded-pill mt-4 me-4">High Priority</span>
      <span class="badge bg-warning rounded-pill mt-4 me-4">
        Medium Priority
      </span>
      <span class="badge bg-success rounded-pill mt-4 me-4">Low Priority</span>
    </div>
  );
}
