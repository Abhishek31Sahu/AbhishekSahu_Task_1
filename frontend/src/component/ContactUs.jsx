import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../utils"; // Your custom toast handlers
import "react-toastify/dist/ReactToastify.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.name)
      setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/api/contact",
        formData
      );
      const { success, message } = res.data;

      if (success) {
        handleSuccess(message); // Show success toast
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        handleError(message); // Show error toast
        setTimeout(() => {
          navigate("/courses");
        }, 3000);
      }
    } catch (err) {
      const msg =
        err?.response?.data?.message || err.message || "Something went wrong";
      setError(msg); // Show inline error
    }
  };

  return (
    <Container className="py-5">
      <Row>
        {/* Left Column */}
        <Col md={6} className="mb-4">
          <h2 className="mb-3">Contact Us</h2>
          <p className="mb-4">We’d love to hear from you. Reach out anytime!</p>
          <ul className="list-unstyled mb-4">
            <li>
              <strong>Address:</strong> 123 HealthTech Lane, Kanpur
            </li>
            <li>
              <strong>Email:</strong> contact@yourproject.in
            </li>
            <li>
              <strong>Phone:</strong> +91 98765 43210
            </li>
          </ul>
        </Col>

        {/* Right Column */}
        <Col md={6}>
          <h4 className="mb-4">Send Us a Message</h4>
          {error && <Alert variant="danger">{error}</Alert>}
          {submitted && (
            <Alert variant="success">Message sent successfully!</Alert>
          )}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="message">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                name="message"
                placeholder="Your message"
                value={formData.message}
                onChange={handleChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Send Message
            </Button>
          </Form>
        </Col>
      </Row>
      <ToastContainer />
    </Container>
  );
};

export default ContactUs;
