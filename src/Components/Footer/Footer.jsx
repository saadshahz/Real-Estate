// import React from 'react';

const Footer = () => {
  return (
    <footer className="footer bg-gray-800 text-white py-8 absolute bottom-0 w-full">
      <div className="center mx-auto max-w-screen-xl">
        <div className="upper-section flex justify-between items-start">
          <div className="logo-section">
            <h2 className="text-2xl font-bold">REAL STATE</h2>
          </div>
          <div className="feature-section flex flex-wrap justify-between">
            <div className="tags-section mb-4">
              <a href="#" className="text-base hover:text-gray-400">Contact Us</a>
              <a href="#" className="text-base hover:text-gray-400 ml-4">CopyRight</a>
              <a href="#" className="text-base hover:text-gray-400 ml-4">Terms & Conditions</a>
              <a href="#" className="text-base hover:text-gray-400 ml-4">Privacy Policy</a>
            </div>
          </div>
        </div>
        <hr className="my-8 border-gray-700" />
        <div className="w-full flex justify-center">
            <p>© Created by Muhammad Ali & Saad Shehzad | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;