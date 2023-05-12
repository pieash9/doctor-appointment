// import React from 'react';

import { useLoaderData } from "react-router-dom";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const AllServices = useLoaderData();

  
  return (
    <div>
      <div className="text-center">
        <h3 className="text-2xl">Treatment</h3>
        <h2 className="text-3xl">Services area</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {AllServices.map((service) => (
          <ServiceCard
            key={service._id}
            service={service}
            
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
