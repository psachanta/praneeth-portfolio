import React, { useState } from "react";

export default function App() {
  const [activeSection, setActiveSection] = useState("about");

  return (
    <div className="bg-gray-50 text-gray-800 font-sans min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-indigo-600">Praneeth Achanta</h1>
          <ul className="hidden md:flex space-x-6">
            <li>
              <button
                onClick={() => setActiveSection("about")}
                className={`transition-colors hover:text-indigo-600 ${
                  activeSection === "about" ? "text-indigo-600 font-semibold" : ""
                }`}
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveSection("experience")}
                className={`transition-colors hover:text-indigo-600 ${
                  activeSection === "experience"
                    ? "text-indigo-600 font-semibold"
                    : ""
                }`}
              >
                Experience
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveSection("projects")}
                className={`transition-colors hover:text-indigo-600 ${
                  activeSection === "projects"
                    ? "text-indigo-600 font-semibold"
                    : ""
                }`}
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveSection("contact")}
                className={`transition-colors hover:text-indigo-600 ${
                  activeSection === "contact"
                    ? "text-indigo-600 font-semibold"
                    : ""
                }`}
              >
                Contact
              </button>
            </li>
          </ul>
          <a
            href="#contact"
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors hidden md:block"
          >
            Reach Out
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-indigo-100 to-blue-100">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Computer Science Graduate | Cloud & AI Enthusiast | Full Stack Developer
            </h2>
            <p className="mt-4 text-lg text-gray-700">
              Building intelligent systems and scalable cloud-native applications.
            </p>
            <div className="mt-6 flex space-x-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50 transition-colors"
              >
                View My Work
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="https://github.com/psachanta/praneeth-portfolio/blob/main/IMG_2248.jpg"
              alt="Profile"
              className="rounded-full w-48 h-48 object-cover shadow-lg border-4 border-white"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-16">
        {/* About Section */}
        {activeSection === "about" && (
          <section id="about" className="mb-20 animate-fadeIn">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">About Me</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  I'm Praneeth Achanta, a recent graduate in Computer Science from the University of Texas at Dallas, with a PG Certificate in AI/ML Applications from UT Austin. Passionate about building intelligent and scalable solutions, I specialize in full-stack development, cloud computing, and machine learning engineering.
                </p>
                <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                  With hands-on experience in AWS services, Python, and AI/ML frameworks like PyTorch and LangChain, I aim to deliver high-performance, innovative software solutions that solve real-world problems across industries.
                </p>
              </div>
              <div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900">Education</h4>
                    <p className="text-gray-600">
                      B.S. in Computer Science - University of Texas at Dallas (2025)
                    </p>
                    <p className="text-gray-600 mt-1">
                      PG Program in AI/ML - University of Texas at Austin (2024–2024)
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Location</h4>
                    <p className="text-gray-600">Dallas, TX</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Certifications</h4>
                    <ul className="list-disc list-inside text-gray-600">
                      <li>AWS Certified Cloud Practitioner</li>
                      <li>AWS Developer – Associate</li>
                      <li>AWS Solutions Architect – Professional</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Experience Section */}
        {activeSection === "experience" && (
          <section id="experience" className="mb-20 animate-slideUp">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Experience</h3>
            <div className="space-y-8">
              {[
                {
                  role: "Software Engineering Intern",
                  company: "BizCloud Experts",
                  duration: "July 2023 – August 2024",
                  responsibilities: [
                    "Integrated AWS SageMaker and Bedrock to develop scalable AI pipelines for NLP-based classification.",
                    "Built internal analytics dashboards using Python and Boto3 to monitor model performance across cloud deployments.",
                    "Automated processing of real-time video feeds using AWS Rekognition and Kinesis."
                  ]
                },
                {
                  role: "AI Intern",
                  company: "GenAI Kitchen",
                  duration: "July 2024 – Present",
                  responsibilities: [
                    "Built a centralized AI platform routing user queries to specialized models for healthcare, business, and legal use cases.",
                    "Integrated APIs (OpenAI, Anthropic) with backend routing logic using Python and Node.js.",
                    "Developed modular React frontend with tools tailored to industry-specific workflows.",
                    "Implemented prompt engineering and dynamic model selection to optimize response accuracy.",
                    "Deployed authentication, session management, and result formatting for multi-user access."
                  ]
                }
              ].map((job, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <h4 className="text-xl font-semibold text-gray-900">{job.role}</h4>
                  <p className="text-indigo-600 font-medium">{job.company}</p>
                  <p className="text-sm text-gray-500">{job.duration}</p>
                  <ul className="mt-4 list-disc pl-5 space-y-1 text-gray-700">
                    {job.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Projects Section */}
        {activeSection === "projects" && (
          <section id="projects" className="animate-slideUp">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {[
                {
                  title: "Endless Moments LLC",
                  description:
                    "An AI-powered photo management system using facial recognition and image clustering.",
                  tags: ["React", "Flask", "OpenAI API", "Figma", "JavaScript", "GitHub", "MongoDB", "NoSQL"],
                },
                {
                  title: "Carson’s Village Website",
                  description:
                    "Image uploads, storage services, and payment integration for Carson’s Village website.",
                  tags: ["AWS", "Nuxt", "React", "Docker", "Pug"],
                }
              ].map((project, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Contact Section */}
        {activeSection === "contact" && (
          <section id="contact" className="animate-fadeIn">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 mb-4">
                  Let’s connect! Whether it’s a job opportunity, collaboration, or just a friendly hello — feel free to reach out.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <MailIcon className="w-5 h-5 text-indigo-600 mr-2" />
                    <span>psachanta@gmail.com</span>
                  </li>
                  <li className="flex items-center">
                    <PhoneIcon className="w-5 h-5 text-indigo-600 mr-2" />
                    <span>(469) 674-0487</span>
                  </li>
                  <li className="flex items-center">
                    <MapIcon className="w-5 h-5 text-indigo-600 mr-2" />
                    <span>Dallas, TX</span>
                  </li>
                  <li className="flex items-center">
                    <LinkIcon className="w-5 h-5 text-indigo-600 mr-2" />
                    <a
                      href="https://linkedin.com/in/praneethachanta "
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      linkedin.com/in/praneethachanta
                    </a>
                  </li>
                </ul>
              </div>
              <form className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Your name"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Your email"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Praneeth Achanta. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-4">
            <a
              href="https://github.com/praneethachanta "
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/praneethachanta "
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:psachanta@gmail.com"
              className="hover:text-indigo-400 transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </footer>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
        .animate-slideUp {
          animation: slideUp 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

// Icons
function MailIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function PhoneIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function MapIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function LinkIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
    </svg>
  );
}
