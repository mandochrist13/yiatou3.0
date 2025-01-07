import { useState } from "react";
import { LuPenSquare, LuSave, LuX } from "react-icons/lu";
import ButtonCta from "../Buttons/ButtonCta";

const AddLivraison = ({ onCreateLivraison, onSave }) => {
    const [addresses, setAddresses] = useState([
        {
            id: 1,
            name: "Adresse 1",
            details: "Livraison a Mr. Dave Anguilet Walker, a l'adresse Beausejour en face de chez Mamboundou.",
            isEditing: false
        },
        {
            id: 2,
            name: "Adresse 2",
            details: "Livraison a Mr. Dave Anguilet Walker, a l'adresse Beausejour en face de chez Mamboundou.",
            isEditing: false
        }
    ]);
    const [selectedAddress, setSelectedAddress] = useState(null);
    const [error, setError] = useState("");
    const [editingText, setEditingText] = useState({});

    const handleCreate = () => {
        try {
            if (onCreateLivraison) {
                onCreateLivraison();
            }
        } catch (error) {
            console.error("Erreur lors de la création:", error);
        }
    };

    const handleEdit = (addressId) => {
        setAddresses(addresses.map(addr => ({
            ...addr,
            isEditing: addr.id === addressId ? !addr.isEditing : false
        })));
        const address = addresses.find(addr => addr.id === addressId);
        if (address) {
            setEditingText({ [addressId]: address.details });
        }
    };

    const handleTextChange = (addressId, text) => {
        setEditingText(prev => ({
            ...prev,
            [addressId]: text
        }));
    };

    const handleSave = (addressId) => {
        const newDetails = editingText[addressId];
        if (!newDetails?.trim()) return;

        setAddresses(addresses.map(addr => {
            if (addr.id === addressId) {
                return {
                    ...addr,
                    details: newDetails,
                    isEditing: false
                };
            }
            return addr;
        }));
        if (onSave) {
            onSave(addresses);
        }
    };

    const handleCancelEdit = (addressId) => {
        setAddresses(addresses.map(addr => {
            if (addr.id === addressId) {
                return {
                    ...addr,
                    isEditing: false
                };
            }
            return addr;
        }));
        setEditingText(prev => {
            const newState = { ...prev };
            delete newState[addressId];
            return newState;
        });
    };

    const handleContinue = () => {
        if (!selectedAddress) {
            setError("Veuillez sélectionner une adresse de livraison");
            return;
        }
        if (onSave) {
            onSave(selectedAddress);
        }
    };

    return (
        <div className="relative px-3 -translate-y-4">
            {error && (
                <p className="text-red-500 text-sm mb-2">{error}</p>
            )}
            <div>
                {addresses.map((address) => (
                    <div key={address.id} className="mb-2">
                        <div className="flex justify-between items-center mb-1">
                            <div className="flex gap-2 items-center">
                                <input 
                                    type="radio" 
                                    name="adresses" 
                                    id={`adresse-${address.id}`}
                                    onChange={() => setSelectedAddress(address)}
                                    aria-label={`Sélectionner ${address.name}`}
                                />
                                <label 
                                    htmlFor={`adresse-${address.id}`} 
                                    className="label font-bold"
                                >
                                    {address.name}
                                </label>
                            </div>
                            {!address.isEditing && (
                                <button
                                    onClick={() => handleEdit(address.id)}
                                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                                    aria-label={`Modifier ${address.name}`}
                                >
                                    <LuPenSquare className="w-5 h-5" />
                                </button>
                            )}
                        </div>
                        {address.isEditing ? (
                            <div className="space-y-2">
                                <textarea
                                    className="w-full p-2 border rounded-md"
                                    value={editingText[address.id] || address.details}
                                    onChange={(e) => handleTextChange(address.id, e.target.value)}
                                    rows="3"
                                    aria-label="Modifier les détails de l'adresse"
                                />
                                <div className="flex justify-end gap-2">
                                    <button
                                        onClick={() => handleCancelEdit(address.id)}
                                        className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-600"
                                        aria-label="Annuler les modifications"
                                    >
                                        <LuX className="w-5 h-5" />
                                    </button>
                                    <button
                                        onClick={() => handleSave(address.id)}
                                        className="p-2 hover:bg-gray-100 rounded-full transition-colors text-green-600"
                                        aria-label="Enregistrer les modifications"
                                    >
                                        <LuSave className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <p className="font-medium text-gray-700">
                                {address.details}
                            </p>
                        )}
                    </div>
                ))}
            </div>

            <button 
                onClick={handleCreate}
                className="border-2 w-full py-1.5 rounded-full mb-2 mt-3 text-gray-600 font-medium hover:bg-gray-50 transition-colors"
                aria-label="Ajouter une nouvelle adresse de livraison"
            >
                Ajouter une adresse de livraison
            </button>
            
            <ButtonCta onClick={handleContinue}>
                Continuer
            </ButtonCta>
        </div>
    );
};

export default AddLivraison;
