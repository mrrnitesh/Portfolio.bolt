import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Briefcase, User, ChevronDown } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center relative px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 opacity-70"></div>
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Nitesh Kumar
          </h1>
          <p className="text-xl sm:text-2xl text-gray-700 mb-8">
            Full Stack Developer
          </p>
          <div className="flex justify-center space-x-4">
            <a href="https://github.com" className="p-2 bg-white rounded-full shadow-lg hover:shadow-xl transition-all">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" className="p-2 bg-white rounded-full shadow-lg hover:shadow-xl transition-all">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:contact@example.com" className="p-2 bg-white rounded-full shadow-lg hover:shadow-xl transition-all">
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-gray-600" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-12">
            <User className="w-8 h-8 mr-3 text-indigo-600" />
            <h2 className="text-3xl font-bold text-gray-900">About Me</h2>
          </div>
          <div className="prose prose-lg mx-auto">
            <p className="text-gray-600 text-center">
              I'm a passionate developer with 5 years of experience in building beautiful, functional websites
              and applications. I specialize in React, Node.js, and modern web technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-12">
            <Code2 className="w-8 h-8 mr-3 text-indigo-600" />
            <h2 className="text-3xl font-bold text-gray-900">Skills</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker'].map((skill) => (
              <div key={skill} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <p className="text-lg font-semibold text-center text-gray-800">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-12">
            <Briefcase className="w-8 h-8 mr-3 text-indigo-600" />
            <h2 className="text-3xl font-bold text-gray-900">Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'E-commerce Platform',
                description: 'A full-stack e-commerce solution built with React and Node.js',
                image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80'
              },
              {
                title: 'Task Management App',
                description: 'A beautiful and intuitive task management application',
                image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80'
              }
            ].map((project) => (
              <div key={project.title} className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <a href="#" className="inline-flex items-center text-indigo-600 hover:text-indigo-700">
                    View Project <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Let's Connect</h2>
          <p className="text-gray-600 mb-8">
            I'm always open to discussing new projects and opportunities.
          </p>
          <a
            href="mailto:contact@example.com"
            className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            <Mail className="w-5 h-5 mr-2" />
            Get in Touch
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600">
          <p>© {new Date().getFullYear()} Nitesh Kumar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;