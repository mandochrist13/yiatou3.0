import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ModalModel from "../../components/Modals/ModalModel";
import CoutLivraison from "../../components/Sections/CoutLivraison";
import MoreProduct from "../../components/Sections/MoreProduct";
import SelectProductColor from "../../components/Sections/SelectProductColor";
import PageLayout from "../layout/PageLayout";
import { fetchEchantillonDetails } from "../../utils/utils";
import DeliveryInfo from "../../components/Sections/DeliveryInfo";
import DeliveryPromises from "../../components/Sections/DeliveryPromises";
import DetailsEchantillon from "../../components/Sections/DetailsEchantillon";
import TopNavigationBar from '../../components/navigation/TopNavigationBar';
import LoadingSpinner from '../../components/UI/LoadingSpinner';
import HeaderEchantillon from '../../components/echantillon/HeaderEchantillon';
import BottomActions from '../../components/echantillon/BottomActions';
import PersonnalInfoForm from '../../components/forms/PersonnalInfoForm';

const EchantillonDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [echantillon, setEchantillon] = useState(null);
  const [modalUserInfo, setModalUserInfo] = useState(false);
  const [isCityModalOpen, setIsCityModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const loadEchantillonDetails = async () => {
      try {
        const details = await fetchEchantillonDetails(id);
        setEchantillon(details);
      } catch (error) {
        console.error("Erreur lors du chargement des détails de l'échantillon:", error);
      }
    };

    loadEchantillonDetails();
  }, [id]);

  useEffect(() => {
    const handleNavScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleNavScroll);
    return () => window.removeEventListener('scroll', handleNavScroll);
  }, []);

  const toggleModal = () => setModalUserInfo(!modalUserInfo);
  
  const handleCartClick = () => navigate('/cart');
  
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleCartClick();
    }
  };

  const handleStartClick = () => {
    console.log("L'utilisateur a cliqué sur Je me lance");
  };

  if (!echantillon) return <LoadingSpinner />;

  const cities = [
    { name: 'Libreville', price: 2000 },
    { name: 'Akanda', price: 2500 },
    { name: 'Owendo', price: 2500 },
  ];

  return (
    <div className="bg-gray-100 min-h-screen relative overflow-x-hidden">
      <PageLayout bottomBar={
        !isCityModalOpen && <BottomActions toggleModal={toggleModal} />
      }>
        <TopNavigationBar 
          isScrolled={isScrolled}
          onCartClick={handleCartClick}
          onKeyDown={handleKeyDown}
        />

        <ModalModel onClose={toggleModal} active={modalUserInfo} title="Information de livraison">
          <PersonnalInfoForm />
        </ModalModel>

        <HeaderEchantillon echantillon={echantillon} />
        <DetailsEchantillon echantillon={echantillon}/>
        <SelectProductColor productType="sample" />
        <DeliveryInfo
          initialCity="Libreville"
          initialPrice={2000}
          currency="FCFA"
          unit="Kg"
          startDate={new Date()}
          endDate={new Date(new Date().setDate(new Date().getDate() + 14))}
          daysRange={14}
          cities={cities}
          isSample={true}
          onModalOpen={() => setIsCityModalOpen(true)}
          onModalClose={() => setIsCityModalOpen(false)}
        />
        <DeliveryPromises 
          isSample={true} 
          onStartClick={handleStartClick}
        />
        <CoutLivraison 
          numberOfPieces={20} 
          onStartClick={handleStartClick} 
          showStartButton={true} 
        />
        <MoreProduct />
      </PageLayout>
    </div>
  );
};

export default EchantillonDetails;
