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
import BlogSlider from "../../Blogs/BlogSlider.jsx";
import getBlogs from "../../../action/getBlogs.js";
import BannerTag from "./svg/BannerTag.jsx";

export default function Home() {
  const [customer, setCustomer] = useState(1);
  const [client, setClient] = useState(1);
  const [experience, setExperience] = useState(1);
  const [propertyData, setPropertyData] = useState([]);
  const [reviewData, setReviewData] = useState();
  const [blogData, setBlogData] = useState();

  useEffect(() => {
    // This is dummy functon to get dummy data
  }, []);

  useEffect(() => {
    fetchReview();
    fetchProperty();
  }, [reviewData, propertyData]);

  const fetchProperty = async () => {
    const res = await getProperty();
    setPropertyData(res);
  };

  const fetchReview = async () => {
    const res = await getReview();
    setReviewData(res);
  };

  useEffect(() => {
    // This is dummy function to get dummy blogs
    const blog = getBlogs();
    setBlogData(blog);
  }, []);

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
      <main id="page-1">
        {/* Hero Section Start */}
        <div className="hero-section ">
          <div className="banner-tag">
            <BannerTag />
          </div>

          <Row className="hero">
            <Col className="banner-content-section">
              <div className="banner-content">
                <div>
                  <h1>Discover Your Dream Property with Estatein</h1>
                  <p>
                    Your journey to finding the perfect property begins here.
                    Explore our listings to find the home that matches your
                    dreams.
                  </p>
                </div>
                <div className="banner-btn">
                  <button className="more-info">Learn More </button>
                  <button className="properties">Browse Properties </button>
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
              </div>
            </Col>
            <Col className="banner-image-section">
              <div className="banner-image">
                <img src={HomeBanner} alt="Banner" />
              </div>
            </Col>
          </Row>
        </div>
        {/* Hero Section End */}

        {/* Service Section Start */}

        <section className="service-section">
          {services.map((item, idx) => {
            return (
              <div className="w-full h-full" key={idx}>
                <ServiceCard title={item.title} icon={item.icon} />
              </div>
            );
          })}
        </section>

        {/* Service Section End */}

        {/* Features Section Start */}

        <section className="feature-section">
          <div className="feature-content">
            <aside className="feature-detailed">
              <StarsIcon />
              <h2>Featured Properties</h2>
              <p>
                Explore our handpicked selection of featured properties. Each
                listing offers a glimpse into exceptional homes and investments
                available through Estatein. Click `View Details` for more
                information.
              </p>
            </aside>
            <aside className="feature-button-section">
              <a className="feature-button" href="#">
                View All Properties
              </a>
            </aside>
          </div>

          <div className="feature-container  py-4">
            <ProductSlider data={propertyData} />
          </div>
        </section>

        {/* Features Section End */}

        {/* Reviews Section Start */}

        <section className="feature-section">
          <div className="feature-content">
            <aside className="feature-detailed">
              <StarsIcon />
              <h2>What Our Clients Say</h2>
              <p>
                Read the success stories and heartfelt testimonials from our
                valued clients. Discover why they chose Estatein for their real
                estate needs.
              </p>
            </aside>
            <aside className="feature-button-section">
              <a className="feature-button" href="#">
                View All FAQ’s
              </a>
            </aside>
          </div>

          <div className="feature-container py-4">
            <ReviewSlider data={reviewData} />
          </div>
        </section>

        {/* Reviews Section End */}

        {/* Blog Section Start */}

        <section className="feature-section">
          <div className="feature-content">
            <aside className="feature-detailed">
              <StarsIcon />
              <h2>Frequently Asked Questions</h2>
              <p>
                Find answers to common questions about Estatein’s services,
                property listings, and the real estate process. We’re here to
                provide clarity and assist you every step of the way.
              </p>
            </aside>
            <aside className="feature-button-section">
              <a className="feature-button" href="#">
                View All FAQ’s
              </a>
            </aside>
          </div>

          <div className="feature-container  py-4">
            <BlogSlider data={blogData} />
          </div>
        </section>

        {/* Blog Section End */}
      </main>
    </>
  );
}
