import React from "react";

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <header className="bg-cover bg-center h-screen flex items-center justify-center text-white" style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}>
        <div className="text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to IAC NIT Jamshedpur</h1>
          <p className="text-lg md:text-2xl mb-6">Innovation and Collaboration at its Finest</p>
          <a href="#about" className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition">
            Learn More
          </a>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl font-semibold mb-6">About Us</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          At IAC NIT Jamshedpur, we foster innovation and bring ideas to life.
          Join us on our journey to excellence in academics, research, and
          technology.
        </p>
      </section>

      {/* Events Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6">Upcoming Events</h2>
        <ul className="space-y-4">
          <li className="bg-blue-100 text-blue-800 py-4 px-6 rounded-lg">
            Hackathon 2024 - January 15th
          </li>
          <li className="bg-blue-100 text-blue-800 py-4 px-6 rounded-lg">
            Workshop on AI - February 10th
          </li>
          <li className="bg-blue-100 text-blue-800 py-4 px-6 rounded-lg">
            Annual Tech Fest - March 20th
          </li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="text-center">
          <p className="mb-4">
            &copy; {new Date().getFullYear()} IAC NIT Jamshedpur. All rights reserved.
          </p>
          <nav className="space-x-4">
            <a href="#about" className="text-gray-400 hover:text-white">
              About
            </a>
            <a href="#events" className="text-gray-400 hover:text-white">
              Events
            </a>
            <a href="#contact" className="text-gray-400 hover:text-white">
              Contact
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
