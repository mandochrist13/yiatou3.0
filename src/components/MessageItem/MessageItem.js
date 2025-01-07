import { FaImage } from "react-icons/fa6";
import { Link } from "react-router-dom";

const MessageItem = () => {
    return (
        <div className="bg-orange-50 rounded px-3 py-3">
            <div className="flex gap-3 items-center mb-3">
                <div className="w-[50px] h-[50px] bg-gray-100 rounded-full flex justify-center items-center">
                    <FaImage/>
                </div>
                <p>Argent</p>
            </div>
            <div className="flex flex-col gap-3">
                <p className="font-medium text-gray-600">Pour les messages de retrait, tu reproduits ce qui est là et tu changes juste les valeurs des retraits pour faire réel. Les liens de réclamation mènent sur WhatsApp avec le Message "Bonjour ! Je n'ai toujours reçu mon retrait de 5,000 FCFA."</p>
                <Link to="#" className="font-medium underline text-gray-800">Voir l'article</Link>
                <p className="font-medium text-end text-gray-500">10h36</p>
            </div>
        </div>
    );
}

export default MessageItem;
