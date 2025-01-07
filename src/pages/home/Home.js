import BottomBar from "../../components/bottomBar/BottomBar";
import ButtonHome from "../../components/Buttons/ButtonHome";
import HomeSlider from "../../components/Sliders/HomeSlider";
import TopBar from "../../components/topBar/TopBar";
import { FaWhatsapp } from "react-icons/fa6";
import PageLayout from "../layout/PageLayout";
import Article from "../../components/Articles/Article";
import { useState } from "react";
import ShareProduct from "../../components/Modals/ShareProduct";
import { produits } from "../../utils/utils"; 
import SampleSection from "../../components/SampleSection";
import '@flaticon/flaticon-uicons/css/all/all.css';

const Home = () => {
  const [activeShare,setActiveShare] = useState(false);
  const [product,setProduct] = useState(null);
  const toggleActiveShare = (selecte) =>{
    setActiveShare(!activeShare);
    setProduct(selecte);
  }

  return (
    <PageLayout bottomBar={<BottomBar />} topBar={<TopBar />}>
      <ShareProduct product={product} toggleActiveShare={toggleActiveShare} activeShare={activeShare}/>
      <HomeSlider />
      <div className="mx-3 flex relative gap-3 bg-[#ffe5af] rounded-tl-lg rounded-tr-lg overflow-hidden">
        <ButtonHome data="entre 10 - 14 jours" icon={<i className="fi fi-rr-shipping-fast text-2xl flex items-center" />}>
          Livraison rapide
        </ButtonHome>
        <div className="absolute left-[50%] top-[50%] h-[70%] w-[2px] bg-white translate-x-[-50%] translate-y-[-50%]"></div>
        <ButtonHome data="aux petits oignons" icon={<FaWhatsapp className="flex items-center" />}>
          Service client 
        </ButtonHome>
      </div>
      <SampleSection />
      <h2 className="px-3 py-1 mt-2 text-md font-bold text-[rgb(51,51,51)]">Les plus achetés</h2>
      <div className="mx-3 grid grid-cols-2 gap-2">
        {produits.map((produit, i) => (
          <Article key={i} product={produit} share={() => toggleActiveShare(produit)} />
        ))}
      </div>
    </PageLayout>
  );
};

export default Home;
