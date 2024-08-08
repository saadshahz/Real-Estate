import React, { useEffect, useState } from "react";
import "./style.css";
import SearchIcon from "../../../assets/svg/SearchIcon";
import { Flex, Form, Input, Select } from "antd";
import getProperty from "../../../action/getProperty";
import ProductSlider from "../../ProductSlider/ProductSlider";
import StarsIcon from "../../../assets/svg/StarsIcon.jsx";

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
      <div className="property-hero-section">
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
                    onSelect={(value, e) => {
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
                    onSelect={(value, e) => {
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
                    onSelect={(value, e) => {
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
                    onSelect={(value, e) => {
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

      <div className="book-property">
        <StarsIcon />
        <h2>Let's Make it Happen</h2>
        <p className="pb-4">
          Ready to take the first step toward your dream property? Fill out the
          form below, and our real estate wizards will work their magic to find
          your perfect match. Don't wait; let's embark on this exciting journey
          together.
        </p>

        {/* Here will be the Booking Form */}
      </div>
    </>
  );
}
