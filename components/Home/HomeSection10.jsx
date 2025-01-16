import React from "react";

const HomeSection10 = () => {
  return (
    <section className="py-12">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-green-600">
            Ready to Build Your Dream? Let’s Get Started Today!
          </h2>

          {/* Strategy Session */}
          <div className="flex space-x-4">
            <div className="flex items-center justify-center w-32 h-16 bg-blue-500 text-white rounded-full">
              <i className="fas fa-phone-alt text-xl"></i>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Initiate a Strategy Session
              </h3>
              <p className="text-gray-600">
                We begin by understanding your vision, goals, and needs in
                detail. This collaborative phase allows us to create a concept
                that aligns with your expectations, setting a strong foundation
                for the project.
              </p>
            </div>
          </div>

          {/* Design & Planning */}
          <div className="flex space-x-4">
            <div className="flex items-center justify-center w-32 h-16 bg-blue-500 text-white rounded-full">
              <i className="fas fa-users text-xl"></i>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Design & Planning
              </h3>
              <p className="text-gray-600">
                Our expert architects and planners refine the initial concept
                into a comprehensive design. We focus on creating functional,
                aesthetic, and sustainable spaces while ensuring all regulatory
                and technical requirements are met.
              </p>
            </div>
          </div>

          {/* Execution & Delivery */}
          <div className="flex space-x-4">
            <div className="flex items-center justify-center w-32 h-16 bg-blue-500 text-white rounded-full">
              <i className="fas fa-long-arrow-alt-right text-xl"></i>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Execution & Project Delivery
              </h3>
              <p className="text-gray-600">
                Once the design is finalized, we move into the execution phase,
                managing every aspect of construction. Our team ensures the
                project stays on track, delivering your dream building with
                precision and on schedule.
              </p>
            </div>
          </div>

          {/* Schedule Call Button */}
          {/* <div>
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition"
            >
              <i className="fas fa-long-arrow-alt-right mr-2"></i>
              Schedule a Call
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default HomeSection10;
