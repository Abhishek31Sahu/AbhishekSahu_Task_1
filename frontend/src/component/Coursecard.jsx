import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./Coursecard.css";
function CourseCard({ data, courseKey }) {
  return (
    <div
      className="card shadow-sm mb-4"
      style={{ maxWidth: "100em", marginTop: "2rem", marginLeft: "2rem" }}
    >
      <div className="card-header bg-success text-white">
        <h5 className="mb-0">{data.title}</h5>
      </div>
      <div className="card-body">
        <p className="card-text">{data.description}</p>
        <div className="d-flex justify-content-between">
          <span>
            <strong>Duration:</strong> {data.duration}
          </span>
          &nbsp;&nbsp;&nbsp;
          <span>
            <strong>Price:</strong> ₹{data.price}
          </span>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
