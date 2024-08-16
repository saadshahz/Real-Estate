// import React from 'react'
import { Col } from 'antd';
import './style.css'

import BannerSection from "../../Banner/BannerSection";
import HomeIcon from "../../../assets/svg/HomeIcon.jsx";
import CaptureIcon from "../../../assets/svg/CaptureIcon.jsx";
import PropertyIcon from "../../../assets/svg/PropertyIcon.jsx";
import SunriseIcon from "../../../assets/svg/SunriseIcon.jsx";
import ServiceCard from '../../ServiceCard/ServiceCard.jsx';
import Chart from '../../../assets/svg/Chart.jsx';
import PieChart from '../../../assets/svg/PieChart.jsx';
import Balance from '../../../assets/svg/Balance.jsx';
import Alert from '../../../assets/svg/Alert.jsx';
import Tenant from '../../../assets/svg/Tenant.jsx';
import Maintenance from '../../../assets/svg/Maintenance.jsx';
import Sparkling from '../../../assets/svg/Sparkling.jsx';
import PropertyValue from '../../PropertyValues/PropertyValue.jsx';
import StarsIcon from '../../../assets/svg/StarsIcon.jsx';
import ROI from '../../../assets/svg/ROI.jsx';
import Strategy from '../../../assets/svg/Strategy.jsx';
import Market from '../../../assets/svg/Market.jsx';
import Value from '../../Value/Value.jsx';

export default function Service() {

  const banner = [
    {
      title: "Elevate Your Real Estate Experience",
      desc: "Welcome to Estatein, where your real estate aspirations meet expert guidance. Explore our comprehensive range of services, each designed to cater to your unique needs and dreams."
    }
  ]

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

  const propertyValue = [
    {
      title: "Valuation Mastery",
      icon: <Chart />,
      desc: "Discover the true worth of your property with our expert valuation services.",
    },
    {
      title: "Strategic Marketing",
      icon: <PieChart />,
      desc: "Selling a property requires more than just a listing; it demands a strategic marketing approach.",

    },
    {
      title: "Negotiation Wizardry",
      icon: <Balance />,
      desc: "Negotiating the best deal is an art, and our negotiation experts are masters of it.",
    },
    {
      title: "Closing Success",
      icon: <Alert />,
      desc: "A successful sale is not complete until the closing. We guide you through the intricate closing process.",
    },
  ];

  const propertyManagement = [
    {
      title: "Tenant Harmony",
      icon: <Tenant />,
      desc: "Our Tenant Management services ensure that your tenants have a smooth and reducing vacancies."
    }, {
      title: "Maintenance Ease",
      icon: <Maintenance />,
      desc: "Say goodbye to property maintenance headaches. We handle all aspects of property upkeep."
    }, {
      title: "Financial Peace of Mind",
      icon: <Sparkling />,
      desc: "Managing property finances can be complex. Our financial experts take care of rent collection"
    }, {
      title: "Legal Guardian",
      icon: <SunriseIcon />,
      desc: "Stay compliant with property laws and regulations effortlessly."
    },
  ];

  const valuePoint = [
    {
      title: "Market Insight",
      icon: <Market />,
      desc: "OStay ahead of market trends with our expert Market Analysis. We provide in-depth insights into real estate market conditions"
    }, {
      title: "ROI Assessment",
      icon: <ROI />,
      desc: "Make investment decisions with confidence. Our ROI Assessment services evaluate the potential returns on your investments"
    }, {
      title: "Customized Strategies",
      icon: <Strategy />,
      desc: "Every investor is unique, and so are their goals. We develop Customized Investment Strategies tailored to your specific needs"
    }, {
      title: "Diversification",
      icon: <SunriseIcon />,
      desc: "Diversify your real estate portfolio effectively. Our experts guide you in spreading your investments across various property types and locations"
    },
  ]

  return (
    <>
      <section style={{marginTop: '100px'}} className="w-full bg-black">
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

      <section className='property-value-section w-full'>
        <StarsIcon />
        <main className='property-value'>

          <div className='property-content'>
            <h1>Unlock Property Value</h1>
            <p>Selling your property should be a rewarding experience, and at Estatein, we make sure it is. Our Property Selling Service is designed to maximize the value of your property, ensuring you get the best deal possible. Explore the categories below to see how we can help you at every step of your selling journey</p>
          </div>

          <div className='property-card-section flex' style={{ width: '100%', flexWrap: 'wrap', gap: '30px' }}>

            {propertyValue.map((item, idx) => {
              return (
                <div key={idx}>
                  <PropertyValue title={item.title} icon={item.icon} desc={item.desc} />
                </div>
              );
            })}

            <div className='big flex flex-col w-96'>
              <div className='w-full h-16 flex items-center justify-between'>
                <h1>Unlock the Value of Your Property Today</h1>
                <button className='property-button'>Learn More</button>
              </div>
              <p>Ready to unlock the true value of your property? Explore our Property Selling Service categories and let us help you achieve the best deal possible for your valuable asset.</p>
            </div>
          </div>
        </main>

      </section>

      <section className='property-value-section w-full'>
        <StarsIcon />

        <main className='property-value'>

          <div className='property-content'>
            <h1>Effortless Property Management</h1>
            <p>Owning a property should be a pleasure, not a hassle. Estatein`s Property Management Service takes the stress out of property ownership, offering comprehensive solutions tailored to your needs. Explore the categories below to see how we can make property management effortless for you</p>
          </div>

          <div className='property-card-section flex' style={{ width: '100%', flexWrap: 'wrap', gap: '30px' }}>

            {propertyManagement.map((item, idx) => {
              return (
                <div key={idx}>
                  <PropertyValue title={item.title} icon={item.icon} desc={item.desc} />
                </div>
              );
            })}

            <div className='big flex flex-col w-96'>
              <div className='w-full h-16 flex items-center justify-between'>
                <h1>Experience Effortless Property Management</h1>
                <button className='property-button'>Learn More</button>
              </div>
              <p>Ready to experience hassle-free property management? Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership.</p>
            </div>
          </div>
        </main>

      </section>

      <section className='value-section'>
        <StarsIcon />
        <main className='value'>
          <div className="left-section">
            <Col className='left-above'>
              <h2>Smart Investments, Informed Decisions</h2>
              <p>
                Building a real estate portfolio requires a strategic approach. Estatein`s Investment Advisory Service empowers you to make smart investments and informed decisions.
              </p>
            </Col>
            <Col className='left-below'>
              <h6>Unlock Your Investment Potential</h6>
              <p>Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership.</p>
              <button>Learn More</button>
            </Col>

          </div>
          <div className="right-section">
            {valuePoint.map((item, idx) => {
              return (
                <div className='value-container' key={idx}>
                  <Value title={item.title} icon={item.icon} desc={item.desc} />
                </div>
              );
            })}
          </div>
        </main>

      </section>

    </>
  )
}
