// import React from 'react'
import { Col, Row } from "antd";
import { useEffect, useState } from "react";
import HomeBanner from "../../../assets/AboutHero.png";

import './style.css'
import StarsIcon from "../../../assets/svg/StarsIcon";
import StarIcon from './svg/StarIcon';
import ExcelenceIcon from './svg/ExcelenceIcon';
import ClientIcon from './svg/CLientIcon';
import Twitter from './svg/Twitter';
import Send from '../../footer/svg/Send'
import Domain from "./svg/Domain";
import Category from "./svg/Category";
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
            <div className="banner-content" style={{ height: '100%' }}>
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
      {/* Achievement Section End */}

      {/* Experience Section Start */}

      <div className="experience-section">
        <div className="container">
          <StarsIcon />
          <h2>Navigating the Estatein Experience</h2>
          <Row className="justify-between row">
            <Col>
              <p>
                At Estatein, we`ve designed a straightforward process to help you find and purchase your dream property with ease. Here`s a step-by-step guide to how it all works.
              </p>
            </Col>
          </Row>

          <div className="py-8 flex gap-6 cards-content">
            <div className="experience-card">
              <h6 style={{ fontSize: '20px', fontWeight: '500' }}>Step 01</h6>
              <div className="content">
                <h5 style={{ fontSize: '26px', fontWeight: '600' }}>Discover a World of Possibilities</h5>
                <p style={{ color: '#4d4d4d' }} className="py-4">Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location, type, size, and budget.</p>
              </div>
            </div>

            <div className="experience-card">
              <h6 style={{ fontSize: '20px', fontWeight: '500' }}>Step 02</h6>
              <div className="content">
                <h5 style={{ fontSize: '26px', fontWeight: '600' }}>Narrowing Down Your Choices</h5>
                <p style={{ color: '#4d4d4d' }} className="py-4">Once you`ve found properties that catch your eye, save them to your account or make a shortlist. This allows you to compare and revisit your favorites as you make your decision.</p>
              </div>
            </div>

            <div className="experience-card">
              <h6 style={{ fontSize: '20px', fontWeight: '500' }}>Step 03</h6>
              <div className="content">
                <h5 style={{ fontSize: '26px', fontWeight: '600' }}>Personalized Guidance</h5>
                <p style={{ color: '#4d4d4d' }} className="py-4">Have questions about a property or need more information? Our dedicated team of real estate experts is just a call or message away.</p>
              </div>
            </div>

            <div className="experience-card">
              <h6 style={{ fontSize: '20px', fontWeight: '500' }}>Step 04</h6>
              <div className="content">
                <h5 style={{ fontSize: '26px', fontWeight: '600' }}>See It for Yourself</h5>
                <p style={{ color: '#4d4d4d' }} className="py-4">Arrange viewings of the properties you`re interested in. We`ll coordinate with the property owners and accompany you to ensure you get a firsthand look at your potential new home.</p>
              </div>
            </div>

            <div className="experience-card">
              <h6 style={{ fontSize: '20px', fontWeight: '500' }}>Step 05</h6>
              <div className="content">
                <h5 style={{ fontSize: '26px', fontWeight: '600' }}>Making Informed Decisions</h5>
                <p style={{ color: '#4d4d4d' }} className="py-4">Before making an offer, our team will assist you with due diligence, including property inspections, legal checks, and market analysis. We want you to be fully informed and confident in your choice.</p>
              </div>
            </div>

            <div className="experience-card">
              <h6 style={{ fontSize: '20px', fontWeight: '500' }}>Step 06</h6>
              <div className="content">
                <h5 style={{ fontSize: '26px', fontWeight: '600' }}>Getting the Best Deal</h5>
                <p style={{ color: '#4d4d4d' }} className="py-4">We`ll help you negotiate the best terms and prepare your offer. Our goal is to secure the property at the right price and on favorable terms.</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Experience Section End */}
      {/* Team Section Start */}

      <div className="team-section">

        <div className="container">
          <StarsIcon />
          <h2>Meet the Estatein Team</h2>
          <Row className="justify-between row">
            <Col>
              <p>
                At Estatein, our success is driven by the dedication and expertise of our team. Get to know the people behind our mission to make your real estate dreams a reality.
              </p>
            </Col>
          </Row>

          <div className="py-8  cards-content">
            <div className="profile-card">
              <div className="profile-image-section">
                <img
                  src='./Images/Founder.jpg'
                  alt="Max Mitchell"
                  className="image"
                />
              </div>
              <div className="profile-info">
                <div className="profile-social">
                  <Twitter className="social-icon" />
                </div>
                <h5>Max Mitchell</h5>
                <p>Founder</p>
                <button className="message-button">
                  <span role="img" aria-label="wave">Say Hello 👋</span>
                  <div className="message-icon">
                    <Send />
                  </div>
                </button>
              </div>
            </div>

            <div className="profile-card">
            <div className="profile-image-section">
                <img className="image" src="./Images/Sarah.png" alt="Sarah" />
              </div>
              <div className="profile-info">
                <div className="profile-social">
                  <Twitter className="social-icon" />
                </div>
                <h5>Max Mitchell</h5>
                <p>Founder</p>
                <button className="message-button">
                  <span role="img" aria-label="wave">Say Hello 👋</span>
                  <div className="message-icon">
                    <Send />
                  </div>
                </button>
              </div>
            </div>

            <div className="profile-card">
            <div className="profile-image-section">
                <img
                  src="./Images/Founder.jpg" // Replace with the actual path to the image
                  alt="Max Mitchell"
                  className="profile-image"
                />
              </div>
              <div className="profile-info">
                <div className="profile-social">
                  <Twitter className="social-icon" />
                </div>
                <h5>Max Mitchell</h5>
                <p>Founder</p>
                <button className="message-button">
                  <span role="img" aria-label="wave">Say Hello 👋</span>
                  <div className="message-icon">
                    <Send />
                  </div>
                </button>
              </div>
            </div>

            <div className="profile-card">
            <div className="profile-image-section">
                <img className="image" src="./Images/Sarah.png" alt="" />
              </div>
              <div className="profile-info">
                <div className="profile-social">
                  <Twitter className="social-icon" />
                </div>
                <h5>Max Mitchell</h5>
                <p>Founder</p>
                <button className="message-button">
                  <span role="img" aria-label="wave">Say Hello 👋</span>
                  <div className="message-icon">
                    <Send />
                  </div>
                </button>
              </div>
            </div>



          </div>
        </div>

      </div>

      {/* Team Section End */}

      {/* Valued Client Section Start */}

      <div className="valued-client-section">
        <div className="container">
          <StarsIcon />
          <h2>Meet the Estatein Team</h2>
          <Row className="justify-between row">
            <Col>
              <p>
                At Estatein, our success is driven by the dedication and expertise of our team. Get to know the people behind our mission to make your real estate dreams a reality.
              </p>
            </Col>
          </Row>

          <div className="client-section py-8 gap-6">
            <div className="client-container">
              <div className="heading-section">
                <div>
                  <p>Since 2019</p>
                  <h5>ABC Corporation</h5>
                </div>

                <button className="button text-white py-2 px-4 rounded-md focus:outline-none" style={{ backgroundColor: 'rgba(38, 38, 38, 1)', border: '1px solid rgba(38, 38, 38, 1)', borderRadius: '7px' }}>Visit Website</button>

              </div>
              <div className="domain-section">
                <div className="features">
                  <div className="head">
                    <Domain /> <span>Domain</span>
                  </div>
                  <h5>Commercial Real Estate</h5>
                </div>
                <div className="margin"></div>
                <div className="features">
                  <div className="head">
                    <Category /> <span>Category</span>
                  </div>
                  <h5>Luxary Home Development</h5>
                </div>
              </div>
              <div className="comment-section">
                <h6>What They Said &#129303;</h6>
                <p>Estatein`s expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.</p>
              </div>
            </div>

            <div className="client-container">
              <div className="heading-section">
                <div>
                  <p>Since 2018</p>
                  <h5>GreenTech Enterprises</h5>
                </div>

                <button className="button text-white py-2 px-4 rounded-md focus:outline-none" style={{ backgroundColor: 'rgba(38, 38, 38, 1)', border: '1px solid rgba(26, 26, 26, 1)', borderRadius: '7px' }}>Visit Website</button>

              </div>
              <div className="domain-section">
                <div className="features">
                  <div className="head">
                    <Domain /> <span>Domain</span>
                  </div>
                  <h5>Commercial Real Estate</h5>
                </div>
                <div className="margin"></div>
                <div className="features">
                  <div className="head">
                    <Category /> <span>Category</span>
                  </div>
                  <h5>Retail Space</h5>
                </div>
              </div>
              <div className="comment-section">
                <h6>What They Said &#129303;</h6>
                <p>Estatein`s ability to identify prime retail locations helped us expand our brand presence. They are a trusted partner in our growth.</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Valued Client Section End */}

    </>
  )
}
