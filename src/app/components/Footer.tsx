import React from 'react'

const Footer = () => {
    return (
        <div className='bg-slate-100 w-[100%]  mt-5 grid p-4 lg:px-64  divide-y-2 cursor-default'>
            <div className='text-center p-4'>
                <div className='text-sky-900 text-3xl font-semibold'>Brilliant soutions for your ideas</div>
                <div>Build Modern websites fast and easy using Now!</div>
            </div>
            <div className='text-center grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 xs:grid-cols-2 lg:gap-14'>
                <div className='p-2 mx-2 '>
                    <div className='text-start'>About me</div>
                    <div className=' mt-1 text-justify text-xs text-slate-500 font-light'>Creative and detail-oriented web developer with expertise in front-end and back-end technologies. Skilled in HTML, CSS, JavaScript, and frameworks such as React and Django. Demonstrated experience through internships and personal projects, with a focus on delivering dynamic, responsive, and visually appealing web solutions. Dedicated to problem-solving and improving user experience.</div>
                </div>
                <div className='p-2 mx-2 '>
                    <div className='text-start'>Home</div>
                    <div className=' mt-1 text-start text-xs text-slate-500 font-light'>
                        <div>Achievements</div>
                        <div>About me</div>
                        <div>Projects</div>
                        <div>Contact me</div>
                    </div>
                </div>
                <div className='p-2 mx-2 '>
                    <div className='text-start'>How i work</div>
                    <div className=' mt-1 text-start text-xs text-slate-500 font-light'>
                        <div>Experts and AI</div>
                        <div>Get a custom draft</div>
                        <div>Personlize and launch</div>
                        <div>reports</div>
                    </div>
                </div>
                <div className='p-2 mx-2 '>
                    <div className='text-start'>Pricing</div>
                    <div className=' mt-1 text-start text-xs text-slate-500 font-light'>
                        <div>Send Message</div>
                        <div>Send Mail</div>
                        <div>Phone call</div>
                    </div>
                </div>
            </div>
            <div className='text-center'>
                <p className="text-sm ">
                    &copy; <span className="font-light text-xs">2024 _patidarsumit_0x Inc, All right reserved.</span>
                </p>
            </div>
        </div>
    )
}

export default Footer