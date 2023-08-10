import React from "react";
import { Container, Form } from "../styles/Signup.styled";

import facebook from "/facebook.png";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <img src={facebook} alt="Facebook" />
      <h2>Login to your account!</h2>
      <Form>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button>Sign In</button>
        <button onClick={() => navigate("/signup")}>
          Don't have an account ?
        </button>
      </Form>
    </Container>
  );
};

export default Signup;
