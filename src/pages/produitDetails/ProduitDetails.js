import React, { useEffect, useState, useCallback } from "react";
import { FaUserLock } from "react-icons/fa";
import { Link, useLocation, useParams, useNavigate } from "react-router-dom";
import ModalModel from "../../components/Modals/ModalModel";
import CoutLivraison from "../../components/Sections/CoutLivraison";
import DetailsProduct from "../../components/Sections/DetailsProduct";
import MoreProduct from "../../components/Sections/MoreProduct";
import SelectProductColor from "../../components/Sections/SelectProductColor";
import PageLayout from "../layout/PageLayout";
import BottomBarLayout from "../layout/BottomBarLayout";
import ButtonCta from "../../components/Buttons/ButtonCta";
import { produits } from "../../utils/utils";
import SliderModel from "../../components/Sliders/SliderModel";
import DeliveryInfo from "../../components/Sections/DeliveryInfo";
import Echantillons from "../../components/Sections/Echantillons";
import DeliveryPromises from "../../components/Sections/DeliveryPromises";
import TopNavigationBar from "../../components/navigation/TopNavigationBar";
import ImageCounter from "../../components/UI/ImageCounter";
import { useCart } from "../../context/CartContext";
import Toast from "../../components/UI/Toast";

const ProduitDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [modalUserInfo, setModalUserInfo] = useState(false);
  const [isCityModalOpen, setIsCityModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const product = produits.find((p) => p.id === parseFloat(id));
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const handleNavScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener("scroll", handleNavScroll);
    return () => window.removeEventListener("scroll", handleNavScroll);
  }, []);

  const toggleModal = () => {
    setModalUserInfo(!modalUserInfo);
  };
  const cities = [
    { name: "Libreville", price: 2000 },
    { name: "Akanda", price: 2500 },
    { name: "Owendo", price: 2500 },
    // Ajoutez d'autres villes selon vos besoins
  ];
  // Tableau simple avec les noms des villes
  const cityNames = [{name:"Libreville"}, {name:"Port-Gentil"}];

  const handleCartClick = () => {
    navigate("/cart");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      handleCartClick();
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen relative overflow-x-hidden">
      <PageLayout
        bottomBar={
          !isCityModalOpen && (
            <BottomButton
              toggleModal={toggleModal}
              product={product}
              onAddToCart={() => setShowToast(true)}
            />
          )
        }
      >
        <TopNavigationBar
          isScrolled={isScrolled}
          onCartClick={handleCartClick}
          onKeyDown={handleKeyDown}
        />
        <ModalModel
          onClose={toggleModal}
          active={modalUserInfo}
          title="Information de livraison"
        >
          <PersonnalInfo />
        </ModalModel>
        <HeaderProductDetails product={product} />
        <DetailsProduct product={product} />
        <SelectProductColor productType="shoes" />
        <DeliveryInfo
          initialCity="Libreville"
          initialCity1="Libreville"
          initialPrice={2000}
          currency="FCFA"
          unit="Kg"
          startDate={new Date()} // Utilisez la date actuelle ou une date spécifique
          endDate={new Date(new Date().setDate(new Date().getDate() + 14))} // Date de fin initiale (14 jours après la date de début)
          daysRange={14}
          cities={cities}
          cityNames={cityNames}
          onModalOpen={() => setIsCityModalOpen(true)}
          onModalClose={() => setIsCityModalOpen(false)}
        />
        <Echantillons sampleId={id} />
        <DeliveryPromises />
        <CoutLivraison />
        <MoreProduct />
        <Toast
          message="Produit ajouté au panier avec succès !"
          isVisible={showToast}
          onClose={() => setShowToast(false)}
        />
      </PageLayout>
    </div>
  );
};

const handleAddToCartAnimation = (e) => {
  const target = e.target.closest(".product-image");
  const cart = document.querySelector(".cart-icon");

  if (target && cart) {
    const clonedImage = target.cloneNode(true);
    const rect = target.getBoundingClientRect();
    const cartRect = cart.getBoundingClientRect();

    clonedImage.style.position = "absolute";
    clonedImage.style.top = `${rect.top}px`;
    clonedImage.style.left = `${rect.left}px`;
    clonedImage.style.width = `${rect.width}px`;
    clonedImage.style.height = `${rect.height}px`;

    document.body.appendChild(clonedImage);

    clonedImage.classList.add("animate-to-cart");
    clonedImage.style.setProperty(
      "--final-x",
      `${cartRect.left - rect.left}px`
    );
    clonedImage.style.setProperty("--final-y", `${cartRect.top - rect.top}px`);

    clonedImage.addEventListener("animationend", () => {
      document.body.removeChild(clonedImage);
    });
  }
};

