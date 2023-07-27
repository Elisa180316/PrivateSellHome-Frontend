import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { request } from "../utilities/fetch";
import { login } from "../reducers/authSlice";
import { Form, Button, Container } from "react-bootstrap";
import "../styles/signin.css";

const Signin = () => {
  
  //States//

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorFields, setErrorFields] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      setErrorFields(true);
      setTimeout(() => {
        setErrorFields(false);
      }, 3000);
    }

    try {
      const options = {
        "Content-Type": "application/json",
      };

      const data = await request("/auth/login", "POST", options, {
        email,
        password,
      });
      dispatch(login(data));
      navigate("/");
    } catch (error) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  };
  return (
    <Container
      style={{
        backgroundImage: "url(https://wallpapercave.com/dwp1x/RjJF2SI.jpg)",
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
      <div className=" login-form">
        <div>
          <h2 className="text-center text-primary mt-2 mb-3">Login</h2>
          <Form onSubmit={handleLogin}>
            <Form.Group controlId="email">
              <Form.Control
                className="mb-3 ms-3 me-3 mt-5"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ width: "300px" }}
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Control
                className="mb-3 ms-3 me-3 mt-5"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ width: "300px" }}
              />
            </Form.Group>
            <div className="d-flex justify-content-center mt-4 mb-4">
              <Button type="submit">Login</Button>
            </div>

            <p className="text-center" style={{ fontSize: "18px" }}>
              Don't have an account?{" "}
              <Link
                style={{ textDecoration: "none", fontWeight: "bold" }}
                to="/signup"
              >
                Register
              </Link>
            </p>
          </Form>
          {error && <div className="login-error">Wrong credentials</div>}
          {errorFields && (
            <div className="fields-login-error">Fill all fields!</div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Signin;