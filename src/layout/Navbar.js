import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import hivepic from "./hive.png";
import axios from "axios";

export default function Navbar() {
  const [memberCount, setMemberCount] = useState(0);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/user-count`)
      .then((response) => {
        setMemberCount(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-warning">
        <div className="navlogo mx-2">
          <img
            style={{ width: 50, height: 50 }}
            src={hivepic}
            className="navbar-logo"
            alt="hivepic"
          />
        </div>
        <div className="container-fluid">
          <a className="navbar-brand text-dark">Fury Hive Gym Co.</a>
          <a className="navbar-brand text-dark">Gym Members : {memberCount}</a>
        </div>
      </nav>
    </div>
  );
}
