import React from "react";


const Projects = () => {
  return (
    <div id="projects">
        <h1 className="px-28 font-bold text-3xl underline mb-8">Projects</h1>
        <div className="grid md:grid-cols-3 gap-5 mx-4 px-16" >
         
         <div className="card bg-base-100 shadow-xl p-4">
           <figure>
             <img
               src="https://img.freepik.com/free-psd/contemporary-living-room-mockup-psd-interior-design_53876-129130.jpg?size=626&ext=jpg&ga=GA1.2.258402809.1666072521&semt=sph"
               alt="Shoes"
             />
           </figure>
           <div className=" card-body">
             <h2 className="">Trusted Furnitur</h2>
             <p>If a dog chews shoes whose shoes does he choose?</p>
             <div className="card-actions">
               <button className="bg-gray-200 shadow-xl p-2 rounded-md "> <a href="https://shathyskitchen.web.app/" target="blank">Live Link</a></button>
             </div>
           </div>
         </div>
         <div className="card bg-base-100 shadow-xl p-4">
           <figure>
             <img
               src="https://img.freepik.com/free-vector/medical-professionals-watching-webinar-online-platform-people-having-virtual-class-flat-illustration_74855-16906.jpg?w=1480&t=st=1666636149~exp=1666636749~hmac=34e599b97afcbc27c1047c6b0394dfa7b8d80ed79ba7b618ef11ad33d8f8e31f"
               alt="Shoes"
             />
           </figure>
           <div className="card-body">
             <h2 className="">Smart Education</h2>
             <p>If a dog chews shoes whose shoes does he choose?</p>
             <div className="card-actions justify-start">
             <button className="bg-gray-200 shadow-xl p-2 rounded-md "> <a href="https://smart-education-168f7.web.app/" target="blank">Live Link</a></button>
             </div>
           </div>
         </div>
         <div className="card bg-base-100 shadow-xl p-4">
           <figure>
             <img
               src="https://img.freepik.com/free-photo/healthy-vegetables-kitchen_1303-12897.jpg?w=1380&t=st=1667845225~exp=1667845825~hmac=8b8877971bc7e25ff88b2748c4b1ec5d633eda101c71eae84f4cd4a0987a3416"
               alt="Shoes"
             />
           </figure>
           <div className="card-body">
             <h2 className="card-title">Shoes!</h2>
             <p>If a dog chews shoes whose shoes does he choose?</p>
             <div className="card-actions justify-end">
             <button className="bg-gray-200 shadow-xl p-2 rounded-md "> <a href="https://trusted-furniture.web.app/" target="blank">Live Link</a></button>
             </div>
           </div>
         </div>
       </div>
    </div>
   
  );
};

export default Projects;
