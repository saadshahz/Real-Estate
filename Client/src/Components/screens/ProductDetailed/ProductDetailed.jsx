// import { useState, useEffect } from "react";
import { Row, Col } from "antd"
import { useForm } from "react-hook-form";

// styling
import './style.css';

// components
// import BlogSlider from "../../Blogs/BlogSlider.jsx";
import Keys from "../../KeyFeature/Keys.jsx";

// API
import getProperty from "../../../action/getProperty.js";
// import getBlogs from "../../../action/getBlogs.js";

// icons
import StarsIcon from "../../../assets/svg/StarsIcon.jsx";
import Location from '../../screens/Contact/svg/Location.jsx';
import BedIcon from "./svg/BedIcon.jsx";
import BathIcon from "./svg/BathIcon.jsx";
import AreaIcon from "./svg/AreaIcon.jsx";

// images 
import Image1 from './Images/Image.png'
import Image3 from './Images/Image2.png'
import Image4 from './Images/Image3.png'
import Image2 from './Images/Image4.png'
import Image6 from './Images/Image5.png'
import Image5 from './Images/Image6.png'
import Image7 from './Images/Image7.png'
import Image8 from './Images/Image8.png'
import Image9 from './Images/Image9.png'
import Image10 from './Images/Image10.png'

export default function ProductDetailed() {

  const { register, handleSubmit } = useForm();
  // const [blogData, setBlogData] = useState();

  const onSubmit = (data) => {
    console.log(data);
  }

  // useEffect(() => {

  //   // This is dummy function to get dummy blogs
  //   const blog = getBlogs();
  //   setBlogData(blog);
  // }, [])

  const keys = [
    {
      points: "Expansive oceanfront terrace for outdoor entertaining",
    },
    {
      points: "Gourmet kitchen with top-of-the-line appliances",
    },
    {
      points: "Private beach access for morning strolls and sunset views",
    },
    {
      points: "Master suite with a spa-inspired bathroom and ocean-facing balcony",
    },
    {
      points: "Private garage and ample storage space",
    },
  ]

  return (
    <>
      <main style={{ marginTop: '100px' }} id="detailed">

        {/* Propert Image Section Start */}

        <section className="property-information-section">

          <div className="property-image-section">

            <div className="image-section">

              <div className="property-image">
                <img src={Image1} alt="Property Image" />
                <img src={Image2} alt="Property Image" />
                <img src={Image3} alt="Property Image" />
                <img src={Image4} alt="Property Image" />
                <img src={Image5} alt="Property Image" />
                <img src={Image6} alt="Property Image" />
                <img src={Image7} alt="Property Image" />
                <img src={Image8} alt="Property Image" />
                <img src={Image9} alt="Property Image" />
              </div>
              <div className="image-details">
                <img src={Image1} alt="" />
                <img src={Image10} alt="" />
              </div>

            </div>

            <article className="property-info">
              <Col className="intro">
                <h2>{getProperty.title ? 'title' : 'Seaside Serenity Villa'}</h2>
                <span className="location">
                  <Location />
                  {getProperty.Location ? 'Location' : 'Malibu, California'}
                </span>
              </Col>
              <Col className="pricing">
                Price:
                <span>
                  {getProperty.price ? 'Price' : '$1250000'}
                </span>
              </Col>
            </article>

          </div>

          <div className="property-description">

            <Col className="description-box">
              <Row className="description">
                <h6>Description</h6>
                <p>{getProperty.description ? getProperty.description : 'Discover your own piece of paradise with the Seaside Serenity Villa. T With an open floor plan, breathtaking ocean views from every room, and direct access to a pristine sandy beach, this property is the epitome of coastal living.'}</p>
              </Row>
              <Row className="features-box">
                <div>
                  <span>
                    <BedIcon />
                    Bedrooms
                  </span>
                  <p>{getProperty.bed ? '04' : '04'}</p>
                </div>
                <div>
                  <span>
                    <BathIcon />
                    Bathroom
                  </span>
                  <p>{getProperty.bath ? '03' : '03'}</p>
                </div>
                <div>
                  <span>
                    <AreaIcon />
                    Area
                  </span>
                  <p>{getProperty.area ? '2500 Square Feet' : '2500 Square Feet'}</p>
                </div>
              </Row>
            </Col>
            <Col className="property-keyFeature">
              <h6>Key Features and Amenities</h6>
              <div className="key-feature">
                {keys.map((item, idx) => {
                  return (
                    <div className="key" key={idx}>
                      <Keys title={item.points} />
                    </div>
                  );
                })}
              </div>
            </Col>

          </div>

        </section>

        {/* Propert Image Section End */}

        {/* Values Section Start */}

        <section className='inquiry-section'>
          <StarsIcon />
          <main className='inquiry'>
            <div className="inquiry-left-section">
              <h2>Inquire About Seaside Serenity Villa</h2>
              <p>
                Interested in this property? Fill out the form below, and our real estate experts will get back to you with more details, including scheduling a viewing and answering any questions you may have.
              </p>

            </div>
            <div className="inquiry-right-section">
              <form onSubmit={handleSubmit(onSubmit)} className='form-container'>
                <Row className='inputs-row'>
                  <Col className='inputs-box'>
                    <h6>First Name</h6>
                    <input {...register('firstName')} type="text" placeholder="Enter First Name" required />
                  </Col>
                  <Col className='inputs-box'>
                    <h6>Last Name</h6>
                    <input {...register('lastName')} type="text" placeholder="Enter Last Name" required />
                  </Col>
                </Row>
                <Row className='inputs-row'>
                  <Col className='inputs-box'>
                    <h6>Email</h6>
                    <input {...register('email')} type="email" placeholder="Enter your Email" required />
                  </Col>
                  <Col className='inputs-box'>
                    <h6>Phone Number</h6>
                    <input {...register('number')} type="number" placeholder="Enter Phone Number" required />
                  </Col>
                </Row>
                <Row className='location-row'>
                  <h6>Selected Property</h6>
                  <div className="location-input">
                    <input {...register('location')} type="text" id="message" placeholder='Enter Location Here' />
                    <Location />
                  </div>
                </Row>
                <Row className='message-row'>
                  <h6>Message</h6>
                  <textarea {...register('message')} id="message" placeholder='Enter Your Message Here..'></textarea>
                </Row>
                <Row className='terms-row'>
                  <Col className='condition-section'>
                    <input type="checkbox" name="true" id="ture" required />
                    <label htmlFor="true">I agree with <span> Terms of Use</span> and <span>Privacy Policy</span>.</label>
                  </Col>
                  <button>Send your Message</button>
                </Row>
              </form>

            </div>
          </main>

        </section>

        {/* Values Section End */}

        {/* Propert Information Section Start */}

        <section className="property-pricing-section">
          <div className="heading-section">
            <StarsIcon />
            <h1>Comprehensive Pricing Details</h1>
            <p>At Estatein, transparency is key. We want you to have a clear understanding of all costs associated with your property investment. Below, we break down the pricing for Seaside Serenity Villa to help you make an informed decision</p>
          </div>

          <main className="property-pricing">
            <article className="alert-box">
              <span className="note">Note</span>
              <span className="margin"></span>
              <p>The figures provided above are estimates and may vary depending on the property, location, and individual circumstances.</p>
            </article>
            <div className="pricing-details">
              <aside className="pricing">
                Listing Price:
                <span>
                  {getProperty.price ? 'Price' : '$1250000'}
                </span>
              </aside>
              <Col className="pricing-portions">
                <Row className="portion">
                  <Row className="heading">
                    <h6>Additional Fees</h6>
                    <button>Learn More</button>
                  </Row>
                  <span className="margin"></span>
                  <Row className="legal-section">
                    <div>
                      <h6>Property Transfer Tax</h6>
                      <p>$25,000 <span>Based on the sale price and local regulations</span></p>
                    </div>
                    <div>
                      <h6>Legal Fees</h6>
                      <p>$3,000 <span>Approximate cost for legal services, including title transfer</span></p>
                    </div>
                  </Row>
                  <span className="margin"></span>
                  <Row className="insurance-section">
                    <div>
                      <h6>Home Inspection</h6>
                      <p>$500 <span>Recommended for due diligence</span></p>
                    </div>
                    <div>
                      <h6>Property Insurance</h6>
                      <p>$1,200 <span>Annual cost for comprehensive property insurance</span></p>
                    </div>
                  </Row>
                  <span className="margin"></span>
                  <Row className="another-charges-section">
                    <div>
                      <h6>Mortgage Fees</h6>
                      <p>Varies <span>If applicable, consult with your lender for specific details</span></p>
                    </div>
                  </Row>
                </Row>
                <Row className="portion">
                  <Row className="heading">
                    <h6>Monthly Costs</h6>
                    <button>Learn More</button>
                  </Row>
                  <span className="margin"></span>
                  <Row className="another-charges-section">
                    <div>
                      <h6>Property Taxes</h6>
                      <p>$1,250 <span>Approximate monthly property tax based on the sale price and local rates</span></p>
                    </div>
                  </Row>
                  <span className="margin"></span>
                  <Row className="another-charges-section">
                    <div>
                      <h6>Homeowners` Association Fee</h6>
                      <p>$300 <span>Monthly fee for common area maintenance and security</span></p>
                    </div>
                  </Row>
                </Row>
                <Row className="portion">
                  <Row className="heading">
                    <h6>Total Initial Costs</h6>
                    <button>Learn More</button>
                  </Row>
                  <span className="margin"></span>
                  <Row className="legal-section">
                    <div>
                      <h6>Listing Price</h6>
                      <p>$1,250,000</p>
                    </div>
                    <div>
                      <h6>Additional Fees</h6>
                      <p>$29,700 <span>Property transfer tax, legal fees, inspection, insurance</span></p>
                    </div>
                  </Row>
                  <span className="margin"></span>
                  <Row className="insurance-section">
                    <div>
                      <h6>Down Payment</h6>
                      <p>$250,000 <span>20%</span></p>
                    </div>
                    <div>
                      <h6>Mortgage Amount</h6>
                      <p>$1,000,000 <span>If applicable</span></p>
                    </div>
                  </Row>
                </Row>
                <Row className="portion">
                  <Row className="heading">
                    <h6>Monthly Expenses</h6>
                    <button>Learn More</button>
                  </Row>
                  <span className="margin"></span>
                  <Row className="legal-section">
                    <div>
                      <h6>Property Taxes</h6>
                      <p>$1,250</p>
                    </div>
                    <div>
                      <h6>Homeowners` Association Fee</h6>
                      <p>$300</p>
                    </div>
                  </Row>
                  <span className="margin"></span>
                  <Row className="insurance-section addon-css">
                    <div>
                      <h6>Mortgage Payment</h6>
                      <p>Varies based on terms and interest rate <span>If applicable</span></p>
                    </div>
                    <div>
                      <h6>Property Insurance</h6>
                      <p>$100 <span>Approximate monthly cost</span></p>
                    </div>
                  </Row>
                </Row>
              </Col>
            </div>
          </main>
        </section>

        {/* Propert Information Section End */}

        {/* Blog Section Start */}
        <section className="feature-section">
          <div className="feature-content">
            <aside className="feature-detailed">
              <StarsIcon />
              <h2>Frequently Asked Questions</h2>
              <p>
                Find answers to common questions about Estatein’s services, property listings, and the real estate process. We’re here to provide clarity and assist you every step of the way.
              </p>
            </aside>
            <aside className="feature-button-section">
              <a className="feature-button" href="#">View All FAQ’s</a>
            </aside>
          </div>

          {/* <div className="feature-container">
            <ProductSlider data={propertyData} />
          </div> */}

          </section>
          {/* Blog Section End */}
      </main>
    </>
  )
}
