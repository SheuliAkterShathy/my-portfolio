import React from 'react';
import { Link } from 'react-router-dom';

const Project = ({project}) => {
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={project.img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
    <button className="bg-indigo-200 shadow-xl px-2 py-1 rounded-md text-sm"> <Link to={`/details/${project.id}`}>View Details →</Link></button>
    </div>
  </div>
</div>
    );
};

export default Project;