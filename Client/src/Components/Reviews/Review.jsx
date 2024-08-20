// import React from 'react'
import { Col , Row } from 'antd'
import ProfileImg from '../../assets/DummyProfile.png'
import Stars from './svg/Star.jsx'
import './style.css'

export default function Review(props) {

  const { title, desc, name, city, country } = { ...props };

    return (
        <div className="review-card">

            <div className='reviews-check'>
                <Stars />
                <Stars />
                <Stars />
                <Stars />
                <Stars />
            </div>

            <div className="client-content">
                <h5>{title}</h5>
                <p>{desc}</p>

            </div>
            
            <div className='client-info'>    
                <Row className="price ">
                    <Col>
                        <img src={ProfileImg} alt="Client Img" />
                    </Col>
                    <Col className='ml-4'>
                        <Row className='name'>{name}</Row>
                        <Row className='place'>{country}, {city}</Row>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
