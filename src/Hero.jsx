import { useEffect, useRef } from "react";
import gsap from "gsap";
import profile from "./assets/profile.jpeg";
import resume from "./assets/Resume.pdf";


const Hero = () => {
  const heroRef = useRef(null);
  const imageRef = useRef(null);

useEffect(() => {
  gsap.to(imageRef.current, {
    y: -10,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
  });
}, []);

  return (
    <section id="home"  className="h-screen flex items-center justify-center">
      <div className="text-center">
        <img
          ref={imageRef}
          src={profile}
          alt="Sabyasachee"
          className="w-70 h-70 mx-auto rounded-full object-cover border-4 border-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.5)] mb-6"
        />

        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm <span className="text-cyan-400">Sabyasachee</span>
        </h1>

        <p className="text-cyan-300 text-lg mb-2">
          B.Tech CSE Student
        </p>

        <p className="text-gray-400 text-xl">
          Full Stack Developer | Open Source Contributor
        </p>
<a
href={resume}
target="_blank"
rel="noopener noreferrer"
className="
inline-block
px-10
py-3
rounded-xl
font-semibold
text-black
bg-cyan-400
"

>

Resume </a>

      </div>
    </section>
  );
};

export default Hero;