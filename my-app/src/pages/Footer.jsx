import React from 'react';
import img from "../assets/prepace-high-resolution-logo-transparent (1).png";
import ap from "../assets/google-play-store.svg";
import { FaInstagram } from "react-icons/fa6";
import { FiTwitter } from "react-icons/fi";



const Footer = () => {
  return (
    <div className="container bg-gray-800 mt-16 all">
      <hr />
      <footer className="py-4 bg-gray-800  text-white">
        <div className="row flex justify-between">
          <div className="col-6 col-md-2 mb-3">
            <h5 className="text-[#31baa0] text-xl">Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">Home</a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">Features</a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">Pricing</a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">FAQs</a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">About</a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h5 className="text-[#31baa0] text-xl">Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">Home</a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">Features</a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">Pricing</a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">FAQs</a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">About</a>
              </li>
            </ul>
          </div>

         

          <div className="col-md-5 offset-md-1      mb-3">
            <div className="d-flex mb-4 flex-column   flex-sm-row w-100 gap-2">
              <img src={img} width={"150px"} alt="Logo" />
            </div>
            <h5 className="text-[#31baa0]">208, Tower A, Unitech Cyber Park</h5>
            <p>Sector 39, Gurugram - 122002</p>
            <img src={ap} className='w-44 pt-3' alt="Google Play Store" />
          </div>
        </div>

        <div className="d-flex flex-column flex-sm-row justify-content-between py-2 my-2 pt-4 border-top">
          <p>© 2024 Company, Inc. All rights reserved.</p>
          <ul className="list-unstyled d-flex">
            <li className="ms-3">
              <a className="link-body-emphasis" href="#">
              <FiTwitter size={"35px"}  color='white'/>

              </a>
            </li>
            <li className="ms-3">
              <a className="link-body-emphasis" href="#">
                 <FaInstagram  size={"35px"} color='white'/>
               </a>
            </li>
            <li className="ms-3">
              <a className="link-body-emphasis" href="#">
                <svg className="bi" width="24" height="24">
                  <use xlinkHref="#facebook"></use>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
