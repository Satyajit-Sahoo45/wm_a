import { FaInstagramSquare, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { MapPin, Phone } from 'lucide-react';



export const Footer = () => {
    return (
        <footer className="relative bg-gray-200 pt-8 pb-6">
            <div className="container mx-auto px-4">
                <div className="flex justify-center items-center md:justify-between w-full flex-col md:flex-row md:px-10">
                    <div className="w-full px-4 ">
                        <div className="text-sm fonat-semibold text-blueGray-700 flex flex-col gap-4">
                            <div className="flex gap-2 items-center">
                                <MapPin size={25} />
                                <span className="font-bold">
                                    115 B Mittal Court,
                                    <br />
                                    Nariman Point, Mumbai 400 021
                                </span>
                            </div>
                            <div className="flex gap-2">
                                <Phone size={25} />
                                <span className="font-bold">
                                    +91 2222333345 | +91 9999333309
                                </span>
                            </div>
                        </div>
                        <div className="mt-6 lg:mb-0 mb-6 flex">
                            <button className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                <FaTwitter size={18} className="fab fa-twitter text-sky-400" />
                            </button>
                            <button className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                <FaFacebook className="fab fa-facebook-square text-sky-700" />
                            </button>
                            <button className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                <FaInstagramSquare className="fab fa-instagram text-blue-800" />
                            </button>
                            <button className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                <FaLinkedin className="fab fa-linkedin text-sky-900" />
                            </button>
                        </div>
                    </div>
                    <div className="w-full flex md:justify-end items-center px-4">
                        <img src="./logo.png" alt="Logo" className="h-14" />
                    </div>
                </div>
                <hr className="my-6 border-blueGray-300" />
                <div className="flex flex-wrap items-center md:justify-between justify-center">
                    <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                        <div className="text-sm text-gray-500 font-semibold py-1">
                            © <span id="get-current-year">2021</span>
                            <span className="text-blueGray-500 hover:text-gray-800" target="_blank"> Skin & You Clinic. All rights reserved. </span>

                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}