import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { login } from "../services/LoginService";
import { useNavigate } from "react-router-dom";
//import { Navigation } from "react-router"; 
import './Login.css';

export function Login() {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({ name: "", password: "" });


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log("formdata111:", formData);
            const result = await login(formData);
            console.log("result:", result);

            setFormData({ name: "", password: "" });
            navigate("/location", { state: { jwt: "Bearer ".concat(result?.token) } });
            // console.log(result)
        } catch (error) {
            console.log(error);
        }

    }


    return (
        <Container style={{ width: "400px", background: "linear-gradient(140deg,#94bbe9 ,#eeaeca)" }} className="login mt-5 d-flex align-items-center justify-content-center py-5">
            <div>
                <h3>LOG IN</h3>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your name" name="name" onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password" onChange={handleChange} />
                    </Form.Group>
                    <Link to="/location">
                        <Button variant="outline-success" onClick={handleSubmit} >Log In</Button>{' '}
                    </Link>
                    <br />
                    <p style={{ float: "right", color: "black", textDecoration: "none" }}>
                        <Link to="/signup">
                            Create An Account ? Sign Up
                        </Link>
                    </p>
                </Form>
            </div>
        </Container>
    );
}