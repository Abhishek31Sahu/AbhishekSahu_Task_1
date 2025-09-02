import React, { useState } from "react";
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
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
                <FloatingLabel controlId="price" label="Price" className="mb-3">
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
  );
}

export default CourseEditCm;
