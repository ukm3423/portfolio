import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa'; // Example icon for menu
import { CSSTransition } from 'react-transition-group';
import './styles.css'; // Import the custom CSS for transitions
import Projects from '../components/Projects'
import Intro from '../components/Intro';

const Home: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(prevState => !prevState);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const scrollToSection = (id: string) => {
    closeDrawer();
    const element = document.getElementById(id);
    if (element) {
      const offset = 60; // Adjust this value based on your navbar height
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full bg-gray-800 text-white p-4 z-50 flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-extrabold ">
          <span className="text-teal-500">UMESH</span> <span className="text-gray-200">KUMAR </span>
        </h1>
        <button
          className="md:hidden "
          onClick={toggleDrawer}
          aria-label="Open menu"
        >
          <FaBars size={24} />
        </button>
        <nav className="hidden md:flex space-x-4">
          <a href="#about" className="hover:underline font-semibold">About</a>
          <a href="#projects" className="hover:underline font-semibold">Projects</a>
          <a href="#contact" className="hover:underline font-semibold">Contact</a>
        </nav>
      </header>


      {/* Backdrop */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300"
          onClick={closeDrawer}
        />
      )}

      {/* Drawer with animation */}
      <CSSTransition
        in={isDrawerOpen}
        timeout={300}
        classNames="drawer"
        unmountOnExit
      >
        <div
          className="fixed top-0 right-0 z-50 w-64 h-full bg-gray-800 text-white p-6 shadow-lg"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold">Menu</h2>
            <button
              onClick={closeDrawer}
              className="text-white text-2xl hover:text-red-400 focus:outline-none"
            >
              &times;
            </button>
          </div>

          <nav>
            <ul className="space-y-4 font-medium text-base">
              <li>
                <a
                  href="#about"
                  onClick={() => {
                    scrollToSection("about");
                    closeDrawer();
                  }}
                  className="hover:text-teal-400 transition duration-200"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={() => {
                    scrollToSection("projects");
                    closeDrawer();
                  }}
                  className="hover:text-teal-400 transition duration-200"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={() => {
                    scrollToSection("contact");
                    closeDrawer();
                  }}
                  className="hover:text-teal-400 transition duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </CSSTransition>
      <main className=""> {/* Adjust top padding if needed */}

        <section id="about" className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-r from-gray-100 to-gray-200 p-4 md:p-8 mb-4 pt-16 relative overflow-hidden">
          <Intro />
        </section>



        {/* Project Section Start */}
        <section id="projects" className="min-h-screen bg-white p-4 pt-20">
          <Projects />
        </section>


        <section id="contact" className="min-h-screen bg-gray-200 p-4 pt-20">
          <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
          <p>
            Feel free to reach out to me for any inquiries or collaboration opportunities.
          </p>
          {/* Add your contact details or form here */}
        </section>
      </main>
    </div>
  );
};

export default Home;
