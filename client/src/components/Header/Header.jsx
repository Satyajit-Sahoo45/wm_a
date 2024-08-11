import React, { useState } from 'react';
import NavLinks from './NavLinks';
import { Menu, SearchIcon, X } from "lucide-react";

const Header = () => {
    const [nav, setNav] = useState(false);

    return (
        <nav className="bg-white">
            <div className="flex items-center justify-between p-5 w-full">
                {/* Logo and Hamburger Icon */}
                <div className="flex items-center justify-between md:w-auto w-full">
                    <img src="./logo.png" alt="logo" className="h-9 cursor-pointer" />
                    <div className="text-3xl md:hidden cursor-pointer ml-auto" onClick={() => setNav(!nav)}>
                        {nav ? <X size={20} /> : <Menu size={20} />}
                    </div>
                </div>

                {/* Desktop Nav Links */}
                <ul className="hidden md:flex items-center gap-8 uppercase">
                    <NavLinks />
                </ul>

                <div className="hidden md:flex ">
                    <div className="relative w-full">
                        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Search branch name..." required />
                    </div>
                    <button type="submit" class="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <SearchIcon className='w-4 h-4' />
                        <span class="sr-only">Search</span>
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            <ul
                className={`md:hidden fixed top-0 left-0 w-[80%] h-full bg-white overflow-y-auto py-24 pl-4 z-50 transition-transform duration-500 ${nav ? "translate-x-0" : "-translate-x-full"} p-2`}
            >
                <NavLinks />
                <div className='flex'>
                    <div className="relative w-full">
                        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Search branch name..." required />
                    </div>
                    <button type="submit" class="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <SearchIcon className='w-4 h-4' />
                        <span class="sr-only">Search</span>
                    </button>
                </div>
            </ul>
        </nav>
    );
};

export default Header;
