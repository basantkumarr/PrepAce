// src/components/CourseDetail.js

import React from 'react';
import { FaVideo, FaBook, FaRegCalendarAlt, FaFileAlt } from 'react-icons/fa';
import img from "../assets/course1.webp"
import ps from "../assets/google-play-store.svg"
const CourseDetail = () => {
  return (
    <div className="pdp-full-detail">
      

      <div className="priceInfoWithCard flex flex-col md:flex-row justify-between items-start p-4 md:p-8">
        <div className="pdpInfoSection flex-1">
          <div className="pdpBannerData">
            <div className="listingFewHourLeft flex items-center space-x-2 text-sm text-gray-500 mb-4">
              <img src="https://s3.ap-south-1.amazonaws.com/cp-storefront-stage-images/2816681694774747.png" alt="Offer Ending" loading="lazy" className="h-4 w-4" />
              <span>Offer Ending In</span>
              <div><p>01:55:19</p></div>
            </div>
            <h1 className="pdp-heading text-2xl md:text-4xl font-bold text-gray-800 mb-4">
              Random Course Title for IBPS, SBI, SIDBI, RBI Grade B, SEBI Grade A, NABARD Grade A and Other Grade A &amp; Grade B Bank Exams
            </h1>
            <div className="tagRating flex space-x-2 mb-4">
              <div className="popularTag bg-yellow-500 text-white px-2 py-1 rounded">3X Validity</div>
             </div>
         
            <div className="courseDetails text-lg font-semibold text-gray-700 mb-4">What will<span className="text-indigo-600"> you get</span></div>
            <div className="toGet">
              <div className="slider-wrapper">
                <ul className="slider flex space-x-4 overflow-x-auto mb-4">
                  <li className="flex flex-col items-center space-y-2">
                    <FaRegCalendarAlt className="h-8 w-8 text-gray-600" />
                    <div className="text-center">
                      <span className="block text-sm font-semibold">2000 Hrs</span>
                      <span className="text-xs text-gray-600">Online Live Classes</span>
                    </div>
                  </li>
                  <li className="flex flex-col items-center space-y-2">
                    <FaFileAlt className="h-8 w-8 text-gray-600" />
                    <div className="text-center">
                      <span className="block text-sm font-semibold">10912</span>
                      <span className="text-xs text-gray-600">Test Series</span>
                    </div>
                  </li>
                  <li className="flex flex-col items-center space-y-2">
                    <FaBook className="h-8 w-8 text-gray-600" />
                    <div className="text-center">
                      <span className="block text-sm font-semibold">5864</span>
                      <span className="text-xs text-gray-600">E-Books</span>
                    </div>
                  </li>
                  <li className="flex flex-col items-center space-y-2">
                    <FaVideo className="h-8 w-8 text-gray-600" />
                    <div className="text-center">
                      <span className="block text-sm font-semibold">21452</span>
                      <span className="text-xs text-gray-600">Videos</span>
                    </div>
                  </li>
                </ul>
              
              </div>
            </div>
            <div className="selectValidity pt-4">
              <div className="slelectValheading text-lg font-semibold text-gray-700 mb-2">Select Your <span className="text-[#31baa0]">Validity</span></div>
              <div className="validitywrap flex space-x-2">
                <button className="ripple bg-gray-300 px-4 py-2 rounded  ">12 Months</button>
                <button className="ripple bg-gray-300 text-white px-4 py-2 rounded">18 Months</button>
                <button className="ripple bg-gray-300 px-4 py-2 rounded  ">27 Months</button>
              </div>
            </div>
          </div>
        </div>
        <div className="pdpCardWrap mt-8 md:mt-0 md:ml-8 flex-shrink-0">
          <div className="pdpCard bg-white shadow-md rounded-lg overflow-hidden">
            <div className="pdpCardImg relative">
              <img src={img} alt="Bank Maha Pack Plus" className="w-full h-56 object-cover" />
              <div className="bgcolordiv absolute inset-0 bg-black opacity-25"></div>
            </div>
            <div className="pdpCardInfo p-4">
              <div className="pdpLang text-sm text-gray-600 mb-2">Hinglish</div>
              <div className="listingCardOptionTag bg-[#31baa0] text-white px-2 py-1 rounded">MAHAPACK</div>
            </div>
            <div className="pdpPriceWrap p-4 flex justify-between items-center">
              <div className="pdppriceleft flex gap-4">
                <div className="pdpOrignalPrice text-lg font-bold text-gray-900">₹ 5,499.07 </div>
                <div className="pdpOffPrice text-lg text-gray-500 line-through">₹23,909</div>
                <div className="pdpOffPercent text-lg text-green-600">(77% Off)</div>
              </div>
            </div>
          
            <div className="pdpBottomBtns p-4 flex justify-between items-center">
                <h1 className='text-xl text-gray-500 font-bold'>To access it <br /> <span  className='text-2xl'> Download</span> </h1>
                <img src={ps} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="disclaimerSection p-4 md:p-8 bg-gray-100 mt-8">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">Deta</h2>
        <p className="text-gray-600 text-sm">All content and materials provided are for educational purposes only. The discount and offers are subject to change without notice. Please refer to the official website for the latest updates.</p>
      </div>
    </div>
  );
};

export default CourseDetail;
