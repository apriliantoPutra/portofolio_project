import { useState } from "react";
import { FiGithub, FiLinkedin, FiMail, FiExternalLink, FiCode, FiServer, FiDatabase, FiCloud, FiBook, FiUsers, FiAward } from "react-icons/fi";

// Import gambar dari assets
import novelProject from "./assets/novel-project.png";
import bankSampahImage from "./assets/bank-sampah.png";
import autentikImage from "./assets/autentik.png";
import epalImage from "./assets/epal.png";
import MarketPlace from "./assets/marketplace.png";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  // Data proyek sesuai CV dengan gambar dari assets
  const projects = [
    {
      id: 1,
      title: "NovelApp: Cross-Platform Reading Platform",
      description:
        "Engineered a full-stack web and mobile reading application. The web platform, built with Vue.js and Node.js, features a multi-role system for authors to publish/manage novels and admins to oversee platform integrity. Extended the ecosystem with a Flutter mobile app providing a synchronized reader-focused experience for accessing novels and comments. Implemented secure REST APIs for authentication and data consistency across platforms.",
      technologies: ["Node.js", "Vue.js", "PostgreSQL", "REST API", "Flutter", "TailwindCSS"],
      image: novelProject,
      url: "https://github.com/apriliantoPutra/novel_project",
    },
    {
      id: 2,
      title: "E-Commerce Marketplace Platform",
      description:
        "Developed a full-stack e-commerce marketplace website with dual-role system (User/Admin). Implemented complete shopping functionality including cart management, checkout flow, and user profile customization. Built a comprehensive admin dashboard for product/category management and user data monitoring.",
      technologies: ["Next.js", "Node.js", "PostgreSQL", "TailwindCSS"],
      image: MarketPlace,
      url: "https://github.com/apriliantoPutra/marketplace.git",
    },
    {
      id: 3,
      title: "Bank Sampah System",
      description: "Developed a system consisting of a mobile app and admin website to enable online waste deposits, automatic transaction recording, and provides balance based on deposited waste.",
      technologies: ["Flutter", "PHP Laravel", "Rest API", "MySQL"],
      image: bankSampahImage,
      url: "https://github.com/apriliantoPutra/projek_ta",
    },
    {
      id: 4,
      title: "E-Pal System Web",
      description: "Designed and implemented a reporting website for licensing of the E-Pal, an IoT-based wastewater treatment product at PT Autentik Karya Analitika.",
      technologies: ["PHP Laravel", "Tailwind CSS", "MySQL"],
      image: epalImage,
      url: "https://epal-system.autentik.co.id/",
    },
    {
      id: 5,
      title: "Company Product Website",
      description: "Built a company website for PT Autentik Karya Analitika to showcase IoT products and improve product visibility.",
      technologies: ["PHP CodeIgniter", "Tailwind CSS", "MySQL"],
      image: autentikImage,
      url: "https://autentik.co.id/",
    },
  ];

  // Data hard skills sesuai CV
  const hardSkills = [
    {
      name: "Microsoft Office",
      icon: <FiBook className="text-2xl" />,
      items: ["Word", "Excel", "PowerPoint"],
    },
    {
      name: "UI/UX Design",
      icon: <FiCode className="text-2xl" />,
      items: ["User Interface", "User Experience"],
    },
    {
      name: "Frontend Development",
      icon: <FiCode className="text-2xl" />,
      items: ["Vue.js", "Next.js", "React.js", "Tailwind CSS"],
    },
    {
      name: "Backend Development",
      icon: <FiServer className="text-2xl" />,
      items: ["PHP Laravel", "Node.js"],
    },
    {
      name: "Database",
      icon: <FiDatabase className="text-2xl" />,
      items: ["MySQL", "PostgreSQL", "MongoDB"],
    },
    {
      name: "Mobile Development",
      icon: <FiCloud className="text-2xl" />,
      items: ["Flutter"],
    },
  ];

  // Data soft skills sesuai CV
  const softSkills = ["Teamwork", "Time Management", "Critical Thinking", "Truthful", "Adaptability"];

  // Data sertifikat sesuai CV
  const certificates = [
    {
      name: "Big Data Analyst by Solusi247",
      description: "Successfully completed a structured online program covering fundamental data science concepts and applications.",
    },
    {
      name: "Junior Mobile Programming by BNSP (Badan Nasional Sertifikasi Profesi)",
      description: "Certified in developing mobile applications, focusing on Android development basics and implementation.",
    },
    {
      name: "MikroTik by MTCNA (MikroTik Certified Network Associate)",
      description: "Achieved certification in networking fundamentals and MikroTik router.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="#" className="text-xl font-bold text-gray-800">
              Software Developer
            </a>

            <div className="hidden md:flex space-x-8">
              {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className={`text-gray-600 hover:text-indigo-600 transition ${activeSection === item.toLowerCase() ? "text-indigo-600 font-medium" : ""}`}>
                  {item}
                </a>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex space-x-3">
                <a href="https://github.com/apriliantoPutra" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600">
                  <FiGithub size={20} />
                </a>
                <a href="https://linkedin.com/in/muhammad-aprilianto-putra/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600">
                  <FiLinkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-blue-100 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <img src="/profile.jpeg" alt="Muhammad Aprilianto Putra" className="w-40 h-40 rounded-full mx-auto mb-6 object-cover border-4 border-white shadow-lg" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-4">
            Hi, I'm <span className="text-indigo-600">Muhammad Aprilianto Putra</span>
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-600 mb-8">Software Developer & Full Stack Developer</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">I am a fresh graduate from Politeknik Negeri Semarang with a strong passion for software development, focusing on both web and mobile application development.</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#projects" className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition shadow-md">
              View My Project
            </a>
            <a href="#contact" className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">About Me</h2>

          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <p className="text-lg text-gray-600 mb-6">I am a fresh graduate from Politeknik Negeri Semarang with a strong passion for software development, focusing on both web and mobile application development.</p>
              <p className="text-lg text-gray-600 mb-6">
                I have hands-on experience as a Web Developer intern and hold a certification in mobile development using Flutter. I am eager to contribute my skills in building innovative, reliable, and user-centered digital solutions.
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-lg">
                  <span className="font-semibold">Web Development</span>
                </div>
                <div className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-lg">
                  <span className="font-semibold">Mobile Apps</span>
                </div>
                <div className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-lg">
                  <span className="font-semibold">UI/UX Design</span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-4">Education</h3>
              <div className="mb-6">
                <h4 className="font-semibold text-gray-700">Politeknik Negeri Semarang</h4>
                <p className="text-gray-600">Active member of Politeknik Computer Club (PCC) as a Network Department Staff</p>
                <p className="text-gray-500 text-sm">August 2022 - September 2025</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700">SMA Negeri 1 Jakenan</h4>
                <p className="text-gray-600">Science Math Student</p>
                <p className="text-gray-500 text-sm">August 2019 - July 2022</p>
              </div>
            </div>

            <div className="md:w-1/2">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Work Experience</h3>
              <div className="bg-gray-50 p-6 rounded-xl shadow-md mb-6">
                <h4 className="font-semibold text-gray-800">PT Autentik Karya Analitika</h4>
                <p className="text-gray-600 mb-2">Internship as a website developer</p>
                <ul className="text-gray-600 list-disc list-inside space-y-1">
                  <li>Updating and improving the appearance of the company's product website</li>
                  <li>Learn about the company's ERP (Enterprise Resource Planning) system</li>
                  <li>Developed the E-Pal System website to support business operations</li>
                </ul>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-4">Certificates</h3>
              <div className="space-y-4">
                {certificates.map((cert, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-start">
                      <FiAward className="text-indigo-600 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-gray-800">{cert.name}</h4>
                        <p className="text-gray-600 text-sm">{cert.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">My Projects</h2>
          <p className="text-lg text-center text-gray-600 mb-12 max-w-2xl mx-auto">Here are some of my recent projects that I've worked on during my studies and internship.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-indigo-100 text-indigo-800 text-sm rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex ">
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="flex items-center text-indigo-600 hover:underline">
                      <FiExternalLink className="mr-1" /> Link
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">My Skills</h2>

          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {hardSkills.map((skill, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-md">
                  <div className="text-indigo-600 mb-4">{skill.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{skill.name}</h3>
                  <ul className="space-y-2">
                    {skill.items.map((item, i) => (
                      <li key={i} className="text-gray-600 flex items-center">
                        <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Soft Skills</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {softSkills.map((skill, index) => (
                <div key={index} className="px-6 py-3 bg-indigo-100 text-indigo-800 rounded-full">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Get In Touch</h2>
          <p className="text-lg text-center text-gray-600 mb-12 max-w-2xl mx-auto">Have a project in mind or want to discuss potential opportunities? Feel free to reach out!</p>

          <div className="max-w-md mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <FiMail className="text-indigo-600 mt-1 mr-4 flex-shrink-0" size={20} />
                  <div>
                    <p className="text-gray-700 font-medium">Email</p>
                    <a href="mailto:apriliantoputra696@gmail.com" className="text-indigo-600 break-all">
                      apriliantoputra696@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <FiLinkedin className="text-indigo-600 mr-4 flex-shrink-0" size={20} />
                  <div>
                    <p className="text-gray-700 font-medium">LinkedIn</p>
                    <a href="https://linkedin.com/in/muhammad-aprilianto-putra/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 break-all">
                      linkedin.com/in/muhammad-aprilianto-putra
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <FiUsers className="text-indigo-600 mr-4 flex-shrink-0" size={20} />
                  <div>
                    <p className="text-gray-700 font-medium">Instagram</p>
                    <a href="https://www.instagram.com/put14.79/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 break-all">
                      instagram.com/put14.79
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center space-x-6 mb-6">
            <a href="https://github.com/apriliantoPutra" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FiGithub size={20} />
            </a>
            <a href="https://linkedin.com/in/muhammad-aprilianto-putra/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FiLinkedin size={20} />
            </a>
            <a href="https://www.instagram.com/put14.79/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FiUsers size={20} />
            </a>
            <a href="mailto:apriliantoputra696@gmail.com" className="text-gray-400 hover:text-white">
              <FiMail size={20} />
            </a>
          </div>
          <p className="text-gray-400">© {new Date().getFullYear()} Muhammad Aprilianto Putra. All rights reserved.</p>
          <p className="text-gray-500 text-sm mt-2">Tluwah RT.03/ RW.01, Juwana, Pati, Central Java</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
