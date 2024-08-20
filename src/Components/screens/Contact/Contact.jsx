import { useState } from 'react'
import { Row, Col } from 'antd';
import './style.css';

import BannerSection from "../../Banner/BannerSection";
import Socials from '../../../assets/svg/Socials.jsx';
import Phone from '../../../assets/svg/Phone.jsx';
import Email from '../../../assets/svg/Email.jsx';
import Location from '../../../assets/svg/Location.jsx';
import ServiceCard from '../../ServiceCard/ServiceCard.jsx';
import StarIcon from '../../../assets/svg/StarsIcon.jsx'

import PhoneIcon from './svg/Phone.jsx';
import LocationIcon from './svg/Location.jsx';
import EmailIcon from './svg/Email.jsx';

// import images
import image1 from './Images/Image1.png';
import image2 from './Images/Image2.png';
import image3 from './Images/Image3.png';
import image4 from './Images/Image4.png';
import image5 from './Images/Image5.png';
import image6 from './Images/Image6.png';


export default function Contact() {

  const [selectedFilter, setSelectedFilter] = useState('All');

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  const activeButton = {
    gap: '8px',
    borderRadius: '10px',
    border: '1px solid rgba(38, 38, 38, 1)',
    backgroundColor: 'rgba(20, 20, 20, 1)',
  };

  const nonActiveButton = {
    gap: '8px',
    borderRadius: '10px',
    border: '1px solid rgba(38, 38, 38, 1)',
    backgroundColor: 'transparent',
  };


  const banner = [
    {
      title: "Get in Touch with Estatein",
      desc: "Welcome to Estatein's Contact Us page. We're here to assist you with any inquiries, requests, or feedback you may have. Whether you're looking to buy or sell a property, explore investment opportunities, or simply want to connect, we're just a message away. Reach out to us, and let's start a conversation."
    }
  ];

  const services = [
    {
      title: "info@estatein.com",
      icon: <Email />,
    },
    {
      title: "+1 (123) 456-7890",
      icon: <Phone />,
    },
    {
      title: "Main Headquarters",
      icon: <Location />,
    },
    {
      title: "Instagram  LinkedIn  Facebook",
      icon: <Socials />,
    },
  ];


  return (
    <>
      <section className="contect-hero w-full">
        <BannerSection title={banner[0].title} desc={banner[0].desc} />
      </section>

      <section className="service-section">
        {services.map((item, idx) => {
          return (
            <div key={idx}>
              <ServiceCard title={item.title} icon={item.icon} />
            </div>
          );
        })}
      </section>

      <section className='form-section'>
        <StarIcon />
        <main className="form">
          <div className='form-content'>
            <h1>Let`s Connect</h1>
            <p>We`re excited to connect with you and learn more about your real estate goals. Use the form below to get in touch with Estatein. Whether you`re a prospective client, partner, or simply curious about our services, we`re here to answer your questions and provide the assistance you need.</p>
          </div>
          <form className='form-container'>
            <Row className='inputs-row'>
              <Col className='inputs-box'>
                <h6>First Name</h6>
                <input type="text" placeholder="Enter First Name" required />
              </Col>
              <Col className='inputs-box'>
                <h6>Last Name</h6>
                <input type="text" placeholder="Enter Last Name" required />
              </Col>
              <Col className='inputs-box'>
                <h6>Email</h6>
                <input type="email" placeholder="Enter your Email" required />
              </Col>
            </Row>
            <Row className='inputs-row'>
              <Col className='inputs-box'>
                <h6>Phone Number</h6>
                <input type="number" placeholder="Enter Phone Number" required />
              </Col>
              <Col className='inputs-box'>
                <h6>Inquiry Type</h6>
                <select name="cars" id="cars">
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
                </select>
              </Col>
              <Col className='inputs-box'>
                <h6>How Did You Hear About Us?</h6>
                <select name="socials" id="socials">
                  <option value="facebook">Facebook</option>
                  <option value="instagram">Instagram</option>
                  <option value="whatsapp">Whatsapp</option>
                  <option value="other">Other</option>
                </select>
              </Col>
            </Row>
            <Row className='message-row'>
              <h6>Message</h6>
              <textarea name="message" id="message" placeholder='Enter Your Message Here..'></textarea>
            </Row>
            <Row className='terms-row'>
              <Col className='condition-section'>
                <input type="checkbox" name="true" id="ture" />
                <label htmlFor="true">I agree with <span> Terms of Use</span> and <span>Privacy Policy</span>.</label>
              </Col>
              <button>Send your Message</button>
            </Row>
          </form>
        </main>
      </section>

      <section className='location-section'>
        <StarIcon />
        <main className='location'>
          <div className='location-content'>
            <h1>Discover Our Office Locations</h1>
            <p>Estatein is here to serve you across multiple locations. Whether you`re looking to meet our team, discuss real estate opportunities, or simply drop by for a chat, we have offices conveniently located to serve your needs. Explore the categories below to find the Estatein office nearest to you</p>
          </div>
          <div className='place-location'>
            <Row className='filter-button'>
              <button
                style={selectedFilter === 'All' ? activeButton : nonActiveButton}
                onClick={() => handleFilterChange('All')}
              >All</button>
              <button
                style={selectedFilter === 'Regional' ? activeButton : nonActiveButton}
                onClick={() => handleFilterChange('Regional')}>Regional</button>
              <button 
                style={selectedFilter === 'International' ? activeButton : nonActiveButton}
                onClick={() => handleFilterChange('International')}>International</button>
            </Row>
            <Row className='filter-container'>
              {selectedFilter === 'All' || selectedFilter === 'International' ? (
                <div className='location-container'>
                  <Row className='heading-section'>
                    <Col className='titles'>
                      <span>Main Headquarters</span>
                      <span>123 Estatein Plaza, City Center, Metropolis</span>
                    </Col>
                    <p className='description'>Our main headquarters serve as the heart of Estatein. Located in the bustling city center, this is where our core team of experts operates, driving the excellence and innovation that define us.</p>
                  </Row>
                  <Row className='feature-section'>
                    <Row className='feature-section'>
                      <span className="flex items-start ">
                        <EmailIcon /> info@estatein.com
                      </span>
                      <span className="flex items-start ">
                        <PhoneIcon /> +1 (123) 628-7890
                      </span>
                      <span className="flex items-start ">
                        <LocationIcon /> Metropolis
                      </span>
                    </Row>
                  </Row>
                  <button className='location-button'>Get Direction</button>
                </div>
              ) : null}

              {selectedFilter === 'All' || selectedFilter === 'Regional' ? (
                <div className='location-container'>
                  <Row className='heading-section'>
                    <Col className='titles'>
                      <span>Regional Offices</span>
                      <span>456 Urban Avenue, Downtown District, Metropolis</span>
                    </Col>
                    <p className='description'>Estatein`s presence extends to multiple regions, each with its own dynamic real estate landscape. Discover our regional offices, staffed by local experts who understand the nuances of their respective markets.</p>
                  </Row>
                  <Row className='feature-section'>
                    <span className="flex items-start ">
                      <EmailIcon /> info@estatein.com
                    </span>
                    <span className="flex items-start ">
                      <PhoneIcon /> +1(123) 456 7890
                    </span>
                    <span className="flex items-start ">
                      <LocationIcon /> Metropolis
                    </span>
                  </Row>
                  <button className='location-button'>Get Direction</button>
                </div>
              ) : null}

            </Row>
          </div>
        </main>

      </section>

      <section className="gallery-section">
        <main className='gallery'>
          <Row className='gallery-image'>
            <Col className='column'>
              <Row className='row'>
                <img src={image1} alt="image-1" />
              </Row>
              <Row className='row'>
                <img src={image2} alt="image-2" />
              </Row>
            </Col>
            <Col className='column'>
              <Row className='row'>
                <img src={image3} alt="image-3" />
              </Row>
              <Row className='row2'>
                <img src={image4} alt="image-4" />
                <img src={image5} alt="image-5" />
              </Row>
            </Col>
          </Row>
          <Row className='gallery-content'>
            <Col className='column'>
              <StarIcon />
              <div className='content'>
                <h6>Explore Estatein`s World</h6>
                <p>Step inside the world of Estatein, where professionalism meets warmth, and expertise meets passion. Our gallery offers a glimpse into our team and workspaces, inviting you to get to know us better.</p>
              </div>
            </Col>
            <img src={image6} alt="image-6" />
          </Row>
        </main>
      </section>

    </>
  )
}
