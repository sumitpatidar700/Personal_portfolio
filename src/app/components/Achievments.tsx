import React from 'react'
import Image from 'next/image'
import trophy from './Assests/trophy.png'
import customer_r from './Assests/customer-review.png'
import customer_s from './Assests/customer-service.png'
import html_icon from './Assests/html-5.png'
import bootstrap_icon from './Assests/composite.png'
import css_icon from './Assests/css-3.png'
import js_icon from './Assests/js.png'
import code_icon from './Assests/code.png'
import python_icon from './Assests/python.png'
import react_icon from './Assests/science.png'
import java from './Assests/java.png'
import android from './Assests/android.png'

function Achievments() {
    const mystyle = {
        height: "70px",
        width: "70px",
    }
    return (
        <>
            <div id='achievements' className='m-0 px-3 portion grid lg:grid-cols-2 gap-1 md:grid-cols-2 sm:grid-cols-1   '>
                <div className='flex flex-col '>
                    <div className='py-2'>
                        <h3 className='text-sky-600 text-2xl underline font-semibold'>Achievments</h3>
                        <h4 className='text-3xl font-bold text-gray-800 py-2'>I've been fortunate to work with and for people from some <span className='text-blue-700'>amazing organizations</span></h4>
                    </div>
                    <div className='flex flex-col py-3'>
                        <div className='flex py-2'>
                            <Image src={trophy} className=' icon-container bg-sky-100 p-1 rounded-lg shadow-xl' alt='trophy' style={mystyle} />
                            <div className='flex flex-col  px-2'>
                                <div className='text-gray-800 text-xl font-bold'> 4+</div>
                                <div className='text-gray-500 text-sm px-1'>NPTEL certification from IIT Kharagpur.</div>
                            </div>
                        </div>
                        <div className='flex py-2'>
                            <Image src={customer_s} className=' icon-container bg-sky-100 p-1 rounded-lg shadow-xl' alt='trophy' style={mystyle} />
                            <div className='flex flex-col  px-2'>
                                <div className='text-gray-800 text-xl font-bold'>4+</div>
                                <div className='text-gray-500 text-sm px-1'>4+ months of internships at SWAP Infotech, IT Park and Softinator.</div>
                            </div>
                        </div>
                        <div className='flex py-2'>
                            <Image src={customer_r} className=' icon-container bg-sky-100 p-1 rounded-lg shadow-xl' alt='trophy' style={mystyle} />
                            <div className='flex flex-col  px-2'>
                                <div className='text-gray-800 text-xl font-bold'>5+</div>
                                <div className='text-gray-500 text-sm px-1'>More than 5 ReactJs Projects in Web Development.</div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='min-w-[10px] min-h-[500px] overflow-hidden'>
                    <div className=' relative w-[100%] h-[100%] '>
                        <div className='icon-container p-2 overflow-hidden shadow-2xl rounded-full absolute top-[50%] right-[0%]'><Image className='  ' height={35} src={html_icon} alt='html' />
                        </div>
                        <div className='icon-container p-2 overflow-hidden shadow-2xl rounded-full absolute top-[0%] left-[50%]'><Image className='  ' height={65} src={js_icon} alt='html' />
                        </div>
                        <div className='icon-container p-2 overflow-hidden shadow-2xl rounded-full absolute top-[15%] left-[5%]  '><Image className='  ' height={70} src={css_icon} alt='html' />
                        </div>
                        <div className='icon-container p-2 overflow-hidden shadow-2xl rounded-full absolute top-[28%] right-[10%]'><Image className='  ' height={60} src={java} alt='html' />
                        </div>
                        <div className='icon-container p-2 overflow-hidden shadow-2xl rounded-full absolute top-[56%] left-[5%]'><Image className='  ' height={40} src={code_icon} alt='html' />
                        </div>
                        <div className='icon-container p-2 overflow-hidden shadow-2xl rounded-full absolute bottom-[10%] right-[52%]'><Image className='  ' height={50} src={python_icon} alt='html' />
                        </div>
                        <div className='icon-container p-2 overflow-hidden shadow-2xl rounded-full absolute bottom-[30%] left-[26%]'><Image className='  ' height={45} src={bootstrap_icon} alt='html' />
                        </div>
                        <div className='icon-container  p-2 overflow-hidden shadow-2xl rounded-full absolute bottom-[28%] right-[16%]'><Image className='  ' height={70} src={android} alt='html' />
                        </div>
                        <div className='icon-container   p-2 overflow-hidden shadow-2xl rounded-full absolute top-[25%] right-[40%]'><Image className='  ' height={100} src={react_icon} alt='html' />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )

}

export default Achievments