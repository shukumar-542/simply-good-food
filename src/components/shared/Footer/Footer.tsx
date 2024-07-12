import React from 'react';
import footer from '../../../assets/logo.jpeg'
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { FaFacebook } from 'react-icons/fa';
import { FaLinkedin, FaSquareInstagram, FaSquareXTwitter } from 'react-icons/fa6';
const Footer = () => {
    return (
        <div>
            <div className='p-12 bg-gray-100'>
                <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 justify-between gap-5'>
                    <div className='grid grid-cols-1 lg:grid-cols-3 items-center justify-items-center '>

                        <Image src={footer} className='bg-gray-100 rounded-full h-32' height={80} width={100} alt='Logo' />

                        <div>
                            <ul className='space-y-5 text-2xl text-gray-600'>
                                <li>Home</li>
                                <li>Our Menus</li>
                                <li>Meal Plans</li>
                                <li>Catering</li>
                            </ul>
                        </div>
                        <div>
                            <ul className='space-y-5 text-2xl text-gray-600'>
                                <li>How it work</li>
                                <li>Testimonials</li>
                                <li>FAQ</li>
                            </ul>
                        </div>
                    </div>
                    <div className=' text-center'>
                        <h1 className='text-gray-600 text-2xl py-4'>Subscribed To Our Email Alerts</h1>
                        <div className='flex  items-center gap-5  w-52 lg:w-96 text-center  mx-auto'>
                            <Input placeholder='Enter Your Email.' />
                            <Button>Subscribed</Button>
                        </div>
                        <div className='flex gap-5 items-center justify-start w-52 lg:w-96 mx-auto pt-5'>
                            <FaFacebook size={35} className='text-blue-700' />
                            <FaSquareInstagram size={35} className='text-[#7B3EC2]' />
                            <FaLinkedin size={35} className='text-blue-800' />
                            <FaSquareXTwitter size={35} />
                        </div>
                    </div>

                </div>

            </div>
            <div className='bg-black py-5 text-center'>
                <p className='text-white'>Copyright © 2024 - All right reserved by Simply Good Food</p>
            </div>
        </div>
    );
};

export default Footer;