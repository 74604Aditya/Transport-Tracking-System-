// Home.jsx

import React from "react";
import { Container } from "react-bootstrap";
import MyCarousel from "./MyCarousel";
import { Figure } from "react-bootstrap";
import './Home.css';

const Home = () => {
  return (
    <>
      <Container className="container">
        <MyCarousel />
        <br />
        <br />
      </Container>
      <br />
      <br />

      <section className="mission">
        <div className="mission-box flex">
          <div className="mission-cont">
            <h3>Our Mission</h3>
            <Figure>
              <Figure.Image
                width={1500}
                height={1000}
                alt="171x180"
                src="./Images/4197217.jpg"
              />
              <Figure.Caption style={{ fontSize: '1.2em' }}>
                G-Cargos' mission is to accelerate global trade by automating the cargo delivery process, improving visibility and ensuring a seamless customer experience, from origin to destination.
              </Figure.Caption>
            </Figure>
          </div>
        </div>
      </section>

      <section className="help">
        <div class="c-content-box c-size-md c-bg-white">
          <div class="container">
            <div class="row">

            <div class="col-md-3 col-sm-4">
                <p>
                  <img
                    className="img-responsive ls-is-cached lazyloaded"
                    data-src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202201/delhivery_0-sixteen_nine.jpg?size=948:533"
                    alt="Help Centre"
                    src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202201/delhivery_0-sixteen_nine.jpg?size=948:533"
                    loading="lazy"
                  />
                </p>
                <h3>Automotive Expertise</h3>
                <p>We utilise our extensive business and corporate finance expertise to advise companies in the automotive, transport and logistics sectors.</p>
              </div>

              <div class="col-md-3 col-sm-4">
                <p>
                  <img
                    className="img-responsive ls-is-cached lazyloaded"
                    data-src="https://www.tracktrans.com/wp-content/uploads/2021/06/customers-happy-shake.jpg"
                    alt="Help Centre"
                    src="https://www.tracktrans.com/wp-content/uploads/2021/06/customers-happy-shake.jpg"
                    loading="lazy"
                  />
                </p>
                <h3>Happy Customers</h3>
                <p>Our GPS vehicle trackers and system mean that a fleet manager, operations team, or customer service employee can monitor the exact location of the driver in a matter of seconds and update the end user.</p>
              </div>

              <div class="col-md-3 col-sm-4">
                <p>
                  <img
                    className="img-responsive ls-is-cached lazyloaded"
                    data-src="https://ontruck.org/wp-content/uploads/2014/07/cargo-crime2.jpg"
                    alt="Help Centre"
                    src="https://ontruck.org/wp-content/uploads/2014/07/cargo-crime2.jpg"
                    loading="lazy"
                  />
                </p>
                <h3>Safety & Security</h3>
                <p>One of the main benefits of the G-Cargo Tracking System is that our GPS trackers can prevent vehicle theft and help retrieve a stolen vehicle in a matter of minutes.</p>
              </div>


              <div class="col-md-3 col-sm-4">
                <p>
                  <img
                    className="img-responsive ls-is-cached lazyloaded"
                    data-src="https://assets.ramtracking.com/_assets/uploads/pages/68229f-ram-tracking-help-centre.png"
                    alt="Help Centre"
                    src="https://assets.ramtracking.com/_assets/uploads/pages/68229f-ram-tracking-help-centre.png"
                    loading="lazy"
                  />
                </p>
                <h3>Help Centre</h3>
                <p>Browse topical articles, the latest news, helpful guides, and our video library - on a variety of system-specific subjects.</p>
              </div>

              <div class="col-md-3 col-md-offset-1 col-sm-4">
                <p>
                  <img class="img-responsive ls-is-cached lazyloaded"
                    data-src="https://assets.ramtracking.com/_assets/uploads/pages/319001-ram-tracking-industry-blog.png"
                    alt="Industry Blog"
                    src="https://assets.ramtracking.com/_assets/uploads/pages/319001-ram-tracking-industry-blog.png"
                  />
                </p>
                <h3>Industry Blog</h3>
                <p>Discover customer case studies and learn how G-Cargo is making a positive difference in how business fleets and drivers are managed.</p>
              </div>

              <div class="col-md-3 col-md-offset-1 col-sm-4">
                <p>
                  <img class="img-responsive ls-is-cached lazyloaded"
                    data-src="https://assets.ramtracking.com/_assets/uploads/pages/f04568-ram-tracking-software-intgrations.png"
                    alt="Our Partners"
                    src="https://assets.ramtracking.com/_assets/uploads/pages/f04568-ram-tracking-software-intgrations.png"
                  />
                </p>
                <h3>Our Partners</h3>
                <p>Our software partners can help extend the functionality of the G-Cargo software, including integration with industry-specific solutions.</p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
