import { Link } from "react-router-dom";
import ButtonWhatsapp from "../Buttons/ButtonWhatsapp";

const HomeWhatsappSection = () => {
    return (
        <div className="px-3 py-5 bg-blue-50">
            <div className="w-full flex flex-col gap-3 justify-center items-center">
                <h2 className="text-xl font-medium">Tu as des question ?</h2>
                <Link to="#" className="text-center">Cliques ici pour lire motre FAQ ou</Link>
            </div>
            <br/>
            <ButtonWhatsapp>
                ontactes-nous
            </ButtonWhatsapp>
        </div>
    );
}

export default HomeWhatsappSection;
