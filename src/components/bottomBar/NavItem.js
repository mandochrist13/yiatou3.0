import { NavLink } from "react-router-dom";

const NavItem = ({children,to ="/",icon = "bi-shop",iconSec = "bi-shop"}) => {
    const current = window.location.pathname === to;
    
    return (
        <div>
            <NavLink to={to} className="flex [&.active]:text-red-600 font-medium text-[13px] flex-col items-center items-bar">
            <i className={`fi ${current ? iconSec : icon} text-xl`}></i>
                {children}
            </NavLink>
        </div>
    );
}

export default NavItem;
