import React from "react";
import {
    SiJavascript, SiReact, SiExpress, SiMongodb, SiTailwindcss,
    SiFirebase, SiFigma, SiHtml5, SiCss3,
    SiGit, SiGithub,
    SiNodedotjs
} from "react-icons/si";
import { MdAnimation } from "react-icons/md";

// SkillCard component must be declared before usage
const SkillCard = ({ icon, name }) => (
    <div className="flex flex-col items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 transition rounded-xl p-6 shadow-md">
        <div className="text-4xl">{icon}</div>
        <p className="text-gray-300 font-medium text-xl">{name}</p>
    </div>
);

const Skills = () => {
    return (
        <div className="py-16 text-center roboto-serif-font">
            <h2 className="font-semibold text-4xl text-gray-200 mb-10">
                My <span className="text-[#0ef]">Skills</span>
            </h2>

            {/* Row 1 */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-6xl mx-auto px-4 mb-6">
                <SkillCard icon={<SiJavascript className="text-yellow-400" />} name="JavaScript" />
                <SkillCard icon={<SiReact className="text-blue-400" />} name="React.js" />
                <SkillCard icon={<SiNodedotjs className="text-green-500" />} name="Node.js" />
                <SkillCard icon={<SiExpress className="text-gray-300" />} name="Express" />
                <SkillCard icon={<SiMongodb className="text-green-500" />} name="MongoDB" />
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-6xl mx-auto px-4 mb-6">
                <SkillCard icon={<SiTailwindcss className="text-sky-400" />} name="Tailwind CSS" />
                <SkillCard icon={<SiFirebase className="text-orange-400" />} name="Firebase" />
                <SkillCard icon={<MdAnimation className="text-purple-400" />} name="AOS" />
                <SkillCard icon={<SiFigma className="text-pink-400" />} name="Figma" />
                <SkillCard icon={<SiHtml5 className="text-orange-500" />} name="HTML" />
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6 max-w-4xl mx-auto px-4">
                <SkillCard icon={<SiCss3 className="text-blue-500" />} name="CSS" />
                <SkillCard icon={<SiGit className="text-red-500" />} name="Git" />
                <SkillCard icon={<SiGithub className="text-gray-200" />} name="GitHub" />
            </div>
        </div>
    );
};

export default Skills;
