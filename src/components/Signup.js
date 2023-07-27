import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { request } from "../utilities/fetch";
import { useDispatch } from "react-redux";
import { register } from "../reducers/authSlice";
import { Container, Form, Button } from "react-bootstrap";
import "../styles/signup.css";

const Signup = () => {
  //States and Redux//

  const [state, setState] = useState({});
  const [photo, setPhoto] = useState("");
  const [error, setError] = useState(false)
  const [errorFields, setErrorFields] = useState(false)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //Function to get the prev state and return the new value to username,mail and pw//
  const handleState = (e) => {
    setState((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  // console.log(state)
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Object.values(state).some((v) => v === '')) {
      setErrorFields(true)
      setTimeout(() => {
        setErrorFields(false)
      }, 3000)
    }
    try {
      let filename = null;
      if (photo) {
        const formData = new FormData();
        //create a random id for img//
        filename = crypto.randomUUID() + photo.name;
        //Append to formData filename e img//
        formData.append("filename", filename);
        formData.append("image", photo);
        //fetch path, method,headers(empty object), formData, notstringify true//
        await request("/upload/image", "POST", {}, formData, true);
      } else {
        setErrorFields(true)
        setTimeout(() => {
          setErrorFields(false)
        }, 3000)
        return;
      }

      const headers = {
        "Content-Type": "application/json",
      };
      const data = await request("/auth/register", "POST", headers, {
        ...state,
        profileImg: filename,
      });
      // console.log(data);
      dispatch(register(data));
      navigate("/");
    } catch (error) {
      setError(true)
      setTimeout(() => {
        setError(false)
      }, 3000)
    }
  };

  return (
    <Container
      style={{
        backgroundImage: "url(https://wallpapercave.com/dwp1x/b8k34BD.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100%",
        maxWidth: "1400px",
        height: "712px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className=" register-form " style={{ height: "600px" }}>
        <div>
          <h2 className="text-center text-primary mt-2 mb-3">Register</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Control
              className="mb-3 ms-3 me-3 mt-5"
              type="text"
              name="username"
              placeholder="Username"
              onChange={handleState}
              style={{ width: "300px" }}
            />
            <Form.Control
              className="mb-3 ms-3 me-3 mt-5"
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleState}
              style={{ width: "300px" }}
            />

            <Form.Control
              className="mb-3 ms-3 me-3 mt-5"
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleState}
              style={{ width: "300px" }}
            />
            <Form.Label
              className="text-center mt-3 ms-4"
              style={{ color: "white", fontSize: "16px" }}
              htmlFor="photo"
            >
              Click here to upload your profile img
            </Form.Label>
            <Form.Control
              className="mb-3 ms-3 me-3 mt-5"
              id="photo"
              type="file"
              style={{ display: "none" }}
              onChange={(e) => setPhoto(e.target.files[0])}
            />
            <div className="d-flex justify-content-center mt-5 mb-4">
              <Button type="submit">Register</Button>
            </div>
            <p className="text-center" style={{ fontSize: "18px" }}>
              Already have an account? <Link style={{ textDecoration: "none", fontWeight: "bold" }}
                to="/signin"
              >
                Login
              </Link>
            </p>
          </Form>
          {error && (
          <div >
            Server error, try again.
          </div>
        )}
        {errorFields && (
          <div className="fields-register-error">
            Please fill all fields!
          </div>
        )}
        </div>
      </div>
    </Container>
  );
};

export default Signup;