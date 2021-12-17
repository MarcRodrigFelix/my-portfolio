import { CodeIcon } from '@heroicons/react/solid';
import React from 'react';
import { projects } from '../data.js';


function Projects() {
  return (
    <section id='projects'>
      <div>
        <div>
        <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1>Some of the projects I have built.
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
            fuga dolore.
          </p>
        </div>
        <div>
          { 
            projects.map( (project) => (
            <a 
              href={project.title}
              key={project.description}
            >
              <div>
                <img alt='project' src={project.image}/>
                <div>
                  <h2>{project.subtitle}</h2>
                  <h1>{project.title}</h1>
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