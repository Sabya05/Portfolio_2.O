import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
FaReact,
FaNodeJs,
FaGitAlt,
FaJs,
FaHtml5,
FaCss3Alt,
FaPython,
} from "react-icons/fa";

import {
SiTailwindcss,
SiMongodb,
SiCplusplus,
SiGreensock,
SiMysql,
} from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

const skills = [
{ name: "C++", level: "Advanced", icon: <SiCplusplus /> },
{ name: "JavaScript", level: "Advanced", icon: <FaJs /> },
{ name: "React", level: "Intermediate", icon: <FaReact /> },
{ name: "Node.js", level: "Intermediate", icon: <FaNodeJs /> },
{ name: "MongoDB", level: "Intermediate", icon: <SiMongodb /> },
{ name: "Tailwind CSS", level: "Advanced", icon: <SiTailwindcss /> },
{ name: "GSAP", level: "Intermediate", icon: <SiGreensock /> },
{ name: "Git", level: "Intermediate", icon: <FaGitAlt /> },
{ name: "HTML5", level: "Advanced", icon: <FaHtml5 /> },
{ name: "CSS3", level: "Advanced", icon: <FaCss3Alt /> },
{ name: "SQL", level: "Intermediate", icon: <SiMysql /> },
{ name: "Python", level: "Intermediate", icon: <FaPython /> },
];

const Skills = () => {
useEffect(() => {
gsap.to(".skill-card", {
y: 60,
duration: 0.8,
stagger: 0.08,
ease: "power3.out",
scrollTrigger: {
trigger: "#skills",
start: "top 80%",
},
});
}, []);

return ( <section id="skills" className="py-28 px-6"> <div className="text-center mb-20"> <h2 className="text-5xl md:text-6xl font-bold text-cyan-400 mb-4">
Skills </h2>
    <p className="text-gray-400 text-lg">
      Technologies I use to build modern and scalable applications
    </p>
  </div>

  <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {skills.map((skill) => (
      <div
        key={skill.name}
        className="
          skill-card
          group
          relative
          overflow-hidden
          rounded-3xl
          border
          border-gray-700
          bg-black/20
          backdrop-blur-xl
          p-8
          flex
          flex-col
          items-center
          justify-center
          gap-3
          transition-all
          duration-300
          hover:-translate-y-3
          hover:border-cyan-400
          hover:shadow-[0_0_35px_rgba(34,211,238,0.25)]
        "
      >
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-br
            from-cyan-500/0
            via-cyan-500/5
            to-cyan-500/10
            opacity-0
            group-hover:opacity-100
            transition-opacity
            duration-300
          "
        />

        <div
          className="
            relative
            z-10
            text-5xl
            text-cyan-400
            transition-all
            duration-300
            group-hover:scale-125
            group-hover:rotate-12
          "
        >
          {skill.icon}
        </div>

        <h3 className="relative z-10 text-lg font-semibold">
          {skill.name}
        </h3>

        <span
          className="
            relative
            z-10
            text-xs
            px-3
            py-1
            rounded-full
            bg-cyan-500/10
            text-cyan-300
          "
        >
          {skill.level}
        </span>
      </div>
    ))}
  </div>
</section>

);
};

export default Skills;
