import React from 'react';
import './Skills.css'
const Skills = () => {
    return (
        <div className='py-28' id='skills'>
            <h1 className="px-24 font-bold text-3xl underline mb-8">Professional Skills</h1>
            <div class="skills-container md:mx-16 px-3  grid md:grid-cols-2">
                    
                    <ul className=''>
                        <h3 className='text-2xl font-bold mx-3'>Fronted skills</h3>
                       <li class="html">html5 (90%)</li>
                       <li class="css">css3 (85%)</li>
                       <li class="bootstrap">bootstrap (85%)</li>
                       <li class="tailwind">tailwind (90%)</li>
                       
                       <li class="react">react.js (85%)</li>
                     
                    </ul>
                    <ul className=''>
                        <h3 className='text-2xl font-bold mx-3'>Backend skills</h3>
                       
                       <li class="javascript">javascript (80%)</li>
                       <li class="node">Node.js (65%)</li>
                       <li class="express">Express.js (50%)</li>
                       <li class="mongodb">MongoDB (70%)</li>
                       <li class="jwt">jwt (75%)</li>
                    </ul>
                   

                  </div>
        </div>
    );
};

export default Skills;