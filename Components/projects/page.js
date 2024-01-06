import Image from 'next/image'
import React from 'react'

export default function Projects() {
    return (
        <section className="w-10/12 mx-auto">
            <div className='mb-10 text-center'>
                <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">Projects</h1>

                <div className="mt-2">
                    <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                    <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
                    <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
                </div>
            </div>
            <div className="flex">

                <a href="">
                    <div className="flex w-full">
                        <div className="relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform bg-white shadow-2xl rounded-xl md:hover:-translate-y-16">
                            <img className="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36" src="https://i.ibb.co/DrqNHY3/image-removebg-preview-7.png" alt="blog" />
                            <div className="px-6 py-8">
                                <h4 className="mt-4 text-2xl font-semibold text-neutral-600">
                                    <span className="">Entry</span>
                                </h4>
                                <p className="mt-4 text-base font-normal text-gray-500 leading-relax">Install Tailwind CSS without any Javascript Framewrok locally with purgeCSS, enable the dark mode option, prefferences or className is upt to you.</p>
                            </div>
                        </div>
                    </div>
                </a>

                <a href="">
                    <div className="flex w-full">
                        <div className="relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform bg-white shadow-2xl rounded-xl md:hover:-translate-y-16">
                            <img className="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36" src="https://i.ibb.co/DrqNHY3/image-removebg-preview-7.png" alt="blog" />
                            <div className="px-6 py-8">
                                <h4 className="mt-4 text-2xl font-semibold text-neutral-600">
                                    <span className="">Entry</span>
                                </h4>
                                <p className="mt-4 text-base font-normal text-gray-500 leading-relax">Install Tailwind CSS without any Javascript Framewrok locally with purgeCSS, enable the dark mode option, prefferences or className is upt to you.</p>
                            </div>
                        </div>
                    </div>
                </a>

                <a href="">
                    <div className="flex w-full">
                        <div className="relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform bg-white shadow-2xl rounded-xl md:hover:-translate-y-16">
                            <img className="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36" src="https://i.ibb.co/DrqNHY3/image-removebg-preview-7.png" alt="blog" />
                            <div className="px-6 py-8">
                                <h4 className="mt-4 text-2xl font-semibold text-neutral-600">
                                    <span className="">Entry</span>
                                </h4>
                                <p className="mt-4 text-base font-normal text-gray-500 leading-relax">Install Tailwind CSS without any Javascript Framewrok locally with purgeCSS, enable the dark mode option, prefferences or className is upt to you.</p>
                            </div>
                        </div>
                    </div>
                </a>

            </div>
        </section>
    )
}
