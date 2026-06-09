function Education() {
  return (
    <section id="education" className="py-32 px-6 relative">
      <div className="text-center mb-24">
        <h2 className="text-5xl text-cyan-400 font-bold tracking-tight">
          Education
        </h2>

        <p className="text-gray-400 mt-4">
          Computer Science Foundation • Systems Thinking • Problem Solving
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="backdrop-blur-xl border border-gray-700 p-14 rounded-2xl shadow-sm">

          <h3 className="text-2xl text-cyan-400 font-semibold">
            Veer Surendra Sai University of Technology (VSSUT), Odisha
          </h3>

          <p className="text-gray-400 mt-3">
            Bachelor of Technology - Computer Science & Engineering
          </p>

          <div className="mt-8 grid md:grid-cols-3 gap-8">

            <div>
              <p className="font-semibold text-lg">2024 - 2028</p>
              <p className="text-gray-400 text-sm">
                3rd Year • 5th Semester
              </p>
            </div>

            <div>
              <p className="font-semibold text-lg">7.79 SGPA</p>
              <p className="text-gray-400 text-sm">
                Current Semester Performance
              </p>
            </div>

            <div>
              <p className="font-semibold text-lg">8.57 SGPA</p>
              <p className="text-gray-400 text-sm">
                Highest Semester Performance
              </p>
            </div>

          </div>

          <div className="my-12 border-t border-gray-700"></div>

          <h4 className="text-xl text-cyan-400 font-semibold mb-8">
            Core Engineering Domains
          </h4>

          <div className="grid md:grid-cols-3 gap-8 text-gray-400 text-sm">

            <div className="space-y-3">
              <p>• Data Structures & Algorithms</p>
              <p>• Object Oriented Programming</p>
              <p>• Database Management Systems</p>
              <p>• Operating Systems</p>
            </div>

            <div className="space-y-3">
              <p>• Computer Networks</p>
              <p>• Cryptography & Network Security</p>
              <p>• Compiler Design</p>
              <p>• Artificial Intelligence</p>
            </div>

            <div className="space-y-3">
              <p>• Digital Logic Design</p>
              <p>• Computer Organization</p>
              <p>• System Design Fundamentals</p>
              <p>• Theory of Computation</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Education;