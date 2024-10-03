// import React from 'react'
import { Col, Row } from "antd";
import Avatar from "../../assets/user-avatar.png";
import Stars from "./svg/Star.jsx";
import "./Reviews.css";
import { useEffect } from "react";
import EmtyStarIcon from "../../assets/svg/EmtyStarIcon.jsx";

export default function Review(props) {
  const { title, desc, name, city, country, rating } = { ...props };

  const ratingData = Array(rating).fill(null);

  useEffect(() => {
    ratingData.map((idx) => {
        return console.log(idx, "dsada");
      });
  }, [rating])
  
  
  return (
    <div className="review-card">
      <div className="reviews-check">
        {/* <Stars />
                <Stars />
                <Stars />
                <Stars />
                <Stars /> */}
        {/* {`${<Stars />}`.repeat(rating)} */}
        {Array(5).fill(null).map((_,indx) => {
            if (indx <= rating){
                return <Stars />;
            }
            else{
                return <EmtyStarIcon />
            }
        })}
      </div>

      <div className="client-content">
        <h5>{title}</h5>
        <p>{desc}</p>
      </div>

      <div className="client-info">
        <Row className="price items-center">
          <Col>
            <img src={Avatar} alt="Client Img" />
          </Col>
          <Col className="ml-4">
            <Row className="name">{name}</Row>
            <Row className="place">
              {country}, {city}
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
}
