import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Adminlogin from "./pages/Adminlogin";
import AddCourses from "./pages/AddCourses";
import AllCourses from "./pages/AllCourses";
import CourseDetail from "./pages/CourseDetail";
import CourseEdit from "./pages/CourseEdit";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/courses" replace />} />
        <Route path="/courses" element={<AllCourses />} />
        <Route path="/admin" element={<Adminlogin />} />
        <Route path="/add-course" element={<AddCourses />} />
        <Route path="/course/:id" element={<CourseDetail />} />
        <Route path="/course/:id/edit" element={<CourseEdit />} />
        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
