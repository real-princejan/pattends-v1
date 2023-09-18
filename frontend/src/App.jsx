import React from "react";

// component
import Login from "./components/Login";

// third party
import "remixicon/fonts/remixicon.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// pages
import Dashboard from "./components/Dashboard";
import Attendance from "./pages/Admin/Attendance";
import Profile from "./pages/Admin/Profile";
import Home from "./pages/Admin/Home";
import ShowTeacher from "./pages/Admin/ShowTeacher";
import ShowStudent from "./pages/Admin/ShowStudent";
import AddTeacher from "./pages/Admin/AddTeacher";
import AddStudent from "./pages/Admin/AddStudent";
import Student from "./pages/Admin/Student";
import Teacher from "./pages/Admin/Teacher";
import EditTeacher from "./pages/Admin/EditTeacher";

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
            <Route path="/add-teacher" element={<AddTeacher />} />
            <Route path="/teacherEdit/:id" element={<EditTeacher />} />
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
