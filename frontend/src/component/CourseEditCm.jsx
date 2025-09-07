import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../utils";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  FloatingLabel,
} from "react-bootstrap";

function CourseEditCm() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    duration: "",
    price: "",
  });
  const [admin, setAdmin] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
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
    const getInfo = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/courses/${id}`);
        const { success, message, data } = res.data;
        if (success) {
          handleSuccess(message);
          const modi = {
            title: data.title,
            description: data.description,
            duration: data.duration,
            price: data.price,
          };
          setFormData(modi);
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
  }, [id]);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const course = formData;
    // call backend Api to add in database course
    try {
      const res = await axios.put(
        `http://localhost:5000/api/courses/${id}/edit`,
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
          navigate(`/courses/${id}`);
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
              <h3 className="mb-4 text-center text-danger">Edit Course</h3>
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
                        type="number"
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
                    Edit
                  </Button>
                </div>
              </Form>
            </Col>
          </Row>
          <ToastContainer />
        </Container>
      )}
    </>
  );
}

export default CourseEditCm;
