import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Container, Nav, Modal, Form, Button } from "react-bootstrap";
import "../styles/navBar.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { logout } from "../reducers/authSlice";
import { request } from "../utilities/fetch";

const NavBar = () => {
  //States//
  const [showModal, setShowModal] = useState(false);
  const [state, setState] = useState({});
  const [photo, setPhoto] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  //To see if is the login in navbar//
  const { user, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //Function to logout//
  const handleLogout = () => {
    dispatch(logout());
    navigate("/signin");
  };

  const handleState = (e) => {
    setState((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  //Function to close the form to add a property//

  const handleCloseForm = () => {
    setShowForm(false);
    setPhoto(null);
    setState({});
  };

  const handleListProperty = async (e) => {
    e.preventDefault();
    //Upload img//
    let filename = null;
    if (photo) {
      const formData = new FormData();
      filename = crypto.randomUUID() + photo.name;
      formData.append("filename", filename);
      formData.append("image", photo);

      await request("/upload/image", "POST", {}, formData, true);
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 5000);
      return;
    }

    try {
      if (
        Object.values(state).some((v) => !v) &&
        Object.values(state).length < 7
      ) {
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 5000);
        return;
      }

      const options = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      };
      await request("/property", "POST", options, { ...state, img: filename });
      // console.log(data)
      handleCloseForm();
      setShowModal(false);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 2500);
      setTimeout(() => {
        navigate(`/my-profile`);
      }, 2500);
    } catch (error) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2500);
    }
  };

  return (
    <Navbar
      expand="lg"
      className="d-flex"
      style={{ backgroundColor: "#66a2f0", position: 'sticky', top: 0, zIndex: 999999  }}
    >
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Brand className="ms-1">
          <Link to="/">PrivateSellHome</Link>
        </Navbar.Brand>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About us</Nav.Link>
            <Nav.Link href="/articles">Articles</Nav.Link>
            <Nav.Link href="/services">Services</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            {!user ? (
              <>
                <Link to="/signup">
                  <Button
                    className="btn btn-primary me-2 nav-btn"
                    style={{ marginBottom: "0.5rem", marginTop: "1rem" }}
                  >
                    Register
                  </Button>
                </Link>
                <Link to="/signin">
                  <Button className="btn btn-primary me-5 nav-btn">
                    Login
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <span
                  className="me-5"
                  style={{ cursor: "pointer", color: "red" }}
                >
                  Hello {user.username}!
                </span>
                <Link
                  className=" me-5"
                  style={{ cursor: "pointer", color: "black" }}
                  onMouseEnter={(e) => (e.target.style.color = "greenyellow")}
                  onMouseLeave={(e) => (e.target.style.color = "black")}
                  onClick={() => setShowModal(true)}
                >
                  Add your property
                </Link>
                <Link
                  to={`/my-profile`}
                  style={{ cursor: "pointer", color: "black" }}
                  onMouseEnter={(e) => (e.target.style.color = "greenyellow")}
                  onMouseLeave={(e) => (e.target.style.color = "black")}
                  onClick={() => setShowModal((prev) => !prev)}
                >
                  My Ads
                </Link>
                <Button
                  className="ms-4 nav-btn"
                  style={{
                    width: "fit-content",
                    marginTop: "0.3rem",
                    "@media (maxWidth: 768px)": { marginTop: "0.5rem" },
                  }}
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Modal show={showModal} onHide={() => setShowModal(false)} centered  style={{ zIndex: "99999999999999" }}>
        <Modal.Header closeButton>
          <Modal.Title>Add Property</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleListProperty} encType="multipart/form-data">
            <Form.Group>
              <Form.Control
                className="mb-3"
                type="text"
                placeholder="Title"
                name="title"
                onChange={handleState}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                className="mb-3"
                type="text"
                placeholder="Type: apartment, single or villa"
                name="type"
                onChange={handleState}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                className="mb-3"
                type="text"
                placeholder="Description"
                name="description"
                onChange={handleState}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                className="mb-3"
                type="text"
                placeholder="Location: Milano, Lucca, Firenze, Roma,Napoli or Torino"
                name="continent"
                onChange={handleState}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                className="mb-3"
                type="number"
                placeholder="Price"
                name="price"
                onChange={handleState}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                className="mb-3"
                type="number"
                placeholder="Squaremeters"
                name="squaremeters"
                onChange={handleState}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
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
                Add property img 
              </Form.Label>
              <Form.Control
                type="file"
                style={{ display: "none" }}
                onChange={(e) => setPhoto(e.target.files[0])}
              />
              {photo && <p>{photo.name}</p>}
            </Form.Group>
            <Button type="submit">Add Property</Button>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={() => setShowModal(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
      {error && (
        <div className="error">
          <span>Please fill in all fields!</span>
        </div>
      )}
      {success && (
        <div className="nav-success">
          <span>Property successfully added!</span>
        </div>
      )}
    </Navbar>
  );
};

export default NavBar;