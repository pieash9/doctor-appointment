// import React from "react";

const Banner = () => {
  return (
    <div className="carousel w-full h-[600px] mb-20 mt-10 rounded-xl">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/tXTdR6D/image.png"
          className="w-full"
        />
        <div className="absolute space-y-5 transform  h-full p-20  bg-gradient-to-r from-black to-[rgba(21, 21, 21, 0)] text-white bg-opacity-10">
          <h1 className="text-7xl font-bold">Appoint today</h1>
          <p className="w-2/3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime vitae sint, itaque, odit, sunt excepturi quo ex omnis eius eveniet reiciendis consequuntur alias libero sed nulla neque suscipit optio quod.</p>
          <button className="btn btn-error btn-lg">Get started</button>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/TmxYJpV/image.png"
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/TmxYJpV/image.png"
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/7k0dvHF/image.png"
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
