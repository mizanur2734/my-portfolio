import React, { useEffect } from 'react';
import mizanurPic from "../assets/mizanur.jpg";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import Aos from 'aos';
import "aos/dist/aos.css";

const Banner = () => {
    useEffect(() => {
        Aos.init({ duration: 1000, easing: "ease-in-out" });
        once: true;
    }, []);
    return (
        <div className="roboto-serif-font min-h-screen flex flex-col-reverse md:flex-row items-center gap-10 md:gap-55
           py-12 md:py-24">
            {/* Text Section */}
            <div data-aos="fade-down-right" className="text-center md:text-left max-w-lg mt-10 md:my-25">
                <h3 data-aos="flip-up" className="text-[20px] font-medium text-white mb-2">
                    Hello, It's Me
                </h3>

                <h1 data-aos="fade-right" className="text-3xl md:text-[52px] font-bold text-white mb-2">
                    Mizanur Malita
                </h1>

                <h3 data-aos="fade-left" className="text-[24px] md:text-[28px] font-semibold text-white mb-4">
                    And I'm a{" "}
                    <TypeAnimation
                        sequence={[
                            "Frontend Developer", 2000,
                            "React Developer", 2000,
                            "MERN Stack Learner", 2000,
                        ]}
                        speed={50}
                        repeat={Infinity}
                        className="text-[#0ef]"
                    />
                </h3>
                <p data-aos="zoom-in" className="text-white mb-6 md:text-xl max-w-md md:max-w-[500px]">
                    I'm a passionate Frontend Developer focused on building responsive
                    and user-friendly websites using React, Tailwind CSS, and modern web technologies.
                </p>
                {/* icon */}
                <div data-aos="fade-up" className="flex justify-center md:justify-start gap-3 mb-6">
                    <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 flex items-center justify-center border-2 text-[#0ef] border-[#0ef]
                        rounded-full btn-box-hover hover:text-white transition"
                    >
                        <FaFacebookF size={18} />
                    </a>
                    <a
                        href="https://github.com/mizanur2734"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 flex items-center justify-center border-2 text-[#0ef] border-[#0ef]
                        rounded-full btn-box-hover hover:text-white transition"
                    >
                        <FaGithub size={18} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/md-mizamur-malita-8b9463380/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 flex items-center justify-center border-2 text-[#0ef] border-[#0ef]
                        rounded-full btn-box-hover hover:text-white transition"
                    >
                        <FaLinkedinIn size={18} />
                    </a>
                    <a
                        href="https://wa.me/01950719346"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 flex items-center justify-center border-2 text-[#0ef] border-[#0ef]
                        rounded-full btn-box-hover hover:text-white transition"
                    >
                        <FaWhatsapp size={18} />
                    </a>
                </div>
                <button className='btn-box-hover px-4 py-2 bg-[#0ef] rounded-4xl text-black'>More About Me</button>
            </div>

            {/* Image Section */}
            <div className="w-48 md:w-80 flex-shrink-0 mt-20 md:mt-0 profile-container">
                <img
                    src={mizanurPic}
                    alt="Mizanur Malita"
                    className="rounded-full border-8 shadow-lg"
                />
            </div>
        </div>
    );
};

export default Banner;
