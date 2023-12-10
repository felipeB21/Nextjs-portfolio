import Skills from "@/components/Skills"
import SectionDivider from "@/components/section-divider"
import Link from "next/link"
import { BsArrowRight, BsGithub, BsLinkedin } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'

export default function Home() {
  return (
    <>
    <main className="mt-20 flex lg:flex-row flex-col gap-6 lg:gap-0 justify-between lg:items-start items-center lg:text-start text-center animate-fade-down animate-duration-[2000ms]">
      <div>
        <p className="text-xl">Hello! 👋, I&apos;m <strong>Felipe Bolgar</strong>.</p>
        <div className="sm:text-7xl text-6xl bg-gradient-to-r from-blue-600 to-purple-500 inline-block text-transparent bg-clip-text font-bold">
          <h1>Full Stack</h1>
          <span>Developer</span>
          <div>
            <div className="font-normal mt-6 flex items-center justify-center lg:justify-normal gap-4">
              <Link href="#contact" className="group bg-zinc-700 text-white text-lg flex items-center gap-2 w-max px-4 py-1 rounded-full outline-none focus:scale-105 hover:bg-zinc-950 transition duration-300">
                  Contact me <BsArrowRight
                    className="group-hover:translate-x-1.5 duration-500"
                  />
              </Link>

              <a href="/CV.pdf" download className="group text-lg bg-white text-black flex items-center gap-2 w-max px-4 py-1 rounded-full outline-none focus:scale-105 hover:bg-gray-300 transition duration-300">
                Download CV <HiDownload 
                  className="group-hover:translate-x-1.5 duration-500"
                />
              </a>

            </div>
            <div className="font-normal flex items-center justify-center lg:justify-normal gap-4 mt-3 ">
              <a href="https://github.com/felipeB21" target="_blank" className="group text-lg bg-neutral-800 text-white flex items-center gap-2 w-max px-4 py-1 rounded-full outline-none focus:scale-105 hover:bg-neutral-900 transition duration-300">
                GitHub <BsGithub 
                  className="group-hover:translate-x-1.5 duration-500"
                />
              </a>

              <a href="https://www.linkedin.com/in/felipe-bolgar-b08648285/" target="_blank" className="group text-lg bg-sky-600 text-white flex items-center gap-2 w-max px-4 py-1 rounded-full outline-none focus:scale-105 hover:bg-sky-700 transition duration-300">
                Linkedin <BsLinkedin 
                  className="group-hover:translate-x-1.5 duration-500"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-gray-100 mb-1">About me</h2>
        <p className="md:w-[450px] w-[330px] sm:text-lg">Passionate about web and application development! I studied <strong>Full-Stack</strong> programming at <strong>DigitalHouse</strong>, and from that moment, I knew that programming was my calling. Currently, I am focused on <strong>NextJS</strong>, <strong>Astro</strong> and <strong>React</strong>.</p>
      </div>
    </main>
    <section className="flex flex-col items-center w-full text-center sm:mt-0 mt-10">
      <SectionDivider />
      <Skills />
    </section>
    </>
  )
}
