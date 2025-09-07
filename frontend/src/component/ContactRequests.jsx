import React, { useEffect, useState } from "react";
import {
  Table,
  Container,
  Spinner,
  Alert,
  ToastContainer,
} from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { handleError } from "../utils";
const ContactRequests = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [admin, setAdmin] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("https://abhisheksahu-task-1-2.onrender.com/api/contact/admin/requests", {
        headers: {
          Authorization: localStorage.getItem("token"),
          "Content-type": "application/json",
          "User-Agent": "Mozilla/5.0"
        },
      })
      .then((res) => {
        setRequests(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load contact requests");
        setLoading(false);
      });
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

  return (
    <>
      {admin && (
        <Container className="py-4">
          <h3>Contact Us Requests</h3>
          {loading ? (
            <Spinner animation="border" />
          ) : error ? (
            <Alert variant="danger">{error}</Alert>
          ) : (
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Message</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {requests.map((req, index) => (
                  <tr key={req._id}>
                    <td>{index + 1}</td>
                    <td>{req.name}</td>
                    <td>{req.email}</td>
                    <td>{req.message}</td>
                    <td>{new Date(req.createdAt).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
              <ToastContainer />
            </Table>
          )}
        </Container>
      )}
    </>
  );
};

export default ContactRequests;
