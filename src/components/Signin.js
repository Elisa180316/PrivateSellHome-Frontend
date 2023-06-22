import React from "react";
import "../styles/signin.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../reducers/authSlice";
import { useState } from "react";
import { request } from "../utilities/fetch";
import { Container } from "react-bootstrap";
//LOGIN FE FUNZIONA//
const Signin = () => {
  //States//
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
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
      console.error(error);
    }
  };
  return (
    <>
      <Container>
        <h2>Login</h2>
      </Container>
      <Container>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Type your email here"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input 
          type="password"
          placeholder="Type you password here"
          onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
          <p>Don't have an account? <Link to="/signup">Register</Link></p>
        </form>

      </Container>
    </>
  );
};

export default Signin;
