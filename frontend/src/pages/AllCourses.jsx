import React from "react";
import CourseCard from "../component/Coursecard";
function AllCourses() {
  const courses = [
    {
      id: 1,
      title: "Course 1",
      description: "Description 1",
      duration: "3 hours",
      price: "$30",
    },
    {
      id: 2,
      title: "Course 2",
      description: "Description 2",
      duration: "4 hours",
      price: "$40",
    },
    {
      id: 3,
      title: "Course 3",
      description: "Description 3",
      duration: "5 hours",
      price: "$50",
    },
  ];

  return (
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
      {courses.map((course) => (
        <CourseCard key={course.id} data={course} />
      ))}
    </div>
  );
}

export default AllCourses;
