const websites = [
  {
    title: "Salon Website",
    link: "https://your-salon-site.vercel.app",
  },
  {
    title: "Weather App",
    link: "https://your-weather-app.vercel.app",
  },
  {
    title: "Portfolio",
    link: "https://your-portfolio.vercel.app",
  },
];

export default function OtherWebsites() {
  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold text-cyan-400 mb-10">
        Other Websites
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        {websites.map((site, index) => (
          <div
            key={index}
            className="p-6 border border-gray-700 rounded-2xl"
          >
            <h2 className="text-2xl mb-4">{site.title}</h2>

            <a
              href={site.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyan-400 text-black px-4 py-2 rounded-lg"
            >
              Visit
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}