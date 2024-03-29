import { CodeIcon } from '@heroicons/react/solid';
import React from 'react';
import { projects } from '../data.js';


function Projects() {
  return (
    <section id='projects' className="text-new-white bg-new-grey body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
        <CodeIcon className="mx-auto inline-block w-10 mb-4 text-warm-yellow" />
          <h1  className="sm:text-4xl text-3xl font-medium title-font mb-4">Projects I have built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Here are the projects I have built while learning Rails, React, Redux, and more!
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          { 
            projects.map( (project) => (
            <a 
              href={project.link}
              key={project.description}
              className="sm:w-1/2 w-100 p-4"
            >
              <div className="flex relative project-item">
                <img
                  src={project.image}
                  alt='project' 
                  className="absolute inset-0 w-full h-full object-cover object-center border-2 border-second-grey project-image" />
                <div className="px-8 py-10 relative z-10 w-full border-2 border-warm-yellow bg-second-grey opacity-0 hover:opacity-100 project-info"  style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">{project.subtitle}</h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">{project.title}</h1>
                  <p className='leading-relaxed'>{project.description}</p>
                </div>
              </div>
            </a>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Projects;