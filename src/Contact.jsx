import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const Contact = () => {
  return (
    <section id="contact" className="py-24 text-center">
      <h2 className="text-4xl font-bold text-cyan-400 mb-6">
        Contact Me
      </h2>

      
      <p className="text-gray-400">
        sabyasachee01@gmail.com
      </p>
      <p className="text-gray-400">
        📞+91 96687 99852
      </p>
      <div className="flex justify-center gap-8 mt-8 text-4xl">
        <a
          href="https://github.com/Sabya05"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition duration-300 hover:scale-110"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/sabyasachee-sahoo-777145333/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition duration-300 hover:scale-110"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://x.com/Sabyasachee45"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition duration-300 hover:scale-110"
        >
          <FaXTwitter />
        </a>

        <a
          href="https://leetcode.com/u/_sabya_05/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition duration-300 hover:scale-110"
        >
          <SiLeetcode />
        </a>
      </div>
    </section>
  );
};

export default Contact;