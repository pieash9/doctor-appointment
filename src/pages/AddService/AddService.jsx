// import React from 'react';

import { useState } from "react";

const AddService = () => {
  const [selectOption, setSelectOption] = useState("");
  // console.log(selectOption)
  const SelectCategory = ["Fever", "Mental Problem", "Bone issues", "Diabetic"];

  const handleSelectChange = (e) => {
    setSelectOption(e.target.value);
  };

  const handleAddService = (e) => {
    e.preventDefault();
    const form = e.target;
    const serviceName = form.serviceName.value;
    const servicePrice = form.servicePrice.value;
    const imgURL = form.imgURL.value;
    const serviceCategory = selectOption;
    const addService = { serviceName, servicePrice, imgURL, serviceCategory };
    console.log(addService);

    fetch(`http://localhost:5000/services`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(addService),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if(data.insertedId){
            alert('Service added!')
        }
    });
  };
  return (
    <div>
      <h3 className="text-3xl font-bold text-center my-5">Add new service</h3>

      <div>
        <form onSubmit={handleAddService}>
          <div className="card-body w-9/12 mx-auto">
            {/* row 1  */}
            <div className="flex gap-5">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Service name</span>
                </label>
                <input
                  name="serviceName"
                  type="text"
                  placeholder="Service name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Service price $</span>
                </label>
                <input
                  name="servicePrice"
                  type="text"
                  placeholder="Service price"
                  className="input input-bordered"
                />
              </div>
            </div>

            {/* row 2  */}
            <div className="flex gap-5 ">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Service Category</span>
                </label>
                <select
                  onChange={handleSelectChange}
                  className="select select-bordered w-full"
                  defaultValue="Select category"
                >
                  <option disabled>Select category</option>

                  {SelectCategory.map((cat) => (
                    <option key={cat}>{cat}</option>
                  ))}
                </select>
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Service Image URL</span>
                </label>
                <input
                  name="imgURL"
                  type="url"
                  placeholder="Service Image URL"
                  className="input input-bordered"
                />
              </div>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Add service
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddService;
