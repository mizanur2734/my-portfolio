import React from "react";
import { FaLaptopCode, FaMobileAlt, FaPaintBrush } from "react-icons/fa";

const Services = () => {
  return (
    <div
      id="service"
      className="min-h-screen text-white flex flex-col items-center justify-center mt-12 md:mt:2"
    >
      <h2 className="text-4xl font-bold mb-12">
        My <span className="text-[#0ef]">Services</span>
      </h2>
      {/* card 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-[#101a2a] p-8 rounded-2xl shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/100 transition duration-300 text-center w-80">
          <div className="flex justify-center mb-4">
            <FaLaptopCode size={40} className="text-cyan-400" />
          </div>
          <h3 className="text-2xl font-semibold mb-4">Web Development</h3>
          <p className="text-gray-400 mb-6">
            Build fast, responsive, and scalable websites with modern
            technologies like React and Tailwind CSS.
          </p>
          <button className="btn-box-hover px-4 py-2 bg-[#0ef] rounded-4xl text-black">
            Loren More
          </button>
        </div>

        {/* Card 2 */}
        <div className="my-2 bg-[#101a2a] p-8 rounded-2xl shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/100 transition duration-300 text-center w-80">
          <div className="flex justify-center mb-4">
            <FaMobileAlt size={40} className="text-cyan-400" />
          </div>
          <h3 className="text-2xl font-semibold mb-4">Responsive Design</h3>
          <p className="text-gray-400 mb-6">
            Ensure your website looks great and works perfectly on all devices
            including mobiles and tablets.
          </p>
          <button className="btn-box-hover px-4 py-2 bg-[#0ef] rounded-4xl text-black">
            Loren More
          </button>
        </div>

        {/* Card 3 */}
        <div className="bg-[#101a2a] p-8 rounded-2xl shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/100 transition duration-300 text-center w-80">
          <div className="flex justify-center mb-4">
            <FaPaintBrush size={40} className="text-cyan-400" />
          </div>
          <h3 className="text-2xl font-semibold mb-4">UI/UX Design</h3>
          <p className="text-gray-400 mb-6">
            Craft engaging and intuitive user interfaces with a focus on
            excellent user experience.
          </p>
          <button className="btn-box-hover px-4 py-2 bg-[#0ef] rounded-4xl text-black">
            Loren More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
