import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import HostelDetails from "./pages/HostelDetails";
import RoomManagement from "./pages/RoomManagement";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            path="/managehostel/hosteldetails"
            element={<HostelDetails />}
          />
          <Route
            path="/managehostel/roommanagement"
            element={<RoomManagement />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
