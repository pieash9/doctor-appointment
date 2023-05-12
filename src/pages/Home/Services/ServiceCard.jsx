/* eslint-disable react/prop-types */
// import React from 'react';

import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, serviceName, servicePrice, imgURL, serviceCategory } = service;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={imgURL} alt="Shoes" className="rounded-xl h-48" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Service Category: {serviceCategory}</h2>
        <p className="text-orange-500">Price: ${servicePrice}</p>
        <p className="">Service Name: {serviceName}</p>
        <div className="card-actions">
          <Link to={`/book-service/${_id}`}>
            <button className="btn btn-primary btn-sm">Appoint now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
