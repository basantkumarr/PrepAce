import React, { useState } from "react";
import { Link } from "react-router-dom";

const AllCourses = () => {
  const [activeTab, setActiveTab] = useState("govtJobs");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const courses = [
    { id: 1, name: "SSC Exam", imgSrc: "https://img.adda247.com/tabs/1587813214844.png?tr=w-120" },
    { id: 2, name: "Banking Exam", imgSrc: "https://img.adda247.com/tabs/1587813214844.png?tr=w-120" },
    { id: 3, name: "Railway Exam", imgSrc: "https://img.adda247.com/tabs/1587813214844.png?tr=w-120" },
    { id: 3, name: "Railway Exam", imgSrc: "https://img.adda247.com/tabs/1587813214844.png?tr=w-120" },
    { id: 3, name: "Railway Exam", imgSrc: "https://img.adda247.com/tabs/1587813214844.png?tr=w-120" },
    { id: 3, name: "Railway Exam", imgSrc: "https://img.adda247.com/tabs/1587813214844.png?tr=w-120" },
    { id: 3, name: "Railway Exam", imgSrc: "https://img.adda247.com/tabs/1587813214844.png?tr=w-120" },
    { id: 3, name: "Railway Exam", imgSrc: "https://img.adda247.com/tabs/1587813214844.png?tr=w-120" },
    { id: 3, name: "Railway Exam", imgSrc: "https://img.adda247.com/tabs/1587813214844.png?tr=w-120" },
    { id: 8, name: "Engineering Exam", imgSrc: "https://img.adda247.com/tabs/1587813214844.png?tr=w-120" },
    { id: 8, name: "Engineering Exam", imgSrc: "https://img.adda247.com/tabs/1587813214844.png?tr=w-120" },
    { id: 9, name: "Medical Exam", imgSrc: "https://img.adda247.com/tabs/1587813214844.png?tr=w-120" },
    { id: 10, name: "Law Exam", imgSrc: "https://img.adda247.com/tabs/1587813214844.png?tr=w-120" },
    { id: 10, name: "Law Exam", imgSrc: "https://img.adda247.com/tabs/1587813214844.png?tr=w-120" },
  ];

  return (
    <div className="pt-20 px-4 lg:px-8">
      <h1 className="text-4xl lg:text-5xl font-bold mb-8">
        Explore <span className="text-[#31baa0]">Courses</span>
      </h1>
      <div className="border-b-2  border-gray-300">
        <div className="flex flex-wrap      justify-center">
          <div
            className={`w-full lg:w-1/3 text-xl lg:text-2xl py-2 font-semibold text-center cursor-pointer ${
              activeTab === "govtJobs"
                ? "border-b-4 border-[#31baa0] text-[#31baa0]"
                : "hover:bg-green-50"
            }`}
            onClick={() => handleTabClick("govtJobs")}
          >
            Govt Jobs Exams
          </div>
          <div
            className={`w-full lg:w-1/3 text-xl lg:text-2xl py-2 font-semibold text-center cursor-pointer ${
              activeTab === "techCourses"
                ? "border-b-4 border-[#31baa0] text-[#31baa0]"
                : "hover:bg-green-50"
            }`}
            onClick={() => handleTabClick("techCourses")}
          >
            Tech Courses
          </div>
          <div
            className={`w-full lg:w-1/3 text-xl lg:text-2xl py-2 font-semibold text-center cursor-pointer ${
              activeTab === "ugPgExams"
                ? "border-b-4 border-[#31baa0] text-[#31baa0]"
                : "hover:bg-green-50"
            }`}
            onClick={() => handleTabClick("ugPgExams")}
          >
            UG and PG Entrance Exams
          </div>
        </div>
      </div>
      <div className="mt-8">
        <div className="h-96 border-2 flex flex-wrap rounded-xl gap-3 p-6 overflow-auto no-scrollbar">
          {courses.map((course) => (
            <Link to="/course" key={course.id} className="w-full lg:w-1/4 all p-1 mx-4 hover:bg-slate-100 rounded-lg flex items-center">
              <img src="https://st.adda247.com/https://s3.ap-south-1.amazonaws.com/app-img-adda247/haryanasscthumb1678798072.png?tr=w-120" width={"70px"} alt={course.name} />
              <div className="ml-4">
                <h2 className="text-lg font-semibold">{course.name}</h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllCourses;
