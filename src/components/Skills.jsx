import React from "react";
import {
    SiJavascript, SiReact, SiExpress, SiMongodb, SiTailwindcss,
    SiFirebase, SiFigma, SiHtml5, SiCss3,
    SiGit, SiGithub,
    SiNodedotjs
} from "react-icons/si";
import { MdAnimation } from "react-icons/md";
import { FaFigma, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub } from "react-icons/fa";

const SkillCard = ({ icon, name }) => (
    <div className="flex flex-col items-center justify-center gap-2 
    bg-gray-800 rounded-xl p-6  
    shadow-lg 
    hover:shadow-cyan-500/100
    hover:scale-105 duration-300 border border-gray-600"
    >
        <div className="text-4xl">{icon}</div>
        <p className="text-gray-300 font-medium text-xl">{name}</p>
    </div>

);

const Skills = () => {
    return (
        <div id="skills" className="py-16 text-center roboto-serif-font">
            <h2 className="font-semibold text-4xl text-gray-200 mb-10">
                My <span className="text-[#0ef]">Skills</span>
            </h2>

            {/* Row 1 */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-6xl mx-auto px-4 mb-6">
                <SkillCard icon={<SiJavascript className="text-yellow-400" />} name="JavaScript" />
                <SkillCard icon={<SiReact className="text-blue-400" />} name="React.Js" />
                <SkillCard icon={<SiNodedotjs className="text-green-500" />} name="Node.Js" />
                <SkillCard icon={<SiExpress className="text-gray-300" />} name="Express.Js" />
                <SkillCard icon={<SiMongodb className="text-green-500" />} name="MongoDB" />
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-6xl mx-auto px-4 mb-6">
                <SkillCard icon={<SiTailwindcss className="text-sky-400" />} name="Tailwind CSS" />
                <SkillCard icon={<SiFirebase className="text-orange-400" />} name="Firebase" />
                <SkillCard icon={<MdAnimation className="text-purple-400" />} name="AOS" />
                <SkillCard icon={<FaFigma className="text-pink-400" />} name="Figma" />
                <SkillCard icon={<FaHtml5 className="text-orange-500" />} name="HTML" />
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6 max-w-4xl mx-auto px-4">
                <SkillCard icon={<FaCss3Alt className="text-blue-500" />} name="CSS" />
                <SkillCard icon={<FaGitAlt className="text-red-500" />} name="Git" />
                <SkillCard icon={<FaGithub className="text-gray-200" />} name="GitHub" />
            </div>
        </div>
    );
};

export default Skills;
