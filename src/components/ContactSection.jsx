// src/components/ContactSection.jsx
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
    FaFacebookF,
    FaLinkedinIn,
    FaEnvelope,
    FaPhoneAlt,
    FaGithub,
    FaWhatsapp,
} from "react-icons/fa";

const ContactSection = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm("service_agw4ffq", "template_kbi14w3", form.current, {
                publicKey: "0bJz6MwEw3UXLHPlT",
            })
            .then(
                () => {
                    alert("✅ Message sent successfully!");
                    form.current.reset();
                },
                (error) => {
                    alert("❌ Failed to send message. Please try again!");
                    console.log(error.text);
                }
            );
    };

    return (
        <section className="roboto-serif-font text-white py-24 px-4" id="contact">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
                {/* Left: Info */}
                <div>
                    <div className="text-center mb-4">
                        <h2 className="text-4xl font-semibold border-b-4 border-cyan-400 mb-4 inline-block">
                            Contact <span className="text-cyan-400">Me</span>
                        </h2>
                    </div>

                    <p className="font-semibold text-gray-300 mb-3 text-2xl">
                        Let's Work Together
                    </p>
                    <p className="text-gray-400 mb-6 text-xl">
                        I am always interested in discussing new projects, creative ideas,
                        or opportunities to be part of your dreams. Feel free to reach out
                        anytime!
                    </p>

                    {/* Email & Phone */}
                    <div className="flex flex-col gap-2 mb-6 text-gray-300 text-xl">
                        <div className="flex items-center gap-2">
                            <FaEnvelope className="text-cyan-400" />
                            <span>mizanurrahman@gmail.com</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaPhoneAlt className="text-cyan-400" />
                            <span>+8801950719346</span>
                        </div>
                    </div>

                    {/* Social Icons */}
                    <div
                        data-aos="fade-up"
                        className="flex justify-start md:justify-start gap-3 mb-6"
                    >
                        <a
                            href="https://www.facebook.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 flex items-center justify-center border-2 text-[#0ef] border-[#0ef] rounded-full btn-box-hover hover:text-white transition"
                        >
                            <FaFacebookF size={18} />
                        </a>
                        <a
                            href="https://github.com/mizanur2734"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 flex items-center justify-center border-2 text-[#0ef] border-[#0ef] rounded-full btn-box-hover hover:text-white transition"
                        >
                            <FaGithub size={18} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/md-mizamur-malita-8b9463380/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 flex items-center justify-center border-2 text-[#0ef] border-[#0ef] rounded-full btn-box-hover hover:text-white transition"
                        >
                            <FaLinkedinIn size={18} />
                        </a>
                        <a
                            href="https://wa.me/01950719346"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 flex items-center justify-center border-2 text-[#0ef] border-[#0ef] rounded-full btn-box-hover hover:text-white transition"
                        >
                            <FaWhatsapp size={18} />
                        </a>
                    </div>
                </div>

                {/* Right: Form */}
                <form ref={form} onSubmit={sendEmail} className="space-y-4 w-full">
                    <input
                        type="text"
                        name="user_name"
                        placeholder="Your Name"
                        className="w-full bg-gray-800 p-3 rounded-md text-white focus:outline-none focus:ring-2 ring-cyan-400"
                        required
                    />
                    <input
                        type="email"
                        name="user_email"
                        placeholder="Your Email"
                        className="w-full bg-gray-800 p-3 rounded-md text-white focus:outline-none focus:ring-2 ring-cyan-400"
                        required
                    />
                    <input
                        type="text"
                        name="subject"
                        placeholder="Your Subject"
                        className="w-full bg-gray-800 p-3 rounded-md text-white focus:outline-none focus:ring-2 ring-cyan-400"
                    />
                    <textarea
                        rows="4"
                        name="message"
                        placeholder="Your Message"
                        className="w-full bg-gray-800 p-3 rounded-md text-white focus:outline-none focus:ring-2 ring-cyan-400"
                        required
                    ></textarea>

                    {/* Glowing Submit Button */}
                    <button
                        type="submit"
                        className="btn-box-hover w-full py-3 bg-[#0ef] text-black font-semibold rounded-md shadow-md
        hover:bg-cyan-300 transition-all duration-300"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactSection;
