import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';


const Details = () => {
    const data=useLoaderData();
    console.log(data)
    // const [details, setDetailss] = useState([])
    // useEffect(() => {
    //     fetch("data/project.json")
    //     .then(response => response.json())
           
    //     .then(data => setDetailss(data))
    //   },[])
    return (
        <div>
            {/* {
                console.log(details)
            } */}
            hhhh
        </div>
    );
};

export default Details;