import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../utils";
import { Button } from "react-bootstrap";
function DeleteCourse({ id }) {
  const [admin, setAdmin] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("role") === "admin") {
      setAdmin(true);
    } else {
      const timer = setTimeout(() => {
        navigate(`/courses`);
      }, 1000);
      handleError("your have not permission ");
      return;
    }
  }, []);
  const handelDelete = async () => {
    try {
      let res = await axios.delete(`https://abhisheksahu-task-1-2.onrender.com/api/courses/${id}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
          "Content-type": "application/json",
        },
      });
      console.log(res);
      const { message, success } = res.data;
      if (success) {
        handleSuccess(message);
        const timer = setTimeout(() => {
          navigate(`/courses`);
        }, 3000);
      } else if (!success) {
        handleError(message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {admin && (
        <div className="d-grid gap-2 mt-4">
          <Button variant="danger" onClick={handelDelete}>
            Delete
          </Button>
          <ToastContainer />
        </div>
      )}
    </>
  );
}

export default DeleteCourse;
