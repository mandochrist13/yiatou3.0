import ButtonCta from "../Buttons/ButtonCta";

const CreateLivraison = () => {
    return (
        <div className="w-full">
            <textarea className="resize-none border-2 w-full min-h-[140px] p-3 rounded-lg mt-10 mb-1" placeholder="Nouvelle Adresse de livraison"></textarea>
            <p className="text-[13px] font-medium text-gray-600 mb-4">La commande en cours sera livré a cette adresse.</p>
            <ButtonCta type="button">Ajouter</ButtonCta>
        </div>
    );
}

export default CreateLivraison;
