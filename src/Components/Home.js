// import React, { useEffect } from "react";
import Typed from 'react-typed';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
const Home = () => {
    // useEffect(()=>{
    //     AOS.init({
    //         duration:2000
    //     });
    // },[])
  return (
    <section className="dark:dark:bg-gray-800 dark:dark:text-gray-100" data-aos="fade-up" >
      <div className="container flex flex-col justify-center md:px-10 mx-auto sm:py-12  lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center text-center rounded-sm px-2 lg:max-w-md xl:max-w-lg lg:text-left md:w-2/3" >
          <h1 className="text-4xl font-bold leading-none sm:text-4xl">
            Hi, I am Sheuli Akter
          </h1>
          
         <h2 className="text-2xl font-bold"> I am a  
          <Typed
                strings={[
                    ' Fronted Web Developer',
                    ' React Web Developer',
                    ' Mern Stack Web Developer']}
                    typeSpeed={140}
                    backSpeed={50}
                    className='text-indigo-400 ml-2'
                    // attr="placeholder"
                    loop >
                    {/* <input type="text"/> */}
                </Typed>
         
         </h2>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
            I like to call myself "a passionate Web developer". My first
            priority is learning Web development so that i can inhance my skill.
           
          </p>
          <div className="flex flex-col text-center w-[70%]"  >
            <a
              rel="noopener noreferrer"
              href="SHEULI AKTER.pdf"
               download
               target='blank'
              className="px-8 py-3 text-lg font-semibold input input-bordered border-black "
            >
              Download Resume
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center p-3 mt-3 md:" >
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