const BottomButton = ({ toggleModal, product, onAddToCart }) => {
  const { addToCart } = useCart();

  const handleOrder = () => {
    try {
      toggleModal();
    } catch (error) {
      console.log("ToggleModal doit être une fonction");
    }
  };

  const handleAddToCart = () => {
    addToCart(product);
    onAddToCart();
  };

  return (
    <BottomBarLayout>
      <div className="shadow-lg w-full mt-1 py-2 px-3 flex justify-between gap-2">
        <ButtonCta
          onClick={handleOrder}
          variant="green"
          className="flex-1 text-md font-bold"
        >
          Commander
        </ButtonCta>
        <ButtonCta
          onClick={(e) => {
            handleAddToCartAnimation(e);
            handleAddToCart();
          }}
          className="flex-1 flex items-center justify-center text-md font-bold"
        >
          Ajoute au panier
        </ButtonCta>
      </div>
    </BottomBarLayout>
  );
};

const PersonnalInfo = () => {
  const navigate = useNavigate();

  const handleFocus = useCallback((e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/commandes");
  };

  return (
    <>
      <div className="mb-1">
        <p className="text-center text-sm text-gray-700 -translate-y-7">
          Ces informations permettent à Yiatou de traiter tes commandes et
          restent privées.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="mt-3 flex flex-col gap-3">
        <div className="flex gap-4 items-center">
          <div className="flex gap-2 items-center">
            <input type="radio" name="sexe" id="m" />
            <label htmlFor="m">Monsieur</label>
          </div>
          <div className="flex gap-2 items-center">
            <input type="radio" name="sexe" id="f" />
            <label htmlFor="f">Madame</label>
          </div>
        </div>
        <input
          type="text"
          name="lastname"
          placeholder="Nom"
          className="border px-2 py-2 rounded w-full"
          onFocus={handleFocus}
        />
        <input
          type="text"
          name="firstname"
          placeholder="Prenom"
          className="border px-2 py-2 rounded w-full"
          onFocus={handleFocus}
        />
        <input
          type="tel"
          name="phone"
          placeholder="N de telephone appel"
          className="border px-2 py-2 rounded w-full"
          onFocus={handleFocus}
        />
        <select
          name="zoneLivraison"
          className="border px-2 py-2 rounded w-full"
          onFocus={handleFocus}
        >
          <option value="" disabled selected>
            Choisissez une zone de livraison
          </option>
          <option value="libreville">2000 FCFA - Libreville</option>
          <option value="akanda">2500 FCFA - Akanda</option>
          <option value="owendo">2500 FCFA - Owendo</option>
        </select>
        <textarea
          name="adresse"
          placeholder="Adresse de livraison"
          className="border px-2 py-2 rounded w-full min-h-[100px] resize-none"
          onFocus={handleFocus}
        ></textarea>

        <button
          type="submit"
          className="w-full bg-main-button text-white py-3 rounded-lg font-semibold transition-colors mt-4"
        >
          Enregistrer
        </button>
      </form>
      <Link
        to="#"
        className="flex justify-center items-center gap-2 py-4 text-gray-400"
      >
        <FaUserLock />
        <span className="underline">
          <Link to="/politique">Voir notre politique de confidentialité</Link>
        </span>
      </Link>
    </>
  );
};

/**
 *
 * @param {{product : Products}} param0
 * @returns
 */
const HeaderProductDetails = ({ product }) => {
  const [currentImage, setCurrentImage] = useState(1);
  const location = useLocation();

  useEffect(() => {
    // Vérifie si l'URL contient un fragment (ancre)
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash); // Recherche l'élément correspondant à l'id
      if (element) {
        element.scrollIntoView({ block: "start" });
      }
    }
  }, [location]);
  return (
    <div id="specific-section" className="w-full relative">
      <SliderModel onSlideChange={(index) => setCurrentImage(index + 1)}>
        {product.image.map((img, i) => {
          return (
            <div
              key={i}
              className="w-full h-[100vw] bg-white flex justify-center items-center overflow-hidden"
            >
              <img
                src={img}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          );
        })}
      </SliderModel>
      <ImageCounter
        currentImage={currentImage}
        totalImages={product.image.length}
      />
    </div>
  );
};

export default ProduitDetails;
