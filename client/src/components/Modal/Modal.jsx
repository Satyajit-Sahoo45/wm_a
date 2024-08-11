import React, { useState, useEffect, useRef } from "react";
import { useSliderContext } from "../../context/SliderContext";
import { X } from "lucide-react";
import * as Yup from "yup";
import { useFormik } from "formik";
import axios from "axios";
import toast from "react-hot-toast";

const schema = Yup.object().shape({
    name: Yup.string()
        .required("Please enter username"),
    email: Yup.string()
        .email("Invalid email!")
        .required("Please enter your email!"),
    phone: Yup.string().required("Please enter your password!").min(10),
    concern: Yup.string().required("Please write your concern"),
});

export const Modal = () => {
    const { isModalOpen, setIsModalOpen } = useSliderContext();
    const [loader, setLoader] = useState(false)

    const formik = useFormik({
        initialValues: { name: "", email: "", phone: "", concern: "" },
        validationSchema: schema,
        onSubmit: async ({ name, email, phone, concern }) => {
            setLoader(true)
            try {
                await axios.post(`${process.env.REACT_APP_BACKEND_API_URL}/book`,
                    { data: { name, email, phone, concern } }
                )
                toast.success('Successfully Booked!')
            } catch (error) {
                console.log(error.code)
            } finally {
                setLoader(false)
            }
        },
    });

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const modalRef = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                closeModal();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const { errors, touched, values, handleChange, handleSubmit } = formik;

    return (
        isModalOpen && (
            <>
                <div className="fixed inset-0 bg-gray-500 bg-opacity-50 z-40"></div>
                <div
                    ref={modalRef}
                    className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-700 p-4 rounded-lg rounded-tr-2xl w-full max-w-xl sm:max-w-lg md:max-w-lg max-h-fit shadow-lg transition-all duration-500 ease-in-out scale-100 opacity-100 overflow-y-auto z-50"
                >
                    <button
                        type="button"
                        onClick={closeModal}
                        className="absolute top-0 right-0 bg-gray-600 cursor-pointer shadow-xl pb-2 rounded-bl-full text-white outline-none border-0 h-10 w-10 flex justify-center items-center"
                    >
                        <X size={20} />
                    </button>
                    <h2 className="text-lg mb-4 text-center font-bold block text-white">Book Appointment</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 gap-4">
                            <div className="mb-2">
                                <label className="block mb-2 text-sm font-medium text-white">User Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={values.name}
                                    onChange={handleChange}
                                    className="text-sm rounded-lg focus:ring-blue-500 focus:border-none outline-none block w-full p-2.5 bg-gray-600 placeholder-gray-400 text-white"
                                />
                                {errors.name && touched.name && (
                                    <span className="text-red-500 pt-2 block">{errors.name}</span>
                                )}
                            </div>
                            <div className="mb-2">
                                <label className="block mb-2 text-sm font-medium text-white">User Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    className="text-sm rounded-lg focus:ring-blue-500 focus:border-none outline-none block w-full p-2.5 bg-gray-600 placeholder-gray-400 text-white"
                                />
                                {errors.email && touched.email && (
                                    <span className="text-red-500 pt-2 block">{errors.email}</span>
                                )}
                            </div>
                            <div className="mb-2">
                                <label className="block mb-2 text-sm font-medium text-white">User Phone</label>
                                <input
                                    type="text"
                                    name="phone"
                                    value={values.phone}
                                    onChange={handleChange}
                                    className="text-sm rounded-lg focus:ring-blue-500 focus:border-none outline-none block w-full p-2.5 bg-gray-600 placeholder-gray-400 text-white"
                                />
                                {errors.phone && touched.phone && (
                                    <span className="text-red-500 pt-2 block">{errors.phone}</span>
                                )}
                            </div>
                            <div className="mb-2">
                                <label className="block mb-2 text-sm font-medium text-white">Your Concern</label>
                                <textarea
                                    name="concern"
                                    value={values.concern}
                                    onChange={handleChange}
                                    className="text-sm rounded-lg focus:ring-blue-500 focus:border-none outline-none block w-full p-2.5 bg-gray-600 placeholder-gray-400 text-white"
                                />
                                {errors.concern && touched.concern && (
                                    <span className="text-red-500 pt-2 block">{errors.concern}</span>
                                )}
                            </div>

                            <div className="flex justify-end mt-4">
                                <button
                                    type="submit"
                                    className="bg-blue-600 p-2 rounded-md text-white"
                                >
                                    {loader ? "Wait..." : "Confirm Booking"}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </>
        )
    );
};
