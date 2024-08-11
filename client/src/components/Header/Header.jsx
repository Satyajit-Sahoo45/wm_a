import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import { links } from './Mylinks';

const Header = () => {
    const [nav, setNav] = useState(false);
    const [submenuPosition, setSubmenuPosition] = useState({});
    const submenuRef = useRef(null);

    const handleNav = () => {
        setNav(!nav);
    };

    const adjustSubmenuPosition = useCallback(() => {
        if (submenuRef.current) {
            const submenu = submenuRef.current;
            const submenuRect = submenu.getBoundingClientRect();
            const viewportWidth = window.innerWidth;

            // Calculate available space on the right side
            const spaceRight = viewportWidth - submenuRect.right;
            if (spaceRight < 0) {
                // If there's not enough space on the right, position submenu to the left
                setSubmenuPosition({
                    left: 'auto',
                    right: '0',
                });
            } else {
                // Otherwise, position submenu normally
                setSubmenuPosition({
                    left: '0',
                    right: 'auto',
                });
            }
        }
    }, []);

    useEffect(() => {
        // Adjust submenu position when the component mounts or nav state changes
        adjustSubmenuPosition();
        window.addEventListener('resize', adjustSubmenuPosition);
        return () => window.removeEventListener('resize', adjustSubmenuPosition);
    }, [adjustSubmenuPosition]);

    return (
        <header className="flex justify-between items-center py-4 px-8 bg-white shadow-md">
            <div className="flex items-center">
                <img src="./logo.png" alt="Logo" className="h-12" />
            </div>
            <div onClick={handleNav} className="md:hidden cursor-pointer">
                {nav ? <X size={20} /> : <Menu size={20} />}
            </div>

            <nav className={`fixed md:static top-0 ${nav ? 'left-0' : '-left-full'} w-[60%] md:w-auto h-full md:h-auto bg-white md:bg-transparent border-r md:border-none border-gray-900 transition-all duration-300 ease-in-out flex flex-col md:flex-row items-start md:items-center p-8 md:p-0 space-y-4 md:space-y-0 md:space-x-6 z-50`}>
                {links.map((link, index) => (
                    <div key={index} className="relative group">
                        <a
                            href={link.submenu ? "/" : link.sublinks?.[0]?.sublink?.[0]?.link}
                            className="relative text-gray-600 hover:text-black block cursor-pointer"
                            onClick={handleNav}
                        >
                            {link.name}
                        </a>
                        {link.submenu && (
                            <div ref={submenuRef} className="absolute top-10 hidden group-hover:md:block hover:md:block min-w-max" style={submenuPosition}>
                                <div className="py-3">
                                    <div className="w-4 h-4 left-3 absolute mt-1 bg-white rotate-45"></div>
                                </div>
                                <div className="bg-white px-4 flex flex-wrap w-full gap-10">
                                    {link.sublinks.map((mysublinks) => (
                                        <div key={mysublinks}>
                                            {
                                                mysublinks.Head && (
                                                    <h1 className="text-sm pt-3 font-semibold text-black border-b-[1.5px] border-b-black text-start">
                                                        {mysublinks.Head}
                                                    </h1>
                                                )
                                            }
                                            {mysublinks.sublink.map((slink) => (
                                                <li key={slink.name} className="text-xs text-gray-600 my-1.5 hover:bg-gray-300 hover:scale-105 hover:px-2 hover:py-1 transition-all ease-out hover:rounded-lg">
                                                    <a
                                                        href="/"
                                                        className="hover:text-primary"
                                                    >
                                                        {slink.name}
                                                    </a>
                                                </li>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </nav>
        </header>
    );
};

export default Header;
