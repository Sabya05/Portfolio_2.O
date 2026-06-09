import Cschair from "./assets/CSChair.jpeg";
import Yesist from "./assets/Yesist12malaysia.jpeg";
import Gssoc from "./assets/gssocprofile.png";

const achievements = [
{
title: "YESIST12 Malaysia Finalist",
image:Yesist,
description:
"Represented my team at the international YESIST12 innovation competition and reached the finalist stage.",
year: "2025",
},
{
title: "IEEE CS Chair",
image:Cschair,
description:
"Leading IEEE CS society of VSSUT SB with past experience and gaining technical knowledge.",
year: "2026",
},
{
title: "GSSoC Contributor",
image:Gssoc,
description:
"Contributed to the GSSoC initiative and gained valuable experience in open-source development.",
year: "2026",
},
];

const Achievements = () => {
return ( <section id="achievements" className="py-24 px-6"> <div className="text-center mb-16"> <h2 className="text-5xl font-bold text-cyan-400 mb-4">
Achievements </h2>

    <p className="text-gray-400 text-lg">
      Milestones, competitions, and accomplishments throughout my journey
    </p>
  </div>

  <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    {achievements.map((achievement, index) => (
      <div
        key={index}
        className="
          group
          overflow-hidden
          rounded-3xl
          border
          border-gray-700
          bg-black/20
          backdrop-blur-xl
          transition-all
          duration-300
          hover:-translate-y-3
          hover:border-cyan-400
          hover:shadow-[0_0_35px_rgba(34,211,238,0.25)]
        "
      >
        <div className="overflow-hidden">
          <img
            src={achievement.image}
            alt={achievement.title}
            className="w-full h-80 object-contain bg-black"></img>
        </div>

        <div className="p-6">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-xl font-semibold text-white">
              {achievement.title}
            </h3>

            <span className="text-cyan-400 font-medium">
              {achievement.year}
            </span>
          </div>

          <p className="text-gray-400 leading-relaxed">
            {achievement.description}
          </p>
        </div>
      </div>
    ))}
  </div>
</section>


);
};

export default Achievements;
