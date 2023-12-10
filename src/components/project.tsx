'use client'

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from 'next/image';
import { useScroll } from 'framer-motion';
import { motion } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

export default function Project({ title, description, tags, imageUrl }: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null)
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1']
  })

  return (
    <motion.div ref={ref} style={{
        scale: scrollYProgress,
        opacity: scrollYProgress
    }} 
    className="mb-3 sm:mb-8 last:mb-0"
    >
        <section className='group bg-zinc-800 hover:bg-zinc-900 transition relative max-w-[42rem] border border-zinc-700/70 overflow-hidden sm:pr-8 mb-3 sm:mb-8 last:mb-0 even:pl-8'>
        <div className='pt-4 pb-8 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full group-even:ml-[18rem]'>
            <h3 className='text-2xl text-left font-semibold'>{title}</h3>
            <p className='mt-2 text-left leading-relaxed text-gray-200'>{description}</p>
            <ul className='flex flex-wrap mt-4 gap-2 items-center sm:mt-auto pt-6'>
            {tags.map((tag, i) => (
                <li className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full' key={i}>
                {tag}
                </li>
            ))}
            </ul>
        </div>

        <Image className='absolute top-8 -right-40 w-[29rem] rounded-t-lg shadow-2xl
        transition
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:-translate-y-3
        group-even:group-hover:rotate-2   

        group-even:right-[initial]
        group-even:-left-40' 
        src={imageUrl} alt='Image Project' quality={95} width={600} height={600}/>
        </section>
    </motion.div>
  )
}