import React from 'react';
import { Link } from 'react-router-dom';
import img from "../assets/course1.webp";

const Courses = () => {
  const courseList = [
    { id: 1, title: "React Basics", description: "Learn the basics of React, a popular JavaScript library for building user interfaces.", imgSrc: img, link: "/course/react-basics" },
    { id: 2, title: "Advanced React", description: "Dive deeper into React and learn about advanced concepts and patterns.", imgSrc: img, link: "/course/advanced-react" },
    { id: 3, title: "JavaScript Essentials", description: "Master the fundamentals of JavaScript, the language of the web.", imgSrc: img, link: "/course/javascript-essentials" },
    { id: 4, title: "CSS for Beginners", description: "Learn how to style web pages using CSS, from basics to advanced techniques.", imgSrc: img, link: "/course/css-beginners" },
    { id: 5, title: "HTML5 Mastery", description: "Get a solid understanding of HTML5 and build well-structured web pages.", imgSrc: img, link: "/course/html5-mastery" },
    { id: 6, title: "Web Development Bootcamp", description: "A comprehensive bootcamp covering all aspects of web development.", imgSrc: img, link: "/course/web-dev-bootcamp" },
  ];

  return (
    <div className="pt-4 all">
      <div><h1 className="text-3xl font-bold text-gray-700 my-4">Courses for Web Dev</h1></div>
      <div className="container marketing">
        <div className="row">
          {courseList.map((course) => (
            <div key={course.id} className="col-lg-4 rounded-ms gap-2 border p-4 mb-4">
              <img className="rounded-md" src={course.imgSrc} alt={course.title} />
              <h2 className="fw-normal text-2xl font-bold text-gray-800">{course.title}</h2>
              <p className="text-gray-500">{course.description}</p>
              <Link to="/detail" className="btn mt-4 bg-[#31baa0]  hover:bg-[#1b544a] text-white font-bold">View details »</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
