import react, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../utils";
import DeleteCourse from "./DeleteCourse";
import { Button } from "react-bootstrap";
function CourseInfo() {
  const [course, setCourse] = useState({
    title: "",
    description: "",
    duration: "",
    time: "",
  });
  const [admin, setAdmin] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();
  if (!id) {
    handleError("course doesnot exist");
  }
  useEffect(() => {
    if (localStorage.getItem("role") === "admin") {
      setAdmin(true);
    }
    const getInfo = async () => {
      try {
      const res = await axios.get(`https://abhisheksahu-task-1-2.onrender.com/api/courses/${id}`);
        const { success, message, data } = res.data;
        if (success) {
          handleSuccess(message);
          setCourse(data);
        } else if (!success) {
          handleError(message);

          const timer = setTimeout(() => {
            navigate("/courses");
          }, 3000);
        }
      } catch (err) {
        console.error(err);
      }
    };
    getInfo();
  }, []);

  const handleEdit = () => {
    navigate(`/courses/${id}/edit`);
  };
  return (
    <div>
      {course.title && (
        <div className="container mt-5">
          <div className="row">
            {/* Course Title */}
            <div className="col-12">
              <h2 className="text-success">{course.title}</h2>
              <hr />
            </div>
          </div>

          <div className="row">
            {/* Left Column: Description */}
            <div className="col-md-8">
              <h5>Description</h5>
              <p>{course.description}</p>

              <h5>Syllabus</h5>
              <ul>{course.title}</ul>
            </div>

            {/* Right Column: Metadata */}
            <div className="col-md-4">
              <div className="card p-3 shadow-sm">
                <h6>
                  <strong>Duration:</strong> {course.duration}
                </h6>
                <h6>
                  <strong>Price:</strong> ₹{course.price}
                </h6>

                <button className="btn btn-success mt-3">Enroll Now</button>
              </div>
            </div>
            {admin && (
              <div className="row">
                <div className="col-md-2">
                  <DeleteCourse id={id} />
                </div>
                <div className="col-md-2">
                  <div className="d-grid gap-2 mt-4">
                    <Button variant="danger" onClick={handleEdit}>
                      Edit
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <ToastContainer />
    </div>
  );
}

export default CourseInfo;
