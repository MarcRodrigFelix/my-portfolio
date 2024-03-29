import React from "react";
import myImage from "../me-niceday.jpg";

function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium"><span className="text-warm-yellow">Hello.</span><br/> My name is Marcos Rodriguez<span className="text-warm-yellow">.</span>
            {/* <br className="hidden lg:inline-block"/>I am a Fullstack Developer. */}
          </h1>
          <p className="mb-8 leading-relaxed">I am a full-stack developer, with a passion for backend development. Always learning!</p>
          <div className="flex justify-center">
            <a 
              href='#projects'
              className="inline-block px-4 py-2 border border-warm-yellow text-warm-yellow hover:bg-warm-yellow hover:text-new-grey rounded">Recent Projects</a>
            {/* <a
              href='#contact'
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Hire me / Work together</a> */}
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img 
            className="object-cover object-center rounded-full"
            alt='me' 
            src={myImage}
            // src=""
            />
        </div>
      </div>
    </section>
  )
}

export default About;