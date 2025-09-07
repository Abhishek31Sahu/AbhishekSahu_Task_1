import React, { useState, useEffect } from "react";
import axios from "axios";
import CourseCard from "../component/Coursecard";
import NavbarComp from "../Navbar";

import { handleError, handleSuccess } from "../utils";
function AllCourses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const getInfo = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/courses");
        const { success, message, data } = res.data;
        if (success) {
          handleSuccess(message);
          setCourses(data);
        } else if (!success) {
          handleError(message);
        }
      } catch (err) {
        console.error(err);
      }
    };
    getInfo();
  }, []);

  return (
    <>
      <NavbarComp />
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {courses.map((course) => (
          <div key={course._id}>
            <CourseCard data={course} />
          </div>
        ))}
      </div>
    </>
  );
}

export default AllCourses;
