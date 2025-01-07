import { useState } from 'react';
import CommandeBottom from '../../components/bottomBar/CommandeBottom';
import ModalModel from '../../components/Modals/ModalModel';
import CommandeInfo from '../../components/Sections/CommandeInfo';
import LivraisonInfo from '../../components/Sections/LivraisonInfo';
import TopBarWithButtonBack from '../../components/topBar/TopBarWithButtonBack';
import PageLayout from '../layout/PageLayout';
import AddLivraison from '../../components/Modals/AddLivraison';
import CreateLivraison from '../../components/Modals/CreateLivraison';

const Commandes = () => {
    const [livraisonInfo, setLivraisonInfo] = useState({
        quartier: "Beausejour",
        ville: "Libreville",
        telephone: "066612236"
    });
    const [showAddLivraison, setShowAddLivraison] = useState(false);
    const [totalAmount, setTotalAmount] = useState(0);

    const handleTotalChange = (newTotal) => {
        setTotalAmount(newTotal);
    };

    const handleSaveLivraison = (selectedAddress) => {
        setLivraisonInfo({
            quartier: selectedAddress.details,
            ville: "Libreville",
            telephone: "066612236"
        });
        setShowAddLivraison(false);
    };

    return (
        <PageLayout 
            bottomBar={<CommandeBottom totalAmount={totalAmount} />} 
            topBar={<TopBarWithButtonBack link='/cart' title="Commande"/>}
        >
            <ModalModel onClose={() => setShowAddLivraison(false)} active={showAddLivraison} title='Où doit-on livrer ?'>
                <AddLivraison onSave={handleSaveLivraison} onCreateLivraison={() => {/* ... */}}/>
            </ModalModel>
            <ModalModel onClose={() => {/* ... */}} active={false} title='Nouvelle Adresse'>
                <CreateLivraison/>
            </ModalModel>
            <LivraisonInfo 
                info={livraisonInfo}
                onEditClick={() => setShowAddLivraison(true)}
            />
            <CommandeInfo 
                onTotalChange={handleTotalChange}
                isEchantillon={false}
            />
        </PageLayout>
    );
}

export default Commandes;
