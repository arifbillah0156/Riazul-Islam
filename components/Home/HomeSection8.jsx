// components/HomeSection8.js
import React from "react";

const HomeSection8 = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          In Our <span className="text-green-600">20 Years Of Journey,</span> We
          Have
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Counter 1 */}
          <div className="bg-white px-4 py-8 shadow rounded-lg hover:scale-105 duration-100">
            <h3 className="text-2xl font-bold tracking-wide mb-3 textGradient">
              Project Completed
            </h3>
            <div className="text-4xl font-bold text-green-600">
              10,000<span className="">+</span>
            </div>
          </div>
          {/* Counter 2 */}
          <div className="bg-white p-8 shadow rounded-lg hover:scale-105 duration-100">
            <h3 className="text-2xl font-bold tracking-wide mb-3 textGradient">
              Satisfied Clients
            </h3>
            <div className="text-4xl font-bold text-green-600">
              10,000<span className="">+</span>
            </div>
          </div>
          {/* Counter 3 */}
          <div className="bg-white p-8 shadow rounded-lg hover:scale-105 duration-100">
            <h3 className="text-2xl font-bold tracking-wide mb-3 textGradient">
              Awards Won
            </h3>
            <div className="text-4xl font-bold text-green-600">
              30<span className="">+</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection8;
