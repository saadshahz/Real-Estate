// import React from 'react'
import { Col, Row } from "antd";
import { useEffect, useState } from "react";
import HomeBanner from "../../../assets/AboutHero.png";

import './style.css'
import StarsIcon from "../../../assets/svg/StarsIcon";

export default function About() {

  const [customer, setCustomer] = useState(1);
  const [client, setClient] = useState(1);
  const [experience, setExperience] = useState(1);

  useEffect(() => {
    if (customer < 200) {
      setCustomer(customer + 1);
    }
  }, [customer]);
  useEffect(() => {
    if (client < 10) {
      setClient(client + 1);
    }
  }, [client]);
  useEffect(() => {
    if (experience < 16) {
      setExperience(experience + 1);
    }
  }, [experience]);

  return (
    <>
      {/* Hero Section Start */}
      <div className="hero-section ">
        <Row>
          <Col span={12}>
            <div className="banner-content">
              <StarsIcon />
              <h1>Our Journey</h1>
              <p style={{ color: '#4d4d4d' }}>
                Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, we`ve expanded our reach, forged valuable partnerships, and gained the trust of countless clients.
              </p>

              <div className="feature">
                <div className="card">
                  <h6>{customer}+</h6>
                  <p>Happy Customers</p>
                </div>
                <div className="card">
                  <h6>10k+</h6>
                  <p>Properties For Clients</p>
                </div>
                <div className="card">
                  <h6>16+</h6>
                  <p>Years of Experience</p>
                </div>
              </div>
            </div>
          </Col>
          <Col span={12}>
            <div className="banner-image">
              <div className="image-section">
                <img src={HomeBanner} alt="Banner" />
              </div>
            </div>
          </Col>
        </Row>
      </div>
      {/* Hero Section End */}

      {/* Values Section Start */}
      <div className="values-section py-6">
        <div className="container">
          <div className="left-section">
            <StarsIcon />
            <h2>Our Values</h2>
            <p>
              Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.
            </p>
          </div>
          <div className="right-section">
            <Row className="row">
              <Col className="col">
                <Row>
                  <Col className="icon"><StarsIcon /></Col>
                  <Col className="icon-heading">Values</Col>
                </Row>
                <p></p>
              </Col>
              <Col className="col">A</Col>
            </Row>
            <Row className="row">
              <Col className="col">H</Col>
              <Col className="col">A</Col>
            </Row>
          </div>
        </div>
      </div>
      {/* Values Section End */}

    </>
  )
}
