import { createContext, useState, useRef } from 'react';

export const MyContext = createContext();

const MyProvider = ({ children }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [lightTheme, setLightTheme] = useState(true);
    return (
        <MyContext.Provider value={{ modalIsOpen, setModalIsOpen, lightTheme, setLightTheme }}>
            {children}
        </MyContext.Provider>
    );
};

export default MyProvider;
