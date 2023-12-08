import React from 'react';
import { Container, Carousel } from 'react-bootstrap';
import './MyCarousel.css';

const MyCarousel = () => {
    return (
        <Container>
            <div class="max-width">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/Images/5205328.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <p>One Integration Everything You Need For Tracking</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/Images/2316756.jpg"
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <p>G-Cargo is a digital platform enabling customers to transport cargo worldwide in a few easy steps.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/Images/Screenshot 2023-12-07 202746.png"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <p>97% global coverage with 120+ providers in a single API. Smart, quick, and accurate method to track all your shipments.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </Container>
    );
};

export default MyCarousel;
