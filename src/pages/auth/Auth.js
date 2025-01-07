import { Link, NavLink } from "react-router-dom";
import { IoIosClose } from "react-icons/io";
import Layout from "../layout/Layout";
import { IoImage } from "react-icons/io5";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const Auth = ({children}) => {
    return (
        <Layout>
            <div className="flex justify-end items-center px-3 py-4">
                <Link to="/" className="text-4xl">
                <IoIosClose/>
                </Link>
            </div>
            <div className="flex justify-center items-center py-3 px-2">
                <div className="w-[100px] h-[100px] flex justify-center items-center text-3xl bg-gray-200 text-gray-500 rounded-full">
                    <IoImage/>
                </div>
            </div>
            <div className="w-full flex justify-center items-center gap-20 mt-7">
                <NavLink className="nav-link text-center rounded-t" to="/register">S'inscrire</NavLink>
                <NavLink className="nav-link text-center rounded-t" to="/login">Se connecter</NavLink>
            </div>
            {children}
            <div className="footer flex flex-col items-center">
                <div className="w-[70%] my-4 rounded relative flex justify-center">
                    <span className="absolute w-full h-[2px] bg-gray-200 left-0 top-[50%] translate-y-[-50%]"></span>
                    <p className="text-center relative bg-white py-2 px-6 m-auto">Acces en un clic</p>
                </div>
                <div className="flex gap-5 justify-center items-center py-4">
                    <FaGoogle size={25}/>
                    <FaFacebookSquare size={25}/>
                </div>
                <p className="text-center">En continuant vous avez lu notre Polituque de confidentialite et terme d'utilisation</p>
            </div>
        </Layout>
    );
}

export default Auth;
