import React from 'react'
import { FaNodeJs, FaPython, FaReact } from 'react-icons/fa'
import { SiBootstrap, SiExpress, SiJavascript, SiMongodb, SiTailwindcss, SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

export default function Skills() {
  return (
    <section className="m-4 md:m-8 dark:bg-gray-800 dark:text-gray-100">
      <div className="container mx-auto p-4 my-6 space-y-2 text-center">
        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">Skills</h1>

        <div className="mt-2">
          <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
          <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
          <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
        </div>
      </div>
      <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-3 lg:grid-cols-5 grid-cols-2">
        <div className="flex flex-col items-center p-4 ">
          <div className=''>
            <TbBrandNextjs className='origin-bottom duration-5000 scale-110 animate-pulse text-5xl text-[#05427c]' />
          </div>
          <h3 className="my-3 text-3xl font-semibold">Next JS</h3>
        </div>
        <div className="flex flex-col items-center p-4 ">
          <div className=''>
            <SiMongodb className='origin-bottom duration-5000 scale-110 animate-pulse text-5xl text-[#4db33d]' />
          </div>
          <h3 className="my-3 text-3xl font-semibold">MongoDB</h3>
        </div>
        <div className="flex flex-col items-center p-4 ">
          <div className=''>
            <FaNodeJs className='origin-bottom duration-5000 scale-110 animate-pulse text-5xl text-[#68a063]' />
          </div>
          <h3 className="my-3 text-3xl font-semibold">Node</h3>
        </div>
        <div className="flex flex-col items-center p-4 ">
          <div className=''>
            <FaReact className='origin-bottom duration-5000 scale-110 animate-pulse text-5xl text-[#31d1f1]' />
          </div>
          <h3 className="my-3 text-3xl font-semibold">React</h3>
        </div>
        <div className="flex flex-col items-center p-4 ">
          <div className=''>
            <SiExpress className='origin-bottom duration-5000 scale-110 animate-pulse text-5xl text-[#68a063]' />
          </div>
          <h3 className="my-3 text-3xl font-semibold">Express</h3>
        </div>
        <div className="flex flex-col items-center p-4 ">
          <div className=''>
            <SiJavascript className='origin-bottom duration-5000 scale-110 animate-pulse text-5xl text-[#e9ce22]' />
          </div>
          <h3 className="my-3 text-3xl font-semibold">JavaScript</h3>
        </div>
        <div className="flex flex-col items-center p-4 ">
          <div className=''>
            <SiTypescript className='origin-bottom duration-5000 scale-110 animate-pulse text-5xl text-[#e9ce22]' />
          </div>
          <h3 className="my-3 text-3xl font-semibold">TypeScript</h3>
        </div>
        <div className="flex flex-col items-center p-4 ">
          <div className=''>
            <SiTailwindcss className='origin-bottom duration-5000 scale-110 animate-pulse text-5xl text-[#06b6d4]' />
          </div>
          <h3 className="my-3 text-3xl font-semibold">Tailwind</h3>
        </div>
        <div className="flex flex-col items-center p-4 ">
          <div className=''>
            <SiBootstrap className='origin-bottom duration-5000 scale-110 animate-pulse text-5xl text-[#563d7c]' />
          </div>
          <h3 className="my-3 text-3xl font-semibold">Bootstarp</h3>
        </div>
        <div className="flex flex-col items-center p-4 ">
          <div className=''>
            <FaPython className='origin-bottom duration-5000 scale-110 animate-pulse text-5xl text-[#ffde57]' />
          </div>
          <h3 className="my-3 text-3xl font-semibold">Python</h3>
        </div>

      </div>
    </section>
  )
}
