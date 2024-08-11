import React, { createContext, useState, useContext } from 'react';

const SliderContext = createContext();

export const SliderProvider = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const value = {
        isModalOpen,
        setIsModalOpen,
    };

    return (
        <SliderContext.Provider value={value}>
            {children}
        </SliderContext.Provider>
    );
};

export const useSliderContext = () => {
    return useContext(SliderContext);
};