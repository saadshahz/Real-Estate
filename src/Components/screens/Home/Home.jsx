import { Button, Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import HomeBanner from "../../../assets/HomeBanner.png";
import "./style.css";
import Arrow from "../../../assets/svg/Arrow.jsx";
import ServiceCard from "../../ServiceCard/ServiceCard.jsx";
import HomeIcon from "../../../assets/svg/HomeIcon.jsx";
import CaptureIcon from "../../../assets/svg/CaptureIcon.jsx";
import PropertyIcon from "../../../assets/svg/PropertyIcon.jsx";
import SunriseIcon from "../../../assets/svg/SunriseIcon.jsx";

export default function Home() {
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

  const services = [
    {
      title: "Find Your Dream Home",
      icon: <HomeIcon />,
    },
    {
      title: "Unlock Property Value",
      icon: <CaptureIcon />,
    },
    {
      title: "Effortless Property Management",
      icon: <PropertyIcon />,
    },
    {
      title: "Smart Investments, Informed Decisions",
      icon: <SunriseIcon />,
    },
  ];
  return (
    <>
      {/* Hero Section Start */}
      <div className="hero-section ">
        <Row>
          <Col span={12}>
            <div className="banner-content">
              <h1>Discover Your Dream Property with Estatein</h1>
              <p>
                Your journey to finding the perfect property begins here.
                Explore our listings to find the home that matches your dreams.
              </p>
              <div className="banner-btn">
                <button>Learn More </button>
                <button>Browse Properties </button>
              </div>

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

              {/* <div className="rotator">
                <div className="inner-rotaor">
                  <div class="rotator-img">
                    <Arrow />
                  </div>
                  <div className="text">
                    <p>✨Discover Your Dream Property with Estatein</p>
                  </div>
                </div>
              </div> */}
            </div>
          </Col>
          <Col span={12}>
            <div className="banner-image">
              <img src={HomeBanner} alt="Banner" />
            </div>
          </Col>
        </Row>
      </div>
      {/* Hero Section End */}

      {/* Service Section Start */}
      <div className="service-section">
        <Row className="justify-between">
          {services.map((item, idx) => {
            return (
              <Col span={6} key={idx}>
                <ServiceCard title={item.title} icon={item.icon} />
              </Col>
            );
          })}
        </Row>
      </div>

      {/* Service Section End */}
    </>
  );
}
