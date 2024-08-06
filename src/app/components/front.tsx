"use client"
import React from 'react';
import Image from 'next/image';
import profilepic from './Assests/1.jpg';
import profilepic2 from './Assests/fp.png';

const Front = () => {
  const imageStyle = {
    borderRadius: "180px 180px 0px 0px"
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Sumit_patidar_resume.pdf'; // Path to your PDF file in the public directory
    link.download = 'Sumit_patidar_resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id='home' className='mx-3  p-3 px-5 lg:grid-cols-2  md:grid-cols-2 rounded-2xl  grid justify-evenly align-middle  mt-20 '>
      <div className=' flex flex-col justify-center'>
        <div className=' m-2 text-5xl flex flex-col font-bold bg-gradient-to-t  bg-clip-text text-transparent'>
          <span>Discover my Amazing</span> <span> Art Space!</span>
        </div>
        <div className='m-2 '>
          &lt;<span className='text-blue-600'>code</span>&gt;
          Build Web
          &lt;<span className='text-blue-600'>/code</span>&gt;
        </div>
        <div className=" flex justify-start items-center">
          <button
            onClick={handleDownload}
            className='cv m-2 px-3 p-2  shadow-xl font-medium text-sky-900 rounded-tl-xl bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200 icon-container_s'
          >
            DOWNLOAD RESUME
          </button>
        </div>
      </div>
    </div>
  );
}

export default Front;
