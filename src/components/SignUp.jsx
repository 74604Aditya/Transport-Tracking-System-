// import { Container, Form, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
// const feild = {
//     width:"35rem"
// }

// export function SignUp(){

//     return(
//         <Container style={{border:"1px solid blue", height:"30rem",}} className="mt-5 d-flex align-items-center justify-content-center py-5">
//             <div>
//                 <h3>Sign Up</h3>
//                 <Form>
//                     <Form.Group className="mb-3" controlId="formBasicEmail">
//                         <Form.Label>Name</Form.Label>
//                         <Form.Control style={feild} type="text" placeholder="Enter your name" />
//                     </Form.Group>

//                     <Form.Group className="mb-3" controlId="formBasicEmail">
//                         <Form.Label>Email</Form.Label>
//                         <Form.Control style={feild} type="email" placeholder="Enter your name" />
//                     </Form.Group>

//                 <Form.Group className="mb-3" controlId="formBasicPassword">
//                     <Form.Label>Password</Form.Label>
//                     <Form.Control type="password" placeholder="Password" />
//                 </Form.Group>

//                 <Button variant="primary" type="submit">
//                     Sign Up
//                 </Button>
//                 <Link to="/" style={{float:"right", color:"black", textDecoration:"none"}}>
//                     Log in
//                 </Link>
//             </Form>
//             </div>
//         </Container>
//     );
// }

import React, { useState } from "react";
import { Alert, Col, Container, Row } from 'react-bootstrap';
import { saveSignup } from '../services/SignupService';
import './SignUp.css';

export function SignUp() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", password: "" });
  // const [email,setEmail] = useState("");
  // const [fullname,setFullname] =useState("");
  //  const [password, setPassword] = useState("");
  // const [phone, setPhone] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    //  authentication logic here (e.g., call an API endpoint)
    try {
      console.log("formdata:", formData);
      const result = await saveSignup(formData);
      console.log("result :", result);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", phone: "", password: "" });
      // setPassword("");
      // console.log('Email:', email);
      // console.log('fullname:',fullname);
      // console.log('Password:', password);
      // console.log('Phone No:', phone);

      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);

    } catch (error) {
      console.log(error);
    }

  };


  return (
    <Container className="main" style={{ width: "400px", background: "linear-gradient(140deg,#94bbe9 ,#eeaeca)" }}>
      <div>
        <br />
        <br />
        <h1>Create Account</h1>
        <br />
        <form onSubmit={handleSubmit}>
          <div>
            <input type="text" value={formData.name} placeholder="Full Name" className="name" name="name" onChange={handleChange} />
            <br />
            <br />
            <input type="text" value={formData.email} placeholder="Email" className="name" name="email" onChange={handleChange} />
            <br />
            <br />
            <input type="text" value={formData.phone} placeholder="Phone Number" className="name" name="phone" onChange={handleChange} />
            <br />
            <br />
            <input type={showPassword ? "text" : "password"} value={formData.password} placeholder="password" className="name" name="password" onChange={handleChange} />
            <div className="second-input"></div>
            {/* <input  className="name" onClick={handleChange}
                  
              type={
                      showPassword ? "text" : "password"
                  }
              placeholder="password"
              value={password}
              onChange={(e) =>
              setPassword(e.target.value)
                  }
              /> */}
            <input
              className="checkbox"
              type="checkbox"
              value={showPassword}
              name="password"
              onChange={() =>
                setShowPassword((prev) => !prev)
              }
            />
            <label for="check">Show Password</label>
          </div>
          <div className="second-input"></div>
          <button type="submit" >Signup</button>
          <br />
          <div>
            <p className="link">
              Already have an Account ? <Link to="/login">Login</Link>
            </p>
          </div>
        </form>
        <Row className="mt-3">
          <Col lg={4}>
            {isSubmitted ? <Alert variant="success">Student Registered</Alert> : null}
          </Col>
        </Row>
      </div>
    </Container>
  );
}