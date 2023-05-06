import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Members from "./pages/Members";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUser from "./users/AddUser";
import EditUser from "./users/EditUser";
import ViewUser from "./users/ViewUser";
import HomePage from "./pages/HomePage";
import RegisterEmployee from "./pages/RegisterEmployee";
import EmployeePortal from "./pages/EmployeePortal";
import TerminateEmployment from "./pages/TerminateEmployment";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/members" element={<Members />} />
          <Route exact path="/adduser" element={<AddUser />} />
          <Route exact path="/edituser/:id" element={<EditUser />} />
          <Route exact path="/viewuser/:id" element={<ViewUser />} />
          <Route
            exact
            path="/terminateemployment"
            element={<TerminateEmployment />}
          />
          <Route exact path="/employeeportal" element={<EmployeePortal />} />
          <Route
            exact
            path="/registeremployee"
            element={<RegisterEmployee />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
