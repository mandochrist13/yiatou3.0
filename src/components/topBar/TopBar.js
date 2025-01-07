import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import TopBarLayout from "../../pages/layout/TopBarLayout";
import SmsNotif from "../notifcation/SmsNotif";
import SearchBar from "../search/SearchBar";
import NavLinks from "./NavLinks";

const TopBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const isHomePage = location.pathname === "/";

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <TopBarLayout>
            <div className={`flex flex-col items-center w-full px-2 space-y-0 transition-all duration-300 ease-in-out ${
                isHomePage 
                    ? `${isScrolled ? 'pt-4' : 'pt-2'}`
                    : 'pt-6'
            }`}>
                {isHomePage && (
                    <div className={`flex items-center px-1 justify-between w-full mb-1 transition-all duration-300 ease-in-out ${
                        isScrolled ? 'max-h-0 opacity-0 scale-95 transform' : 'max-h-12 opacity-100 scale-100 transform'
                    }`}>
                        <img 
                            src="/img/logo/logo.png" 
                            alt="Logo de l'entreprise" 
                            className="h-[38px] w-auto transition-transform duration-300" 
                        />
                        <SmsNotif />
                    </div>
                )}
                <SearchBar />
                <NavLinks />
            </div>
        </TopBarLayout>
    );
}

export default TopBar;
