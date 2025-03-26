"use client"
import React from 'react'
import Image from 'next/image'
import myimg from './Assests/myimg.jpg'

const About = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Sumit_Resume.pdf'; // Path to your PDF file in the public directory
    link.download = 'Sumit_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div id='about-me' className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-3 px-3 m-0'>
      <div className='p-2 border bg-slate-200 flex justify-center items-center rounded-2xl shadow-2xl'>
        <div className='p-2 bg-gray-100 flex justify-center items-center rounded-2xl'>
          <div className='p-2 bg-gray-200 flex justify-center items-center rounded-2xl'>
            <Image src={myimg} height={450} className='rounded-2xl' alt='img' />
          </div>
        </div>
      </div>
      <div className='p-3 '>
        <div>
          <div className='text-3xl font-bold text-gray-800 my-2'>About me</div>
          <div className='font-bold text-gray-800'>Sumit Patidar</div>
          <div className='text-sky-600'>React developer || Web developer || Programmer</div>
          <div>---------------</div>
          <div className='font-bold '>Residence:<span className='font-light text-sky-700'> India</span></div>
          <div className='font-bold '>City:<span className='font-light text-sky-700'> Indore</span></div>
          <div className='font-bold '>Age:<span className='font-light text-sky-700'> 21</span></div>
          <div className='my-2 text-sky-800'>B.Tech Computer Science student from SDBC Indore with expertise in Data Structures, Algorithms, and Web development. Proficient in C, Java, and JavaScript. Experienced in Frontend Web development React, Nextjs, Bootstrap, Material UI . focusing on responsive UI design. Holds an NPTEL certification.</div>
          <div className='flex flex-wrap my-2'>
            <div className='bg-slate-200 rounded-lg shadow-lg m-2 p-2 icon-container cursor-default text-sm font-medium text-sky-600 '>HTML</div>
            <div className='bg-slate-200 rounded-lg shadow-lg m-2 p-2 icon-container cursor-default text-sm font-medium text-sky-600 '>CSS</div>
            <div className='bg-slate-200 rounded-lg shadow-lg m-2 p-2 icon-container cursor-default text-sm font-medium text-sky-600 '>JavaScript</div>
            <div className='bg-slate-200 rounded-lg shadow-lg m-2 p-2 icon-container cursor-default text-sm font-medium text-sky-600 '>React</div>
            <div className='bg-slate-200 rounded-lg shadow-lg m-2 p-2 icon-container cursor-default text-sm font-medium text-sky-600 '>Bootstrap</div>
            <div className='bg-slate-200 rounded-lg shadow-lg m-2 p-2 icon-container cursor-default text-sm font-medium text-sky-600 '>Material UI</div>
            <div className='bg-slate-200 rounded-lg shadow-lg m-2 p-2 icon-container cursor-default text-sm font-medium text-sky-600 '>Nextjs</div>
          </div>
          <div className=" flex justify-center items-center">
          <button onClick={handleDownload}  className='cv m-2 px-3 p-2  shadow-xl font-medium text-sky-900 rounded-tl-xl bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200 icon-container_s'>GET RESUME</button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default About