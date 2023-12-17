import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { TbPhone } from "react-icons/tb";

import {Link } from 'react-router-dom';
import sabiha from '../img/sabiha.jpg'
import samiksha from '../img/samiksha.jpeg'
import aditya from '../img/aditya.png'

const TeamComponent = () => {

  const image = {
    height : '30rem'
  }
  
  const cardStyle = {
    background: 'linear-gradient(to right, #ff7e5f, #feb47b)', // Replace with your preferred color stops
    color: 'white', // Text color on the card
    padding: '20px',
  };

  const icon = {
    color:"white",height:"3rem", width:"5rem", float:'right'
  }

  const phone= {
    height:"3rem",
    width:"2rem"
  }

  const teamMembers = [
    {
      id: 1,
      name: 'Sabiha Naikawadi',
      role: 'Software Engineer',
      linkedn: 'https://www.linkedin.com/in/sabiha-naikawadi-5b5872248/',
      gmail:'sabiha.naikawadi3@gmail.com',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      photo: sabiha, // Replace with the actual URL of the photo
      phn : 7775846686
    },
    {
      id: 2,
      name: 'Samiksha Choudhari',
      role: 'Software Engineer',
      linkedn: 'www.linkedin.com/in/samiksha-choudhari-983793214',
      gmail:'Samikshachou5@gmail.com',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      photo: samiksha, // Replace with the actual URL of the photo
      phn : 9765987880

    },
    {
      id: 3,
      name: 'Aditya Lande',
      role: 'Software Engineer',
      linkedn: 'https://www.linkedin.com/in/aditya-lande/',
      gmail:'adityalande45@gmail.com',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur commodo consequat.',
      photo: aditya, // Replace with the actual URL of the photo
      phn : 9325669824

    },
  ];

  return (
    <Container style={{background:"none"}} className="my-5">
      <h2 className="text-center mb-4" style={{fontWeight:"400"}}>Our Team</h2>
      <Row>
        {teamMembers.map((member) => (
          <Col key={member.id} md={4} sm={6} xs={12} className="mb-4">
            <Card style={cardStyle}>
              <Card.Img style={image} variant="top" src={member.photo} alt={member.name} />
              <Card.Body>
                <Card.Title>{member.name}</Card.Title>
                <Card.Subtitle style={{fontWeight:"800"}} className="mb-2 text-muted">{member.role}</Card.Subtitle>
                <Card.Text>{member.description}</Card.Text>
                <Card.Text> <TbPhone style={phone} /> {member.phn}</Card.Text>
                <Link to={member.linkedn}>
                    <FaLinkedin  style={icon} />
                </Link>
                <Link to={`mailto:${member.gmail}`}>
                    <BiLogoGmail  style={icon} />
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
     
    </Container>
  );
};

export default TeamComponent;
