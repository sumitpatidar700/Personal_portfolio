import React from 'react'


const projects = () => {
  const project = {
    height: "300px",
    // minWidth: "100%"
  }
  return (
    <div id='projects' className='  mx-auto mt-16 w-[100%]  '>
      <div className='text-sky-600 text-2xl underline font-semibold flex justify-center items-center'>Projects</div>
      <div className='grid lg:grid-cols-4 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 m-2 p-2'>
        <div className='bg-slate-300 rounded-3xl m-2 p-2 min-h-[300px] shadow-md'><div className='bg-slate-200 rounded-3xl h-[75%] p-2'> Project img</div><div className='p-2'>Project Description</div></div>
        <div className='bg-slate-300 rounded-3xl m-2 p-2 min-h-[300px] shadow-md'><div className='bg-slate-200 rounded-3xl h-[75%] p-2'> Project img</div><div className='p-2'>Project Description</div></div>
        <div className='bg-slate-300 rounded-3xl m-2 p-2 min-h-[300px] shadow-md'><div className='bg-slate-200 rounded-3xl h-[75%] p-2'> Project img</div><div className='p-2'>Project Description</div></div>
        <div className='bg-slate-300 rounded-3xl m-2 p-2 min-h-[300px] shadow-md'><div className='bg-slate-200 rounded-3xl h-[75%] p-2'> Project img</div><div className='p-2'>Project Description</div></div>
        <div className='bg-slate-300 rounded-3xl m-2 p-2 min-h-[300px] shadow-md'><div className='bg-slate-200 rounded-3xl h-[75%] p-2'> Project img</div><div className='p-2'>Project Description</div></div>
        <div className='bg-slate-300 rounded-3xl m-2 p-2 min-h-[300px] shadow-md'><div className='bg-slate-200 rounded-3xl h-[75%] p-2'> Project img</div><div className='p-2'>Project Description</div></div>
        <div className='bg-slate-300 rounded-3xl m-2 p-2 min-h-[300px] shadow-md'><div className='bg-slate-200 rounded-3xl h-[75%] p-2'> Project img</div><div className='p-2'>Project Description</div></div>
        <div className='bg-slate-300 rounded-3xl m-2 p-2 min-h-[300px] shadow-md'><div className='bg-slate-200 rounded-3xl h-[75%] p-2'> Project img</div><div className='p-2'>Project Description</div></div>
      </div>
    </div>

  )
}

export default projects