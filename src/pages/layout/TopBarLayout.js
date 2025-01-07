import { useState, useEffect } from 'react';


const TopBarLayout = ({ children }) => {
   const [isScrolled, setIsScrolled] = useState(false);


   useEffect(() => {
       const handleScroll = () => {
           setIsScrolled(window.scrollY > 0);
       };


       window.addEventListener('scroll', handleScroll);


       return () => {
           window.removeEventListener('scroll', handleScroll);
       };
   }, []);


   return (
       <>
           <div className={`w-full z-[100] fixed left-0 top-0 transition-all duration-300 ${isScrolled ? 'shadow bg-white' : 'bg-white'}`}>
               <div className="w-full max-w-[640px] mx-auto">
                   {children}
               </div>
           </div>
           {/* <div className="h-[50px] top-0 w-full"></div>  */}
       </>
   );
}


export default TopBarLayout;