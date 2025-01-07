import { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { IoArrowBack } from 'react-icons/io5';

const SearchBar = () => {
    const [hasScrolled, setHasScrolled] = useState(false);
    const [isSearchActive, setIsSearchActive] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [searchHistory, setSearchHistory] = useState([]);

    useEffect(() => {
        const handleScroll = () => {
            setHasScrolled(window.scrollY > 0);
        };

        // Charger l'historique de recherche
        const loadSearchHistory = () => {
            const history = localStorage.getItem('searchHistory');
            if (history) {
                setSearchHistory(JSON.parse(history));
            }
        };

        loadSearchHistory();
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleSearchFocus = () => {
        // Activer d'abord le fond sombre
        setIsSearchActive(true);
        document.body.style.overflow = 'hidden';
    };

    const handleBackClick = () => {
        setIsSearchActive(false);
        setSearchValue('');
        document.body.style.overflow = 'auto';
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchValue.trim()) {
            const newHistory = [searchValue, ...searchHistory.filter(item => item !== searchValue)].slice(0, 5);
            setSearchHistory(newHistory);
            localStorage.setItem('searchHistory', JSON.stringify(newHistory));
        }
    };

    const handleSuggestionClick = (suggestion) => {
        setSearchValue(suggestion);
        // Implémenter la logique de recherche ici
    };

    const borderClass = (hasScrolled || isSearchActive) ? 'border-black' : 'border-[#cccccc]';
    const inputClass = (hasScrolled || isSearchActive) ? 'bg-white text-black placeholder-gray-400' : 'bg-white text-black placeholder-gray-500';
    const iconClass = (hasScrolled || isSearchActive) ? 'text-black' : 'text-gray-400';
    const containerClass = isSearchActive ? 'fixed top-0 left-0 w-full bg-white z-50 px-4 py-3' : 'flex items-center w-full max-w-[640px] px-1 md:px-6 lg:px-8';
    
    return (
        <>
            <div className={`${isSearchActive ? 'fixed inset-0 bg-white z-50' : 'contents'}`}>
                <form onSubmit={handleSubmit} className={`transition-all duration-300 ${containerClass}`}>
                    <div className="relative w-full flex items-center gap-2 mt-1">
                        {isSearchActive && (
                            <button
                                type="button"
                                onClick={handleBackClick}
                                className="p-2 focus:outline-none"
                                aria-label="Retour"
                            >
                                <i className="fi fi-br-angle-left w-6 h-6"></i>
                            </button>
                        )}
                        <div className={`relative w-full ${!isSearchActive ? '-translate-y-3.5' : ''}`}>
                            <input
                                type="text"
                                value={searchValue}
                                onChange={(e) => setSearchValue(e.target.value)}
                                onFocus={handleSearchFocus}
                                placeholder="Rechercher"
                                className={`w-full h-10 pl-4 border ${borderClass} ${inputClass} border-1 rounded-full focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-colors duration-300`}
                                aria-label="Rechercher"
                            />
                            <button
                                type="submit"
                                className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${iconClass} focus:outline-none transition-colors duration-300`}
                                aria-label="Lancer la recherche"
                            >
                                <FaSearch className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {isSearchActive && (
                        <div className="fixed left-0 right-0 top-16 bottom-0 bg-white z-40 px-4 overflow-y-auto animate-fadeIn">
                            <div className="py-4">
                                <h2 className="text-lg font-semibold mb-4">Recherches récentes</h2>
                                {searchHistory.length > 0 ? (
                                    <ul className="space-y-2">
                                        {searchHistory.map((item, index) => (
                                            <li 
                                                key={index}
                                                className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg cursor-pointer"
                                                onClick={() => handleSuggestionClick(item)}
                                                role="button"
                                                tabIndex={0}
                                            >
                                                <FaSearch className="w-4 h-4 text-gray-400" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="text-gray-500">Aucune recherche récente</p>
                                )}
                            </div>
                        </div>
                    )}
                </form>
            </div>
            {isSearchActive && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 z-30 animate-fadeIn"
                    onClick={handleBackClick}
                    role="button"
                    tabIndex={-1}
                    aria-label="Fermer la recherche"
                />
            )}
        </>
    );
}

export default SearchBar;
