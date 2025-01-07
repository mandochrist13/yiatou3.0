import NavLink from './NavLink';

const NavLinks = () => {
    return (
        <div className="w-full overflow-x-auto scrollbar-hide -translate-y-2 relative">
            <div className="absolute left-0 top-0 bottom-0 w-8 pointer-events-none" />
            <nav 
                className="flex whitespace-nowrap py-1 text-[#333333] font-normal max-w-screen-xl mx-auto touch-pan-x"
                aria-label="Navigation principale"
                role="navigation"
            >
                <NavLink 
                    to="/" 
                    label="Explorer" 
                    className="w-auto px-2" 
                />
                <NavLink 
                    to="/femme" 
                    label="Femme" 
                    className="w-auto px-2" 
                />
                <NavLink 
                    to="/beaute" 
                    label="Beauté" 
                    className="w-auto px-2" 
                />
                <NavLink 
                    to="/electronique" 
                    label="Électronique" 
                    className="w-auto px-2" 
                />
                <NavLink 
                    to="/homme" 
                    label="Homme" 
                    className="w-auto px-2" 
                />
            </nav>
            <div className="absolute right-0 top-0 bottom-0 w-8 pointer-events-none" />
        </div>
    );
}

export default NavLinks;
