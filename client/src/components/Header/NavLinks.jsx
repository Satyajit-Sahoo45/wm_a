import React, { useState } from "react";
import { links } from "./Mylinks";
import { ChevronDown, ChevronUp } from 'lucide-react';


const NavLinks = () => {
    const [heading, setHeading] = useState("");
    const [subHeading, setSubHeading] = useState("");

    return (
        <>
            {links.map((link, index) => (
                <div key={index}>
                    <div className="relative group min-w-max">
                        <span
                            className={`py-3 text-sm relative text-gray-500 hover:text-black hover:font-bold cursor-pointer md:after:block md:after:content-[''] md:after:absolute md:after:h-[1px] md:after:bg-[#292929] md:after:w-full md:after:scale-x-0 md:after:hover:scale-x-100 md:after:transition md:after:duration-500 md:after:origin-center md:block flex justify-between`}
                            onClick={() => {
                                heading !== link.name ? setHeading(link.name) : setHeading("");
                                setSubHeading("");
                            }}
                        >
                            <span className={`${heading === link.name ? "text-black font-bold" : ""}`}>
                                {link.name}
                            </span>
                            {
                                link.submenu && (
                                    <span className="text-xl md:hidden">
                                        {heading === link.name
                                            ? <ChevronUp />
                                            : <ChevronDown />
                                        }
                                    </span>
                                )
                            }
                        </span>

                        {link.submenu && (
                            <div>
                                {/* Desktop */}
                                <div className="absolute top-10 hidden group-hover:md:block hover:md:block min-w-max z-50">
                                    <div className="py-3">
                                        <div className="w-4 h-4 left-3 absolute mt-1 bg-white rotate-45"></div>
                                    </div>
                                    <div className="bg-white px-4 py-1 flex flex-wrap gap-10">
                                        {link.sublinks.map((mysublinks, subIndex) => (
                                            <div key={subIndex}>
                                                {mysublinks.Head &&
                                                    <h1 className="text-sm font-semibold mt-1">
                                                        {mysublinks.Head}
                                                        <hr />
                                                    </h1>
                                                }
                                                {mysublinks.sublink.map((slink, slinkIndex) => (
                                                    <li
                                                        key={slinkIndex}
                                                        className="text-xs text-gray-600 my-1.5 hover:bg-gray-300 hover:scale-105 hover:px-2 hover:py-1 transition-all ease-out hover:rounded-lg cursor-pointer
                                                        "
                                                    >
                                                        <a href={slink.link} className="hover:text-primary">
                                                            {slink.name}
                                                        </a>
                                                    </li>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Mobile */}
                                {heading === link.name && (
                                    <div className="md:hidden">
                                        {link.sublinks.map((mysublinks, subIndex) => (
                                            <div key={subIndex}>
                                                <h1
                                                    onClick={() =>
                                                        subHeading !== mysublinks.Head
                                                            ? setSubHeading(mysublinks.Head)
                                                            : setSubHeading("")
                                                    }
                                                    className="py-1 pl-7 font-semibold flex justify-between items-center text-sm"
                                                >
                                                    {mysublinks.Head}
                                                    {
                                                        mysublinks.Head && (
                                                            <span className="text-xl">
                                                                {subHeading === mysublinks.Head
                                                                    ? <ChevronUp />
                                                                    : <ChevronDown />
                                                                }
                                                            </span>
                                                        )
                                                    }
                                                </h1>
                                                {subHeading === mysublinks.Head && (
                                                    <div>
                                                        {mysublinks.sublink.map((slink, slinkIndex) => (
                                                            <li
                                                                key={slinkIndex}
                                                                className="py-3 pl-14 text-xs text-gray-600 hover:bg-gray-300 hover:scale-105 hover:px-2 hover:py-1 transition-all ease-out hover:rounded-lg cursor-pointer"
                                                            >
                                                                <a href={slink.link} className="hover:text-primary">
                                                                    {slink.name}
                                                                </a>
                                                            </li>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </>
    );
};

export default NavLinks;