import React from "react";
import { useParams } from "react-router-dom";

function CourseDetails() {
  const { id } = useParams();

  // You can fetch course data using the ID here
  // Example: fetch(`/api/courses/${id}`)

  return (
    <div className="container mt-5">
      <h2>Course Details</h2>
      <p>Course ID: {id}</p>
      {/* Render course info here */}
    </div>
  );
}

export default CourseDetails;
