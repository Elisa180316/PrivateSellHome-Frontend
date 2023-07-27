import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { request } from "../utilities/fetch";
import { useSelector } from "react-redux";
import { Modal, Form, Button, Container } from "react-bootstrap";
import "../styles/deleteMyProperty.css";

const DeleteMyProperty = () => {
  const { id } = useParams();
  const { token } = useSelector((state) => state.auth);
  const [showModal, setShowModal] = useState(false);
  const [propertyDetails, setPropertyDetails] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [initialPhoto, setInitialPhoto] = useState(null);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();
  //Fetch property by id//
  useEffect(() => {
    const fetchPropertyDetails = async () => {
      try {
        const data = await request(`/property/find/${id}`, "GET");
        setPropertyDetails(data);
        setPhoto(data.img);
        setInitialPhoto(data.img);
        setShowModal(true);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPropertyDetails();
  }, [id]);

  const handleState = (e) => {
    setPropertyDetails((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  //Function to delete//
  const handleDelete = async (e) => {
    e.preventDefault();

    let filename = initialPhoto;
    if (photo && photo !== initialPhoto) {
      const formData = new FormData();
      filename = crypto.randomUUID() + photo.name;
      formData.append("filename", filename);
      formData.append("image", photo);

      const options = {
        Authorization: `Bearer ${token}`,
      };

      await request("/upload/image", "DELETE", options);
    }

    try {
      const options = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      };

      await request(`/property/${id}`, "DELETE", options, {
        ...propertyDetails,
        img: filename,
      });
      setSuccess(true);
      setTimeout(() => {
        navigate(`/`);
      }, 2500);
    } catch (error) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2500);
    }
  };

  return (
    <Container>
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Delete your Property</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleDelete} encType="multipart/form-data">
            <Form.Group>
              <Form.Control
                value={propertyDetails?.title}
                className="mb-3"
                type="text"
                placeholder="Title"
                name="title"
                onChange={handleState}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                value={propertyDetails?.type}
                className="mb-3"
                type="text"
                placeholder="Type: apartment, single or villa"
                name="type"
                onChange={handleState}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                value={propertyDetails?.description}
                className="mb-3"
                type="text"
                placeholder="Description"
                name="description"
                onChange={handleState}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                value={propertyDetails?.continent}
                className="mb-3"
                type="text"
                placeholder="Location: Milano, Lucca, Firenze, Roma, Napoli or Torino"
                name="continent"
                onChange={handleState}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                value={propertyDetails?.price}
                className="mb-3"
                type="number"
                placeholder="Price"
                name="price"
                onChange={handleState}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                value={propertyDetails?.squaremeters}
                className="mb-3"
                type="number"
                placeholder="Squaremeters"
                name="squaremeters"
                onChange={handleState}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                value={propertyDetails?.bedrooms}
                className="mb-3"
                type="number"
                placeholder="Bedrooms (min. 2)"
                name="bedrooms"
                step={1}
                min={2}
                onChange={handleState}
              />
            </Form.Group>
            <Form.Group controlId="photo">
              <Form.Label>
                Property img
              </Form.Label>
              <Form.Control
                type="file"
                style={{ display: "none" }}
                onChange={(e) => setPhoto(e.target.files[0])}
              />
              {photo && <p>{photo.name}</p>}
            </Form.Group>

            <Button type="submit">Delete</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setShowModal(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
      {success && <div className="success">Property deleted successfully!</div>}
      {error && (
        <div>
          <span>There was an error deleting the listing! Try again.</span>
        </div>
      )}
    </Container>
  );
};

export default DeleteMyProperty;