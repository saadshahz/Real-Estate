import { Col, Row } from "antd";
import { useEffect, useState } from "react";
import HomeBanner from "../../../assets/HomeBanner.png";
import "./style.css";
// import Arrow from "../../../assets/svg/Arrow.jsx";
import ServiceCard from "../../ServiceCard/ServiceCard.jsx";
import HomeIcon from "../../../assets/svg/HomeIcon.jsx";
import CaptureIcon from "../../../assets/svg/CaptureIcon.jsx";
import PropertyIcon from "../../../assets/svg/PropertyIcon.jsx";
import SunriseIcon from "../../../assets/svg/SunriseIcon.jsx";
import StarsIcon from "../../../assets/svg/StarsIcon.jsx";
import ProductSlider from "../../ProductSlider/ProductSlider.jsx";
import getProperty from "../../../action/getProperty.js";
import ReviewSlider from "../../Reviews/ReviewSlider.jsx";
import getReview from "../../../action/getReview.js";
import BlogSlider from "../../blogs/BlogSlider.jsx";
import getBlogs from "../../../action/getBlogs.js";
// import centerBanner from './svg/centerBanner.jsx';

export default function Home() {
  const [customer, setCustomer] = useState(1);
  const [client, setClient] = useState(1);
  const [experience, setExperience] = useState(1);
  const [propertyData, setPropertyData] = useState([]);
  const [reviewData, setReviewData] = useState();
  const [blogData, setBlogData] = useState();

  useEffect(() => {

    // This is dummy functon to get dummy data
    const res = getProperty();
    setPropertyData(res);
  }, []);

  useEffect(() => {

    // This is dummy function to get dummy reviews
    const rev = getReview();
    setReviewData(rev);
  }, [])

  useEffect(() => {

    // This is dummy function to get dummy blogs
    const blog = getBlogs();
    setBlogData(blog);
  }, [])

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

      {/* Features Section Start */}
      <div className="features-section">
        <StarsIcon />
        <h2>Featured Properties</h2>
        <Row className="justify-between">
          <Col>
            <p>
              Explore our handpicked selection of featured properties. Each
              listing offers a glimpse into exceptional homes and investments
              available through Estatein. Click `View Details` for more
              information.
            </p>
          </Col>
          <Col>
            <a href="#">View All Properties</a>
          </Col>
        </Row>

        <div className="py-6">
          <ProductSlider data={propertyData} />
        </div>
      </div>
      {/* Features Section End */}

      {/* Reviews Section Start */}
      <div className="features-section">
        <StarsIcon />
        <h2>What Our Clients Say</h2>
        <Row className="justify-between">
          <Col>
            <p>
              Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs.
            </p>
          </Col>
          <Col>
            <a href="#">View All Testimonials</a>
          </Col>
        </Row>

        <div className="py-6">
          <ReviewSlider data={reviewData} />
        </div>
      </div>
      {/* Reviews Section End */}

      {/* Blog Section Start */}
      <div className="features-section">
        <StarsIcon />
        <h2>Frequently Asked Questions</h2>
        <Row className="justify-between">
          <Col>
            <p>
            Find answers to common questions about Estatein`s services, property listings, and the real estate process. We`re here to provide clarity and assist you every step of the way.
            </p>
          </Col>
          <Col>
            <a href="#">View All FAQ`s</a>
          </Col>
        </Row>

        <div className="py-6">
          <BlogSlider data={blogData}/>
        </div>
      </div>
      {/* Blog Section End */}
      

    </>
  );
}
