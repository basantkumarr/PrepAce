import React from "react";
import dp from "../assets/downloadpc.avif";

const Download = () => {
  return (
    <div className="flex flex-col lg:flex-row pt-24 px-4 lg:px-8">
      <div className="flex w-full lg:w-1/2 flex-col mb-8 lg:mb-0">
        <h1 className="text-4xl  mb-16  lg:text-4xl text-gray-800 font-bold">
          Download Our <span className="text-[#31baa0]">App</span>
        </h1>
        <p className="mb-2 text-lg lg:text-xl text-gray-500">
          Live classes, Mock Tests, Videos, and eBooks in one package
        </p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <form className="banner-newsletter flex " id="test-form-banner">
                <div className="inputbox">
                  <span style={{ width: "max-content" }}>+91</span>
                  <input
                    type="tel"
                    className="mobNumber2"
                    placeholder="Enter your 10 digit mobile number"
                    pattern="^[6-9]{1}\d{9}$"
                    required
                    maxLength="10"
                    autoComplete="off"
                    value=""
                  />
                </div>
                <div className="submitbtn-dwnapp">
                  <button value="Get link" className="ripple">
                    Get link
                  </button>
                  <a href="https://adda247.app.link/webinstall"></a>
                  <div className="loader">
                    <div className="loading"></div>
                  </div>
                </div>
              </form>
              
             
            </div>
      </div>
      <div className="flex flex-wrap w-full justify-center lg:w-1/2 mt-8 lg:mt-0">
        <img src={dp} width={"300px"} alt="Download app" />
      </div>
    </div>
  );
};

export default Download;
