import React from 'react'

export default function Navbar() {
  return (
    <>

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
          <a href="#contact" className="hover:underline font-semibold">Contact Us</a>
        </nav>
      </header>
    </>
  )
}
