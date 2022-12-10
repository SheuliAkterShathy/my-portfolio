import React from "react";

const Home = () => {
  return (
    <section className="dark:dark:bg-gray-800 dark:dark:text-gray-100">
      <div className="container flex flex-col justify-center md:px-10 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left md:w-2/3">
          <h1 className="text-4xl font-bold leading-none sm:text-4xl">
            Hi, I am Sheuli Akter
          </h1>
          <h2 className="text-xl font-bold">Fronted Web Developer</h2>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
            I like to call myself "a passionate Web developer". My first
            priority is learning Web development so that i can inhance my skill
            about this.I am learning and mastering web development.
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a
              rel="noopener noreferrer"
              href="SHEULI AKTER.pdf"
               download
               target='blank'
              className="px-8 py-3 text-lg font-semibold border rounded input input-bordered border-black"
            >
              Download Resume
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center p-3 mt-3 md:">
          <img
            src="https://d34zoluwvem4yl.cloudfront.net/best-IT-farm-in-Bangladesh.gif"
            alt=""
            className="rounded-full object-contain w-[100%] h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
