import React  from 'react'
import { projectsData } from '@/lib/data'
import Project from './project'


export default function Projects() {
  return (
    <section id='projects' className='mt-24'>
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
      <div className='mt-8'>
        <a className='px-8 py-2 bg-zinc-700/80 rounded-full hover:bg-zinc-800 duration-200' href="https://github.com/felipeB21" target='_blank'>See more</a>
      </div>
    </section>
  )
}

