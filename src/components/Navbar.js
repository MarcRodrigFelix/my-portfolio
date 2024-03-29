// import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

function Navbar() {
  return (
    // <header className="bg-warm-yellow md:sticky top-0 z-10">
    <header className="text-warm-yellow rounded">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a href="/#" className="title-font text-new-white font-medium mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl ">
            Marcos Rodriguez
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-new-white">Projects</a>
          <a href="#skills" className="mr-5 hover:text-new-white">Skills</a>
          <a href="https://github.com/MarcRodrigFelix" className="mr-5 hover:text-new-white">Github</a>
          <a href="https://www.linkedin.com/in/marcos-rodriguez-felix/" className="mr-5 hover:text-new-white">LinkedIn</a>
        </nav>
        {/* <a href="#contact" className="inline-flex items-center bg-black-coffee border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          <ArrowRightIcon className="w-4 h-4 ml-1"/>
          Hire Me
          </a> */}
      </div>
    </header>
  )
}

export default Navbar;