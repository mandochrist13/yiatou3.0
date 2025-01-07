import { Link } from "react-router-dom";

const SmsNotif = () => {
    return (
        <Link to="/messages" className="p-3 relative">
            <span className="absolute bg-red-600 text-white px-2 rounded-full right-0 top-0 text-[12px]">0</span>
            <i class="fi fi-rr-comment-dots text-xl"></i>
        </Link>
    );
}

export default SmsNotif;
