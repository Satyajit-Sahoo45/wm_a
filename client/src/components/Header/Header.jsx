import React, { useState } from 'react';
import NavLinks from './NavLinks';
import { Menu, X } from "lucide-react"

const Header = () => {
    const [nav, setNav] = useState(false);

    return (
        <nav className="bg-white">
            <div className="flex items-center font-medium justify-around">
                <div className="z-50 p-5 md:w-auto w-full flex justify-between">
                    <img src="./logo.png" alt="logo" className="md:cursor-pointer h-9" />
                    <div className="text-3xl md:hidden cursor-pointer" onClick={() => setNav(!nav)}>
                        {nav ? <X size={20} /> : <Menu size={20} />}
                    </div>
                </div>
                <ul className="md:flex hidden uppercase items-center gap-8 ">
                    <NavLinks />
                </ul>
                {/* Mobile nav */}
                <ul
                    className={`
        md:hidden bg-white fixed w-[80%] top-0 overflow-y-auto bottom-0 py-24 pl-4 z-50
        duration-500 ${nav ? "left-0" : "left-[-100%]"}
        `}
                >
                    <NavLinks />
                </ul>
            </div>
        </nav >
    );
};

export default Header;
