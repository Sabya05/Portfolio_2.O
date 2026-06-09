


const projects = [
  {
    title: "Salon Website",
    desc: "Modern salon booking website.",
    link:"https://saloon-fajrt0hzo-sabya05s-projects.vercel.app",
  },
  {
    title: "E-Commerce UI",
    desc: "Responsive shopping website.",
    link:"",    
  },
  {
  title: "Others",
  desc: "Basic Websites.",
  link: "/other.html",
},
];

const Projects = () => {
  return (
    <section id="projects" className="py-28 px-6 ">
      <h2 className="text-4xl font-bold text-center mb-14 text-cyan-400">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl border border-gray-800 bg-zinc-900 
            hover:scale-105 hover:border-cyan-400 transition duration-300"
          >
            <h3 className="text-2xl font-semibold mb-3 text-white">
              {project.title}
            </h3>

            <p className="text-gray-400">{project.desc}</p>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
              >
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;