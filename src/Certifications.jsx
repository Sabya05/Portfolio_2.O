import { ExternalLink } from "lucide-react";

const certificates = [
  {
    title: "IBM SkillsBuild Summer Internship",
    category: "Data Analytics",
    description:
      "Focused on data analysis, visualization, and business intelligence through project-based learning.",
    link: "",
  },
  {
    title: "Data Science course ",
    category: "Data Science",
    description:
      "Covered Python programming, Numpy,Panda and ML Algorithms ",
    link: "",
  },
  {
    title: "Deloitte Australia (Forage)",
    category: "Technology Job Simulation",
    description:
      "Completed practical tasks in Coding, Data Analysis, and Cyber Security, gaining hands-on experience in Forensic Technology workflows.",
    link: "",
  },
  {
    title: "TCS IQN",
    category: "Technology Job Simulation",
    description:
      "Completed practical tasks in Coding, Data Analysis, and Cyber Security, gaining hands-on experience in Forensic Technology workflows.",
    link: "",
  },
 
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 px-6">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-4 text-cyan-400">
          Certifications
        </h2>

        <p className="text-gray-400">
          Learning • Industry Exposure • Professional Growth
        </p>
      </div>

      <div className="flex gap-8 overflow-x-auto scroll-smooth scrollbar-hide pb-4">
        {certificates.map((cert, index) => (
          <a
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex-shrink-0
              min-w-[350px]
              max-w-[350px]
              h-[400px]
              p-8
              rounded-3xl
              border
              border-gray-700
              backdrop-blur-xl
              bg-black/20
              flex
              flex-col
              justify-between
              hover:-translate-y-2
              hover:border-cyan-400
              hover:shadow-[0_0_25px_rgba(34,211,238,0.2)]
              transition-all
              duration-300
            "
          >
            <div>
              <h3 className="text-2xl font-semibold mb-2">
                {cert.title}
              </h3>

              <p className="text-cyan-400 mb-4">
                {cert.category}
              </p>

              <p className="text-gray-400 leading-relaxed">
                {cert.description}
              </p>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-cyan-400 font-medium">
                View Certificate
              </span>

              <ExternalLink
                size={20}
                className="text-gray-400 transition-colors duration-300 hover:text-cyan-400"
              />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Certifications;