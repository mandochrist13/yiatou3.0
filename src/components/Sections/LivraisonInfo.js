import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';

const LivraisonInfo = ({onOpenLivraison}) => {
    const openModalLivraison = () =>{
        try {
            if(onOpenLivraison){
                onOpenLivraison()
            }
        } catch (error) {
            console.log("onClose doit etre une fonction.");
        }
    }
    return (
        <div className='bg-white px-4 py-4 flex flex-col gap-2 items-start translate-y-8 border-b-2 border-gray-100'>
            <h2 className='text-base font-medium'>Informations de livraison</h2>
            <div className="grid grid-cols-[1fr_30px] w-full">
                <div className="flex flex-col gap-0.5">
                    <p className="font-medium text-sm text-gray-700">Monsieur Dave</p>
                    <p className="text-sm text-gray-700 font-medium">Beausejour - Libreville - 066612236</p>
                </div>
                <div className="flex justify-end items-center">
                    <Link to="/informations">
                        <i className="fi fi-br-angle-right w-5 h-5"></i>
                    </Link>
                </div>
            </div>
            <button onClick={openModalLivraison} className="font-medium text-xs underline text-gray-600 ">
                Changer l'adresse de livraison
            </button>
        </div>
    );
}

export default LivraisonInfo;


