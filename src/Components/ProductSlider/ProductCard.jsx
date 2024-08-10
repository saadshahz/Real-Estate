import { Col, Flex, Row } from "antd";
// import React from "react";
import productCardDummy from "../../assets/productCardDummy.png";
import BedroomIcon from "../../assets/svg/BedroomIcon";
import VillaIcon from "../../assets/svg/VillaIcon";
import BathroomIcon from "../../assets/svg/BathroomIcon";

export default function ProductCard(props) {
  const { title, desc, feature, price, id } = { ...props };
  
  const words = desc.split(" ");
  const truncatedText = words.slice(0, 12).join(" ");

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={productCardDummy} alt="Product Card" />
      </div>
      <div className="product-content">
        <h5>{title}</h5>
        <p className="py-4">{truncatedText} ...Read More</p>
        <Flex gap="middle">
          <span className="flex items-start ">
            <BedroomIcon /> {feature.no_of_bedroom}-Bedroom
          </span>
          <span className="flex items-center ">
            <BathroomIcon />
            {feature.no_of_bathroom}-Bathroom
          </span>
          <span className="flex items-center ">
            <VillaIcon />
            {feature.type}
          </span>
        </Flex>
        <Row className="price flex">
          <Col className="h-full flex flex-col">
            <span>Price</span>
            <p>$ {price}</p>
          </Col>
          <Col className="h-full">
            <a href={`/property/detail/${id}`}>View Property Details</a>
          </Col>
        </Row>
      </div>
    </div>
  );
}
