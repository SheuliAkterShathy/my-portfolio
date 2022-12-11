import React, { useEffect, useState } from "react";


// import furniture from '../../assets/images/furniture.png'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Project from "../Project";
// import { Link } from "react-router-dom";
AOS.init({duration:2000});

const Projects = () => {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        fetch("data/project.json")
        .then(response => response.json())
           
        .then(data => setProjects(data))
      },[])
  return (

    

    

    
    <div className="md:flex md:px-24 gap-5" data-aos="fade-up">

     {
        projects.map(project=><Project project={project} key={project.id}></Project>)
     }







        {/* <h1 className="px-28 font-bold text-3xl underline mb-8">Projects</h1>
        <div className="grid md:grid-cols-3 gap-5 mx-3 md:px-20" > */}
         
         {/* <div className="card bg-base-100 shadow-xl p-2">
           <figure>
             <img
               src={furniture}
               alt="furniture"
               className="h-40"
             />
           </figure>
           <div className="p-2">
             <h2 className="font-semibold text-xl">Trusted Furnitur</h2>
             <p className="my-3">If a dog chews shoes whose shoes does he choose?</p>
            <button className="bg-indigo-200 shadow-xl px-2 py-1 rounded-md text-sm"> <Link to="" target="blank">View Details →</Link></button>

             <div className="card-actions mt-4">
               <button className="bg-indigo-200 shadow-xl px-2 py-1 rounded-md text-sm"> <a href="https://trusted-furniture.web.app/" target="blank">Live Link</a></button>
               <button className="bg-indigo-200 shadow-xl px-2 py-1 rounded-md text-sm "> <a href="https://trusted-furniture.web.app/" target="blank">Client Code</a></button>
               <button className="bg-indigo-200 shadow-xl px-2 py-1 rounded-md text-sm"> <a href="https://trusted-furniture.web.app/" target="blank">Server Code</a></button>
             </div>
           </div>
         </div> */}
         {/* <div className="card bg-base-100 shadow-xl p-4">
           <figure>
             <img
               src="https://img.freepik.com/free-vector/medical-professionals-watching-webinar-online-platform-people-having-virtual-class-flat-illustration_74855-16906.jpg?w=1480&t=st=1666636149~exp=1666636749~hmac=34e599b97afcbc27c1047c6b0394dfa7b8d80ed79ba7b618ef11ad33d8f8e31f"
               alt="Shoes"
             />
           </figure>
           <div className="p-4">
             <h2 className="font-semibold text-xl">Smart Education</h2>
             <p>If a dog chews shoes whose shoes does he choose?</p>
             <div className="card-actions justify-start">
             <button className="bg-gray-200 shadow-xl p-2 rounded-md "> <a href="https://smart-education-168f7.web.app/" target="blank">Live Link</a></button>
             </div>
           </div>
         </div>
         <div className="card bg-base-100 shadow-xl">
           <figure>
             <img
               src="https://img.freepik.com/free-vector/sweet-baked-cakes-set_1284-15477.jpg?size=338&ext=jpg&uid=R59678187&ga=GA1.2.258402809.1666072521&semt=sph"
               alt="Shoes" className="h-44 w-full p-6"
             />
           </figure>
           <div className="p-4">
             <h2 className="font-semibold text-xl">Shathy,s Kitchen</h2>
             <p>If a dog chews shoes whose shoes does he choose?</p>
             <div className="card-actions">
             <button className="bg-gray-200 shadow-xl p-2 rounded-md "> <a href="https://shathyskitchen.web.app/" target="blank">Live Link</a></button>
             </div>
           </div>
         </div> */}
       {/* </div> */}
    </div>
   
  );
};

export default Projects;
