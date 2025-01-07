import { Link, useLocation } from 'react-router-dom';

const NavLink = ({ to, label, className }) => {
    const location = useLocation();
    const isActive = location.pathname === to;

    return (
        <Link
            to={to}
            className={`
                ${className}
                relative
                inline-flex
                items-center
                justify-center
                transition-all
                duration-200
                transform
                active:scale-95
                ${isActive 
                    ? 'font-bold text-black after:absolute after:bottom-[-4px] after:left-1/2 after:w-1/2 after:-translate-x-1/2 after:h-0.5 after:bg-black after:rounded-full' 
                    : 'text-gray-600 hover:text-black'
                }
            `}
            role="menuitem"
            tabIndex={0}
            aria-current={isActive ? 'page' : undefined}
        >
            {label}
        </Link>
    );
};

export default NavLink;
