import React from "react";
import { Container, Form } from "../styles/Signup.styled";

import facebook from "/facebook.png";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <img src={facebook} alt="Facebook" />
      <h2>Create new account!</h2>
      <Form>
        <input type="text" placeholder="Full name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button>Sign Up</button>
        <button onClick={() => navigate("/login")}>
          Already have an account ?
        </button>
      </Form>
    </Container>
  );
};

export default Signup;
