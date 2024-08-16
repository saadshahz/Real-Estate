import { useEffect, useState } from "react";
import "./style.css";
import SearchIcon from "../../../assets/svg/SearchIcon";
import { Flex, Form, Select, Row, Col } from "antd";
import getProperty from "../../../action/getProperty";
import ProductSlider from "../../ProductSlider/ProductSlider";
import StarsIcon from "../../../assets/svg/StarsIcon.jsx";
import Email from '../Contact/svg/Email.jsx';
import Phone from '../Contact/svg/Phone.jsx';

export default function Properties() {
  const [form] = Form.useForm();
  const [location, setLocation] = useState();
  const [property, setProperty] = useState();

  useEffect(() => {
    const res = getProperty();
    setProperty(res);
  }, []);

  const options = [
    {
      value: "1",
      label: "Not Identified",
    },
    {
      value: "2",
      label: "Closed",
    },
    {
      value: "3",
      label: "Communicated",
    },
    {
      value: "4",
      label: "Identified",
    },
    {
      value: "5",
      label: "Resolved",
    },
    {
      value: "6",
      label: "Cancelled",
    },
  ];
  const handleSearch = (values) => {
    console.log(values, "Click");
    console.log(location, "Click");
  };

  return (
    <>
      <div style={{marginTop: '100px'}} className="property-hero-section">
        <h1 className="pb-2">Find Your Dream Property</h1>
        <p>
          Welcome to Estatein, where your dream property awaits in every corner
          of our beautiful world. Explore our curated selection of properties,
          each offering a unique story and a chance to redefine your life. With
          categories to suit every dreamer, your journey{" "}
        </p>
        <div className="serach-filter-section ">
          <Form
            onFinish={handleSearch}
            form={form}
            className="w-full flex flex-col items-center "
          >
            <div className="search-bar w-[90%]">
              <Form.Item
                name="searchtext"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <input
                  type="text"
                  name="searchtext"
                  placeholder="Search Property..."
                />
              </Form.Item>
              <button type="primary" htmlType="submit">
                {" "}
                <SearchIcon /> Find Property
              </button>
            </div>

            <div className="fiter-bar py-4 w-full">
              <Flex gap="middle" dir="row">
                <Form.Item name="location">
                  <Select
                    style={{
                      width: "100%",
                    }}
                    // onChange={(e) => {
                    //   setLocation(e.target.value);
                    // }}
                    onSelect={(value) => {
                      form.setFieldValue(value);
                    }}
                    placeholder="Location..."
                    options={options}
                  />
                </Form.Item>
                <Form.Item name="property_type">
                  <Select
                    style={{
                      width: "100%",
                    }}
                    // onChange={(e) => {
                    //   setLocation(e.target.value);
                    // }}
                    onSelect={(value) => {
                      form.setFieldValue(value);
                    }}
                    placeholder="Property Type..."
                    options={options}
                  />
                </Form.Item>
                <Form.Item name="price_range">
                  <Select
                    style={{
                      width: "100%",
                    }}
                    // onChange={(e) => {
                    //   setLocation(e.target.value);
                    // }}
                    onSelect={(value) => {
                      form.setFieldValue(value);
                    }}
                    placeholder="Pricing Range..."
                    options={options}
                  />
                </Form.Item>
                <Form.Item name="property_size">
                  <Select
                    style={{
                      width: "100%",
                    }}
                    // onChange={(e) => {
                    //   setLocation(e.target.value);
                    // }}
                    onSelect={(value) => {
                      form.setFieldValue(value);
                    }}
                    placeholder="Property Size..."
                    options={options}
                  />
                </Form.Item>
              </Flex>
            </div>
          </Form>
        </div>
      </div>
      <div className="property p-4 ">
        <StarsIcon />
        <h2>Discover a World of Possibilities</h2>
        <p className="pb-4">
          Our portfolio of properties is as diverse as your dreams. Explore the
          following categories to find the perfect property that resonates with
          your vision of home
        </p>
        <ProductSlider data={property} />
      </div>

      <section className='booking-section'>
        <StarsIcon />
        <main className="booking">
          <div className='booking-content'>
            <h1>Let`s Make it Happen</h1>
            <p>Ready to take the first step toward your dream property? Fill out the form below, and our real estate wizards will work their magic to find your perfect match. Don`t wait; let`s embark on this exciting journey together.</p>
          </div>
          <form className='booking-container'>
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
              <Col className='inputs-box'>
                <h6>Phone Number</h6>
                <input type="number" placeholder="Enter Phone Number" required />
              </Col>
            </Row>
            <Row className='inputs-row'>
              <Col className='inputs-box'>
                <h6>Preferred Location</h6>
                <select name="cars" id="cars">
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
                </select>
              </Col>
              <Col className='inputs-box'>
                <h6>Property Type</h6>
                <select name="cars" id="cars">
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
                </select>
              </Col>
              <Col className='inputs-box'>
                <h6>No. of Bathroom</h6>
                <select name="bath" id="bath">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </Col>
              <Col className='inputs-box'>
                <h6>No. of Bedroom</h6>
                <select name="bed" id="bed">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </Col>
            </Row>
            <Row className="budget-row">
              <Col className='budget-box'>
                <h6>Budget</h6>
                <select name="socials" id="socials" >
                  <option value="facebook">Facebook</option>
                  <option value="instagram">Instagram</option>
                  <option value="whatsapp">Whatsapp</option>
                  <option value="other">Other</option>
                </select>
              </Col>
              <Col className="referal-box">
                <h6>Preferred Contact Method</h6>
                <Row className="referal">
                  <div className="options">
                    <Phone />
                    <input type="number" placeholder="Enter Phone Number" required />
                  </div>
                  <div className="options">
                    <Email />
                    <input type="email" placeholder="Enter Email" required />
                  </div>
                </Row>
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
    </>
  );
}
