import React from "react";
import shathy from '../assets/images/shathy.jpg'
const About = () => {
  return (
    <div id="about" className="mb-20">
      <h1 className="px-28 font-bold text-3xl underline mb-8">About Me</h1>
      <div className="card lg:card-side [w-90%] md:mx-24 shadow-lg">
        <figure className="md:w-1/3">
          <img src={shathy}alt="Album" className="w-44 rounded-full" />
        </figure>
        <div className="card-body w-2/3">
          <h2 className="card-title">Web Developer</h2>
          <p>I am Fronted Web Developer. I completed a course from Programming hero.Now I am learning Backend Web Development.I have skils about HTML, CSS, Bootstrap, Tailwind, JavaScript, ReactJs, Rest Api, React-router
          dom, DaisyUi, Mumba UI,Node.js, MongoDB, Firebase, React-Query etc.I have completed some Projects</p>
         
        </div>
      </div>
    </div>
  );
};

export default About;
