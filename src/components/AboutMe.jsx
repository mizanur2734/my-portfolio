import React from 'react';
import mizanurPic from "../assets/mizanur.jpg";

const AboutMe = () => {
    return (
        <div className="roboto-serif-font min-h-screen flex flex-col-reverse md:flex-row items-center gap-10 md:gap-55
           py-12 md:py-16">

            {/* Image Section */}
            <div className="w-48 md:w-80 flex-shrink-0 mt-20 md:mt-0 profile-container">
                <img
                    src={mizanurPic}
                    alt="Mizanur Malita"
                    className="rounded-full border-8 shadow-lg"
                />
            </div>

            {/* Text Section */}
            <div data-aos="fade-down-right" className="text-center md:text-left mt-10 md:my-25">
                <h2 className='text-3xl md:text-4xl font-semibold mb-2'>About <span className='text-[#0ef]'>Me</span></h2>
                <h3 className='text-xl md:text-2xl font-semibold mb-2'>Frontend Developer</h3>
                <p data-aos="zoom-in" className="text-white mb-3 md:text-xl">
                    Hello! I’m Mizanur Malita, a passionate web developer who loves turning ideas into interactive and
                    user-friendly web experiences. Using React, Tailwind CSS, and modern web technologies, I create clean,
                    responsive, and user-friendly interfaces.                </p>
                <p data-aos="zoom-in" className="text-white mb-3 md:text-xl ">
                    Outside of coding, I enjoy exploring new technologies, reading books, and playing cricket. These hobbies keep me creative,
                    motivated, and ready to bring fresh ideas into my work.                </p>
                <p data-aos="zoom-in" className="text-white mb-4 md:text-xl">
                    I’m not just a developer — I’m a lifelong learner, a creative problem solver, and see every project as an
                    opportunity to learn and inspire.
                </p>
                <button className='btn-box-hover px-4 py-2 bg-[#0ef] rounded-4xl text-black'>More About Me</button>
            </div>
        </div>
    );
};

export default AboutMe;
