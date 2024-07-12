import React from "react";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { FaChalkboardTeacher, FaRegClipboard } from "react-icons/fa";
import { GiBookshelf } from "react-icons/gi";

const Subscroption = () => {
  return (
    <div className="mt-16 px-0  ">
      <div className="border flex flex-col lg:flex-row border-gray-400 rounded-3xl p-4 shadow-md lg:p-8">
        <div className="flex w-full lg:w-1/2 flex-col mb-8 lg:mb-0">
          <h1 className="text-3xl lg:text-5xl text-gray-800 mb-2 font-bold">
            One Stop Solution
          </h1>
          <h1 className="text-2xl lg:text-4xl text-gray-800 mb-4 font-bold">
            For Exam Preparation and Skills
          </h1>
          <p className="mb-6 text-lg lg:text-xl text-gray-500">
            Live classes, Mock Tests, Videos, and eBooks in one package
          </p>
          <button className="bg-[#31baa0] py-2 px-6 w-full lg:w-80 text-xl lg:text-3xl font-bold text-white rounded-lg">
            Get Subscription
          </button>
        </div>
        <div className="flex flex-wrap w-full lg:w-1/2">
          <div className="w-full sm:w-1/2 p-2">
            <div className="border border-[#31baa0] flex items-center rounded-lg p-4">
              <FaChalkboardTeacher color="#31baa0" size={"49px"} />
              <div className="ml-4">
                <h1 className="text-2xl font-bold">2000+</h1>
                <p className="text-gray-500">Live Classes</p>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 p-2">
            <div className="border border-[#31baa0] flex items-center rounded-lg p-4">
              <MdOutlineOndemandVideo color="#31baa0" size={"49px"} />
              <div className="ml-4">
                <h1 className="text-2xl font-bold">25000+</h1>
                <p className="text-gray-500">Recorded Videos</p>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 p-2">
            <div className="border border-[#31baa0] flex items-center rounded-lg p-4">
              <FaRegClipboard color="#31baa0" size={"49px"} />
              <div className="ml-4">
                <h1 className="text-2xl font-bold">4000+</h1>
                <p className="text-gray-500">Full Length Mock Tests</p>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 p-2">
            <div className="border border-[#31baa0] flex items-center rounded-lg p-4">
              <GiBookshelf color="#31baa0" size={"49px"} />
              <div className="ml-4">
                <h1 className="text-2xl font-bold">1500+</h1>
                <p className="text-gray-500">Sectional Practice Tests</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscroption;
