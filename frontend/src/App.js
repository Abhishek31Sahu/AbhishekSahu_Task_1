import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Adminlogin from "./pages/Adminlogin";
import AddCourses from "./pages/AddCourses";
import AllCourses from "./pages/AllCourses";
import CourseDetail from "./pages/CourseDetail";
import CourseEdit from "./pages/CourseEdit";
import Contactpage from "./pages/Contactpage";
import RequestPage from "./pages/RequestPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/courses" replace />} />
          <Route path="/courses" element={<AllCourses />} />
          <Route path="/contactUs" element={<Contactpage />} />
          <Route path="/admin" element={<Adminlogin />} />
          <Route path="/admin/requests" element={<RequestPage />} />
          <Route path="/courses/add" element={<AddCourses />} />
          <Route path="/contact" element={<Contactpage />} />
          <Route path="/courses/:id/edit" element={<CourseEdit />} />
          <Route path="/courses/:id" element={<CourseDetail />} />
          <Route path="*" element={<h2>Page Not Found</h2>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
