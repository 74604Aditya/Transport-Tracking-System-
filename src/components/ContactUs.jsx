import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import React, { useState } from "react";
import './ContactUs.css';

export function ContactUs() {
    const [Data, setData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData, [name]: value,
        }));
    };

    const handleClick = () => {
        alert('We have received your mail.');
        setData({
            name: '',
            email: '',
            phone: '',
            message: '',
        });
    };

    return (
        <>
            <h1>Contact Us</h1>
            <br/>
            <Container className='contact' style={{ width: '80vw', height: 'auto', paddingBottom:'10px', backgroundColor: '#e0ffff', boxShadow: '0 0 10px #991313 ', borderRadius: '10px' }}>
                <Row className="sec">
                    <Col lg="5" className="mb-5">
                        <br />
                        <br />
                        <h2 className="sec_heading">Get In Touch With The Right Team</h2>
                        <br />
                        <address>
                            <a href="mailto:gcargologisticsex@gmail.com">Email : gcargologisticsex@gmail.com</a>
                            <p>Phone : +91 9325669823</p>
                            <p>Maan Rd, Phase 1, Hinjawadi Rajiv Gandhi Infotech Park, Hinjawadi, Pimpri-Chinchwad, Maharashtra 411057</p>
                        </address>
                    </Col>
                        <br />
                        <br />
                        <br />
                    <Col lg="7" className="d-flex align-items-center">
                        <form className="contact_form w-100">
                            <Row>
                                <Col lg="6" className="form-group">
                                    <input
                                        className="form-control"
                                        id="name"
                                        name="name"
                                        placeholder="Enter Name"
                                        type="text"
                                        required
                                        value={Data.name}
                                        onChange={handleChange}
                                    />
                                </Col>
                                <br />
                                <br />
                                <Col lg="6" className="form-group">
                                    <input
                                        className="form-control rounded-0"
                                        id="email"
                                        name="email"
                                        placeholder="Enter Email"
                                        type="email"
                                        required
                                        value={Data.email}
                                        onChange={handleChange}
                                    />
                                </Col>
                            </Row>
                            <br />
                            <Row>
                                <Col lg="12" className="form-group">
                                    <input
                                        className="form-control rounded-0"
                                        id="phone"
                                        name="phone"
                                        placeholder="Phone Number"
                                        type="text"
                                        required
                                        pattern="[0-9]{10}"
                                        value={Data.phone}
                                        onChange={handleChange}
                                    />
                                </Col>
                            </Row>
                            <br />
                            <textarea
                                className="form-control rounded-0"
                                id="message"
                                name="message"
                                placeholder="Type Your Message Here"
                                rows="5"
                                required
                                value={Data.message}
                                onChange={handleChange}
                            ></textarea>
                            <br /><br />
                            <Row className="text-center">
                                <Col lg="12" className="form-group">
                                    <Button variant="outline-success" onClick={handleClick}>Send Message</Button>{' '}
                                </Col>
                            </Row>

                        </form>
                    </Col>
                </Row >
            </Container >
            <br />
            <br />
            <Container className='office'>
            <br />
            <br />
                <CardGroup>
                    <Card>
                        <Card.Body>
                            <Card.Title>Pune Office</Card.Title>
                            <br />
                            <Card.Text>
                                <p>Email : <a href="mailto:gcargologisticsex@gmail.com">gcargologisticsex@gmail.com</a></p>
                                <br />
                                <p>Address : Maan Rd, Phase 1, Hinjawadi Rajiv Gandhi Infotech Park, Hinjawadi, Pimpri-Chinchwad, Maharashtra 411057</p>
                                <br />
                                <p>Phone: 55 654 541 17</p>
                                <br />
                                <p>Hours : Mon-Sat[8am – 8pm]</p>
                                <br />
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>
                            <Card.Title>Mumbai Office</Card.Title>
                            <br />
                            <Card.Text>
                                <p>Email : <a href="mailto:gcargologisticsex@gmail.com">gcargologisticsex@gmail.com</a></p>
                                <br />
                                <p>Address : 201, Parasrampuriya Chamber, 2nd Floor, Opposite Railway, Station Malad West, Mumbai, Maharashtra 400064</p>
                                <br />
                                <p>Phone: 55 654 541 17</p>
                                <br />
                                <p>Hours : Mon-Sat[8am – 8pm]</p>
                                <br />
                            </Card.Text>
                        </Card.Body>

                    </Card>
                    <Card>
                        <Card.Body>
                            <Card.Title>Ahmednagar Office</Card.Title>
                            <br />
                            <Card.Text>
                                <p>Email : <a href="mailto:gcargologisticsex@gmail.com">gcargologisticsex@gmail.com</a></p>
                                <br />
                                <p>Address : Pipeline Rd, Ahilyanagari, Nandanvan Nagar, Ahmednagar, Maharashtra 414003</p>
                                <br />
                                <p>Phone: 55 654 541 17</p>
                                <br />
                                <p>Hours : Mon-Sat[8am – 8pm]</p>
                                <br />
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
                <br />
                <br />
            </Container>
        </>
    );
}
