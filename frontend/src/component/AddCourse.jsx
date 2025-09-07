import { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  FloatingLabel,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { handleError, handleSuccess } from "../utils";

function AddCourse() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    duration: "",
    price: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const course = formData;
    // call backend Api to add in database course
    try {
      const res = await axios.post(
        "https://abhisheksahu-task-1-2.onrender.com/api/courses",
        course,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
            "Content-type": "application/json",
          },
        }
      );
      const { data, message, success } = res.data;
      if (success) {
        handleSuccess(message);
        const timer = setTimeout(() => {
          navigate("/courses");
        }, 3000);
      } else if (!success) {
        handleError(message);
      }
    } catch (error) {
      console.log("Error adding course:", error);
    }
  };

  return (
    <>
      {admin && (
        <Container className="mt-5">
          <Row className="justify-content-md-center">
            <Col md={8}>
              <h3 className="mb-4 text-center text-danger">Add New Course</h3>
              <Form onSubmit={handleSubmit}>
                <FloatingLabel controlId="title" label="Title" className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Add a catchy title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                  />
                </FloatingLabel>

                <FloatingLabel
                  controlId="description"
                  label="Description"
                  className="mb-3"
                >
                  <Form.Control
                    as="textarea"
                    placeholder="Add description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    style={{ height: "100px" }}
                  />
                </FloatingLabel>

                <Row>
                  <Col md={4}>
                    <FloatingLabel
                      controlId="price"
                      label="Price"
                      className="mb-3"
                    >
                      <Form.Control
                        type="number"
                        placeholder="Enter price"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        required
                      />
                    </FloatingLabel>
                  </Col>
                  <Col md={8}>
                    <FloatingLabel
                      controlId="duration"
                      label="Duration"
                      className="mb-3"
                    >
                      <Form.Control
                        type="text"
                        placeholder="Enter duration"
                        name="duration"
                        value={formData.duration}
                        onChange={handleChange}
                        required
                      />
                    </FloatingLabel>
                  </Col>
                </Row>

                <div className="d-grid gap-2 mt-4">
                  <Button variant="danger" type="submit">
                    Add
                  </Button>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
}

export default AddCourse;
