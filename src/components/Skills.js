import { skills } from '../data' 
import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import reactLogo from '../images/react.png';
import rubyLogo from '../images/ruby.png';
import sinatraLogo from '../images/sinatra.png';
import javascriptLogo from '../images/javascript.png';
import railsLogo from '../images/rails.png';
import reduxLogo from '../images/redux.png';
import htmlLogo from '../images/html.png';
import cssLogo from '../images/css.png';
import sqlLogo from '../images/sql.png';
import gitLogo from '../images/git.png';




// import all images from "images" folder
// const images = require.context("../images", true, /\.(png|jpe?g|svg)$/);

function Skills() {

  return(
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4"/>
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4">Skills &amp; Technologies</h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Some of the languages and frameworks I have learned through my education so far. Always learning something new!</p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {
            skills.map((skill) => (
              <div key={skill} className="p-2 sm:w-1/2 w-full">
                <div className="bg-light-gray rounded flex p-4 h-full items-center">
                  {/* <BadgeCheckIcon className="text-green w-6 h-6 flex-shrink-0 mr-4"/> */}
                  {skill === 'React' && <img src={reactLogo} alt="React" className="w-8 h-8 flex-shrink-0 mr-4"/>}
                  {skill === 'Ruby' && <img src={rubyLogo} alt="Ruby" className="w-6 h-6 flex-shrink-0 mr-4" />}
                  {skill === 'Sinatra' && <img src={sinatraLogo} alt="Sintra" className="w-6 h-6 flex-shrink-0 mr-4" />}
                  {skill === 'Javascript' && <img src={javascriptLogo} alt="Javascript" className="w-6 h-6 flex-shrink-0 mr-4" />}
                  {skill === 'Rails' && <img src={railsLogo} alt="Rails" className="w-6 h-6 flex-shrink-0 mr-4" />}
                  {skill === 'Redux' && <img src={reduxLogo} alt="Redux" className="w-6 h-6 flex-shrink-0 mr-4" />}
                  {skill === 'HTML' && <img src={htmlLogo} alt="HTML" className="w-6 h-6 flex-shrink-0 mr-4" />}
                  {skill === 'CSS' && <img src={cssLogo} alt="CSS" className="w-6 h-6 flex-shrink-0 mr-4" />}
                  {skill === 'SQL' && <img src={sqlLogo} alt="SQL" className="w-6 h-6 flex-shrink-0 mr-4" />}
                  {skill === 'Git / Github' && <img src={gitLogo} alt="Git" className="w-6 h-6 flex-shrink-0 mr-4" />}
                  <span className="title-font font-medium text-white">
                    
                    {skill}
                  </span>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Skills;