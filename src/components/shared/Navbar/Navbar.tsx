"use client"
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import logo from '@/assets/logo.jpeg'

type NavbarProps = {
    session: any;
};

const NavBarMenus = [
    { name: "Home", route: "/" },
    { name: "Our menus", route: "/" },
    { name: "Meal Plans", route: "/" },
    { name: "Catering", route: "/" },
    { name: "How it work", route: "/" },
    { name: "Testimonial", route: "/" },
    { name: "FAQ", route: "/" },
];


const Navbar = ({ session }: NavbarProps) => {
    const [isMobile, setIsMobile] = useState(false);
    console.log(session);
    return (
        <div className='sticky top-0 z-40 '>

            {/* Top nav bar */}
            <div className="bg-[#FBB64E] text-white text-center hidden md:block py-2">
                <p>%% Free shipping on all orders %%</p>
            </div>




            <div className="bg-white shadow-md py-5 text-gray-600 px-5 ">
                <header className="max-w-6xl  mx-auto flex justify-between items-center z-50 ">
                    {/* //* Menu Icons for mobile */}
                    <div className="lg:hidden">
                        {isMobile ? (
                            <div onClick={() => setIsMobile(!isMobile)}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6 md:text-[18px] "
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                    />
                                </svg>
                            </div>
                        ) : (
                            <div onClick={() => setIsMobile(!isMobile)}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6 md:text-[18px] "
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                    />
                                </svg>
                            </div>
                        )}
                    </div>
                    {/* //*Company logo */}
                    <div>
                        <Link href="/" className="cursor-pointer">
                            <Image
                                src={logo} alt="logo" width={50} height={5} className=" w-16 h-16 bg-white rounded-full "
                            />
                        </Link>
                    </div>
                    <nav
                        className={
                            isMobile
                                ? "w-full lg:w-fit lg:static absolute top-[60px] left-0 lg:bg-none bg-[#ECF5FF] transition-all duration-500 lg:z-0 -z-50"
                                : "w-full lg:w-fit lg:static absolute top-[-550px] left-0 transition-all duration-500 lg:z-0 -z-50"
                        }
                    >
                        {/* design for large device */}
                        <div className="hidden lg:block">
                            <ul className="flex justify-end items-center gap-2 lg:flex-row flex-col lg:py-0 py-10">
                                {NavBarMenus.map((menu, index) => (
                                    <Link key={index} href={menu.route}>
                                        <li
                                            className={`${index === 6 ? "" : "border-e-2 border-gray-400"
                                                } ${index === 0 && 'text-green-500'} text-xl font-semibold lg:mb-0 mb-5 cursor-pointer  group relative px-3 md:text-base hover:text-green-500`}
                                        >
                                            {menu.name}
                                        </li>
                                    </Link>


                                ))}



                            </ul>
                        </div>
                        {/* mobile responsive */}
                        <div className="block lg:hidden">
                            <ul className="flex justify-end items-center gap-2 lg:flex-row flex-col lg:py-0 py-10 bg-white border-b border-secondary">
                                {NavBarMenus.map((menu, index) => (
                                    <li
                                        key={index}
                                        onClick={() => setIsMobile(!isMobile)}
                                        className="w-full lg:w-fit text-center py-2 cursor-pointer group text-sm relative md:text-[18px] "
                                    >
                                        <Link href={menu.route}>{menu.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </nav>

                    {/* //*More nav Links */}
                    <div className="">
                        <ul className="flex justify-end items-center gap-2 flex-row py-0">
                            <Link href='/login'>
                                <li className="cursor-pointer text-sm group relative px-2 md:text-[18px] ">
                                    <Button variant={'secondary'}>
                                        Log in
                                    </Button>
                                </li>
                            </Link>
                            <Link href="/register">
                                <li className="cursor-pointer text-sm font-semibold group relative px-2 md:text-[18px] ">
                                    <Button >
                                        Sign up
                                    </Button>
                                </li>
                            </Link>
                        </ul>
                    </div>
                </header>
            </div>
        </div>
    );
};

export default Navbar;