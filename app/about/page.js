import React from "react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-pink to-gray-800 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full bg-gray-900 bg-opacity-90 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-teal-500">
        <h1 className="text-4xl font-bold text-center text-teal-400 mb-6">About Me</h1>

        <div className="text-center mb-6">
          <p className="text-lg text-gray-200">
            I am pursuing <span className="text-white font-semibold">B.Tech in Computer Engineering (COE)</span> from
            <br />
            <span className="text-teal-300 font-semibold">Thapar Institute of Engineering and Technology, Patiala</span>.
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-teal-300 mb-4 border-b border-teal-500 pb-2">Tech Stack</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 text-gray-200 text-sm">
          <li className="bg-teal-800 px-3 py-2 rounded shadow text-center">MongoDB</li>
          <li className="bg-teal-800 px-3 py-2 rounded shadow text-center">Express.js</li>
          <li className="bg-teal-800 px-3 py-2 rounded shadow text-center">React.js</li>
          <li className="bg-teal-800 px-3 py-2 rounded shadow text-center">Node.js</li>
          <li className="bg-blue-800 px-3 py-2 rounded shadow text-center">C</li>
          <li className="bg-blue-800 px-3 py-2 rounded shadow text-center">C++</li>
          <li className="bg-yellow-700 px-3 py-2 rounded shadow text-center">Python</li>
          <li className="bg-purple-700 px-3 py-2 rounded shadow text-center">Next.js</li>
          <li className="bg-orange-600 px-3 py-2 rounded shadow text-center">JavaScript</li>
          <li className="bg-indigo-700 px-3 py-2 rounded shadow text-center">Mongoose</li>
          <li className="bg-pink-700 px-3 py-2 rounded shadow text-center">Angular</li>
          <li className="bg-yellow-600 px-3 py-2 rounded shadow text-center">Firebase</li>
          <li className="bg-gray-700 px-3 py-2 rounded shadow text-center">VS Code</li>
          <li className="bg-blue-500 px-3 py-2 rounded shadow text-center">Docker</li>
          <li className="bg-orange-500 px-3 py-2 rounded shadow text-center">Typescript</li>
        </ul>
      </div>
    </div>
  );
}
