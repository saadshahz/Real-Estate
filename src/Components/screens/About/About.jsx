// import React from 'react'
import { Col, Row } from "antd";
import { useEffect, useState } from "react";
import HomeBanner from "../../../assets/AboutHero.png";

import './style.css'
import StarsIcon from "../../../assets/svg/StarsIcon";
import StarIcon from './svg/StarIcon';
import ExcelenceIcon from './svg/ExcelenceIcon';
import ClientIcon from './svg/CLientIcon';

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
      <div className="hero-section about-hero">
        <Row>
          <Col span={12}>
            <div className="banner-content" style={{height: '100%'}}>
              <StarsIcon />
              <h1 style={{ fontSize: '72px' }}>Our Journey</h1>
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
                <Row className="title">
                  <StarIcon />
                  <h1>Trust</h1>
                </Row>
                <p className="para">Trust is the cornerstone of every successful real estate transaction.</p>
              </Col>
              <div className="margin"></div>
              <Col className="col">
                <Row className="title">
                  <ExcelenceIcon />
                  <h1>Excellence</h1>
                </Row>
                <p className="para">We set the bar high for ourselves. From the properties we list to the services we provide.</p>
              </Col>
            </Row>
            <div className="margin"></div>
            <Row className="row">
              <Col className="col">
                <Row className="title">
                  <ClientIcon />
                  <h1>Client-Centric</h1>
                </Row>
                <p className="para">Your dreams and needs are at the center of our universe. We listen, understand.</p>
              </Col>

              <div className="margin"></div>

              <Col className="col">
                <Row className="title">
                  <StarIcon />
                  <h1>Our Commitment</h1>
                </Row>
                <p className="para">We are dedicated to providing you with the highest level of service, professionalism, and support.</p>
              </Col>
            </Row>

          </div>
        </div>
      </div>
      {/* Values Section End */}

      { /* Achievement Section Start */}

      <div className="achievement-section">
        <div className="container">
          <StarsIcon />
          <h2>Frequently Asked Questions</h2>
          <Row className="justify-between row">
            <Col>
              <p>
                Find answers to common questions about Estatein`s services, property listings, and the real estate process. We`re here to provide clarity and assist you every step of the way.
              </p>
            </Col>
          </Row>

          <div className="py-8 flex gap-6">
            <div className="blog-card achievement-card">
              <h5 style={{ fontSize: '30px', fontWeight: '600' }}>3+ Years of Excellence</h5>
              <p className="py-4">With over 3 years in the industry, we`ve amassed a wealth of knowledge and experience, becoming a go-to resource for all things real estate.</p>
            </div>
            <div className="blog-card achievement-card">
              <h5 style={{ fontSize: '30px', fontWeight: '600' }}>Happy Clients</h5>
              <p className="py-4">Our greatest achievement is the satisfaction of our clients. Their success stories fuel our passion for what we do.</p>
            </div>
            <div className="blog-card achievement-card">
              <h5 style={{ fontSize: '30px', fontWeight: '600' }}>Industry Recognition</h5>
              <p className="py-4">We`ve earned the respect of our peers and industry leaders, with accolades and awards that reflect our commitment to excellence.</p>
            </div>
          </div>
        </div>
      </div>
      {/* Blog Section End */}

    </>
  )
}
