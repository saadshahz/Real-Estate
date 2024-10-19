import { Col, Flex, Row } from "antd";
import { Link } from "react-router-dom";

import productCardDummy from "../../assets/productCardDummy.png";
import BedroomIcon from "../../assets/svg/BedroomIcon";
import VillaIcon from "../../assets/svg/VillaIcon";
import BathroomIcon from "../../assets/svg/BathroomIcon";

export default function ProductCard(props) {
  const {
    title,
    desc,
    feature,
    price,
    id,
    type,
    no_of_bathroom,
    no_of_bedroom,
  } = { ...props };

  const words = desc.split(" ");
  const truncatedText = words.slice(0, 10).join(" ");

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={productCardDummy} alt="Product Card" />
      </div>
      <div className="product-content w-full">
        <Row className="w-full h-24">
          <h5>{title}</h5>
          <p>{truncatedText} ...Read More</p>
        </Row>
        <Flex className="icons h-11 gap-2">
          <span className="flex items-center ">
            <BedroomIcon className={"mr-4"} /> {no_of_bedroom}-Room
          </span>
          <span className="flex items-center ">
            <BathroomIcon />
            {no_of_bathroom}-Bathroom
          </span>
          <span className="flex items-center ">
            <VillaIcon />
            {type}
          </span>
        </Flex>
        <Row className="price h-16 flex justify-between items-center">
          <Col className="h-full flex flex-col">
            <span>Price</span>
            <p>$ {price}</p>
          </Col>
          <Col className="button-section h-full w-72 flex justify-end items-center">
            <Link to={`/properties/detail/${id}`}>View Property Details</Link>
          </Col>
        </Row>
      </div>
    </div>
  );
}
