"use client";
import React from 'react';
import Image from 'next/image';
import contact_img from './Assests/contactme.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

const ContactForm: React.FC = () => {
    return (
        <div id='contact' className='w-[100%] px-4 m-2 contact_bg mt-10'>
            <div className='text-sky-900 text-3xl font-semibold flex justify-start items-start px-4'>Contact Me :</div>
            <div className="bg-white mt-3 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 lg:divide-x-2 p-6 m-1">
                <div className='p-4'>
                    <div className='grid xl:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 gap-2'>
                        <a href="tel:+8827957250">
                            <button className='min-w-full min-h-24  shadow-xl font-medium hover:text-sky-900 rounded-tl-xl bg-slate-100 text-gray-700 rounded-xl hover:bg-gray-100 transition-colors duration-200 icon-container_s'>
                                <FontAwesomeIcon icon={faPhone} className="mx-1 w-6 text-green-500" />Call now
                            </button>
                        </a>
                        <a href="mailto:sumitofficial1602@gmail.com">
                            <button className='min-w-full min-h-24  shadow-xl font-medium hover:text-sky-900 rounded-tl-xl bg-slate-100 text-gray-700 rounded-xl hover:bg-gray-100 transition-colors duration-200 icon-container_s'>
                                <FontAwesomeIcon icon={faEnvelope} className="mx-1 w-6 text-blue-500" />Mail
                            </button>
                        </a>
                        <a href="https://wa.me/+918827957250?text=Hi%20there!%20I%20recently%20visited%20your%20website%20and%20would%20love%20to%20provide%20some%20feedback.%20When%20would%20be%20a%20good%20time%20to%20discuss%3F
" target="_blank" rel="noopener noreferrer">
                            <button className='min-w-full min-h-24 shadow-xl font-medium hover:text-sky-900 rounded-tl-xl bg-slate-100 text-gray-700 rounded-xl hover:bg-gray-100 transition-colors duration-200 icon-container_s'>
                                <FontAwesomeIcon icon={faWhatsapp} className="mx-1 w-6 text-green-500" />WhatsApp
                            </button>
                        </a>

                        <a href="https://www.linkedin.com/in/-patidarsumit-0x/" target="_blank" rel="noopener noreferrer">
                            <button className='min-w-full min-h-24  shadow-xl font-medium hover:text-sky-900 rounded-tl-xl bg-slate-100 text-gray-700 rounded-xl hover:bg-gray-100 transition-colors duration-200 icon-container_s'>
                                <FontAwesomeIcon icon={faLinkedin} className="mx-1 w-6 text-blue-600" />LinkedIn
                            </button>
                        </a>
                        <a href="https://github.com/sumitpatidar700" target="_blank" rel="noopener noreferrer">
                            <button className='min-w-full min-h-24  shadow-xl font-medium hover:text-sky-900 rounded-tl-xl bg-slate-100 text-gray-700 rounded-xl hover:bg-gray-100 transition-colors duration-200 icon-container_s'>
                                <FontAwesomeIcon icon={faGithub} className="mx-1 w-6 text-gray-900" />GitHub
                            </button>
                        </a>
                        <a href="https://www.instagram.com/_patidarsumit_0x/" target="_blank" rel="noopener noreferrer">
                            <button className='min-w-full min-h-24  shadow-xl font-medium hover:text-sky-900 rounded-tl-xl bg-slate-100 text-gray-700 rounded-xl hover:bg-gray-100 transition-colors duration-200 icon-container_s'>
                                <FontAwesomeIcon icon={faInstagram} className="mx-1 w-6 text-pink-500" />Instagram
                            </button>
                        </a>
                    </div>
                </div>
                <div className='flex justify-center items-center '>
                    <Image src={contact_img} width={400} className='' alt='img' />
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
