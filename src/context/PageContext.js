import { createContext, useContext, useState } from 'react';

const PageContext = createContext();

export const PageProvider = ({ children }) => {
    const [activePage, setActivePage] = useState('home');
    
    const handlePageChange = (page) => {
        setActivePage(page);
    };

    return (
        <PageContext.Provider value={{ activePage, handlePageChange }}>
            {children}
        </PageContext.Provider>
    );
};

export const usePage = () => useContext(PageContext); 