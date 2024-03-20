import React from "react";
import "./testimonial.css";
import { TESTIMONIAL_DATA } from "./data";

function Testimonials() {
  return (
    <div className="bg-[#f8f8f8] m-auto pt-32 pr-4 pb-0 pl-4 w-full h-screen">
      {/* Header */}
      <h2 className="text-5xl font-semibold text-center py-1">Testimonials</h2>
      <span className="line"></span>
      {/* Cards */}
      <div className="grid grid-cols-3 gap-5 my-20 max-lg:grid-cols-2 max-md:grid-cols-1">
        {TESTIMONIAL_DATA.map((testimony) => (
          <div
            key={testimony.id}
            className="shadow-lg rounded-md py-7 px-5 relative"
          >
            <img
              src={testimony.profile}
              alt="profile-img"
              className="rounded-full absolute -top-5 max-md:top-0"
            />
            <p className="text-gray-600 pt-5 mt-8 max-md:mt-10">
              {testimony.message}
            </p>
            <p className="text-green font-bold pt-3">{testimony.name}</p>
            <p className="text-gray-600 pt-3">{testimony.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
