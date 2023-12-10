import React, { useRef } from 'react'
import { projectsData } from '@/lib/data'
import Project from './project'


export default function Projects() {
  return (
    <section className='mt-24'>
      <h2 className="text-2xl font-bold text-gray-100 mb-12 mt-4 animate-fade-down animate-duration-[2000ms]">My projects</h2>
      <div>
        {
          projectsData.map((project, i) => (
            <React.Fragment key={i}>
             <Project {...project}/>
            </React.Fragment>
          ))
        }
      </div>
    </section>
  )
}

