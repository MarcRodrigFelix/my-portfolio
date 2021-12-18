import { skills } from '../data'
import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";

function Skills() {
  return(
    <section id="skills">
      <div>
        <div>
          <ChipIcon />
          <h1>Skills &amp; Technologies</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sitipsa delectus eum quo voluptas aspernatur accusantium distinctio possimus est.</p>
        </div>
        <div>
          {
            skills.map((skill) => (
              <div key={skill}>
                <div>
                  <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4"/>
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