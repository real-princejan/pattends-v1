import React from "react";

// component
import Login from "./components/Login";

// third party
import "remixicon/fonts/remixicon.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// pages
import Dashboard from "./components/Dashboard";
import Attendance from "./pages/Attendance";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import ShowTeacher from "./pages/ShowTeacher";
import ShowStudent from "./pages/ShowStudent";
import AddTeacher from "./pages/AddTeacher";
import AddStudent from "./pages/AddStudent";
import Student from "./pages/Student";
import Teacher from "./pages/Teacher";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          {/* Admin */}
          <Route path="/" element={<Dashboard />}>
            <Route path="" element={<Home />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/teacher" element={<Teacher />} />
            <Route path="/add-teachers" element={<AddTeacher />} />
            <Route path="/student" element={<Student />} />
            <Route path="/add-student" element={<AddStudent />} />
            <Route path="/show-teacher" element={<ShowTeacher />} />
            <Route path="/show-student" element={<ShowStudent />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
