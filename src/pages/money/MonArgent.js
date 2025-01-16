import { FaImage} from "react-icons/fa";
import { HelpCircle } from "lucide-react";
import BottomBar from "../../components/bottomBar/BottomBar";
import PageLayout from "../layout/PageLayout";
import { Link } from "react-router-dom";
import ModalModel from "../../components/Modals/ModalModel";
import { useState } from "react";

export default function MonArgent() {
  const [moneyModal, setMoneyModal] = useState(false);
  const [withdrawModal, setWithdrawModal] = useState(false);
  const toggleModalMoney = () => {
    setMoneyModal(!moneyModal);
  };
  const toggleWithdrawModal = () => {
    setWithdrawModal(!withdrawModal);
  };
  return (
    <PageLayout bottomBar={<BottomBar />}>
      <ModalModel
        onClose={toggleModalMoney}
        active={moneyModal}
        title="Informations de paiement"
      >
        <PaiementInformations
          setMoneyModal={setMoneyModal}
          setWithdrawModal={setWithdrawModal}
        />
      </ModalModel>
      <ModalModel
        onClose={toggleWithdrawModal}
        active={withdrawModal}
        title="Retrait de commission"
      >
        <WithdrawInformation />
      </ModalModel>
      <div className="flex flex-col">
        <Header
          onGetMoney={toggleModalMoney}
          onWithdraw={toggleWithdrawModal}
        />
        <div className="flex flex-col gap-5 px-3">
          <p className="my-5 text-center font-medium text-gray-600">
            20/06/2024
          </p>
          <MoneyItem />
          <MoneyItem />
          <MoneyItem />
          <MoneyItem />
        </div>
      </div>
    </PageLayout>
  );
}

const Header = ({ onGetMoney, onWithdraw }) => {
  const handleClick = () => {
    try {
      onGetMoney();
    } catch (error) {
      console.log("onGetMoney est une fonction");
    }
  };
  // const handleWithdrawClick = () => {
  //   try {
  //     onWithdraw();
  //   } catch (error) {
  //     console.log("onWithdraw est une fonction");
  //   }
  // };
  return (
    <header className="sticky top-0 z-10 w-full h-[150px] bg-green-200 rounded-b-[30px] px-4 flex flex-col justify-center items-start shadow-md">
      <p className="text-gray-700 font-medium -translate-y-2">Solde actuel</p>
      <p className="flex gap-2 items-end mt-1">
        <span className="font-bold text-3xl text-gray-800">6,500</span>
        <span className="font-medium text-gray-600">FCFA</span>
      </p>
      <button
        onClick={handleClick}
        className="flex items-center gap-2 bg-gray-300 hover:bg-gray-400 transition-all mt-3 font-medium px-6 py-2 rounded-full text-sm text-gray-800 shadow-md hover:shadow-lg"
        aria-label="Retirer l'argent"
      >
        Retirer
      </button>
    </header>
  );
};
const MoneyItem = () => {
  return (
    <>
      <div className="bg-white rounded px-3 py-3">
        <div className="flex gap-3 justify-between items-center mb-3">
          <div className="flex items-center gap-3">
            <div className="w-[50px] h-[50px] bg-orange-200 rounded-full flex justify-center items-center">
              <FaImage />
            </div>
            <p className="font-bold">Retrait</p>
          </div>
          <p className="font-medium text-end text-gray-500">10h36</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-gray-600">
            Pour les messages de retrait, tu reproduits ce qui est là et tu
            changes juste les valeurs des retraits pour faire réel. Les liens de
            réclamation mènent sur WhatsApp avec le Message "Bonjour ! Je n'ai
            toujours reçu mon retrait de 5,000 FCFA."
          </p>
          <p className="text-xs text-gray-400">ID: #RT45678</p>
          {/* <Link to="#" className="font-medium underline text-gray-800">
            Faire une reclamation
          </Link> */}
        </div>
      </div>
    </>
  );
};

const PaiementInformations = ({ setMoneyModal, setWithdrawModal }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setMoneyModal(false);
    setWithdrawModal(true);
  };

  const [dateValue, setDateValue] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); // Supprime les caractères non numériques
    const formattedValue = value
      .replace(/^(\d{2})(\d)/, "$1/$2") // Ajoute le premier "/"
      .replace(/^(\d{2}\/\d{2})(\d)/, "$1/$2"); // Ajoute le second "/"
    setDateValue(formattedValue.substring(0, 10)); // Limite à 10 caractères
  };
  const handleFocus = (event) => {
    event.target.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  

  return (
    <>
      <p className="text-sm text-gray-700 px-3 text-center -translate-y-7">
        Ces informations permettent à Yiatou de traiter tes paiements et de
        verifier que tu n'es pas mineur.
        <br />
        Ces informations resteront privées.
      </p>
      <form
        onSubmit={handleSubmit}
        className="mt-[10px] mb-2 flex flex-col gap-3"
      >
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
          name="name"
          placeholder="Noms"
          className="border px-2 py-2 rounded w-full outline-red-500"
          onFocus={handleFocus}
        />
        <input
          type="text"
          name="last"
          placeholder="Prenoms"
          className="border px-2 py-2 rounded w-full outline-red-500"
          onFocus={handleFocus}
        />
        <div className="block">
          <label for="anniversaire" className="text-sm text-gray-600">
            Date de naissance
          </label>
          <input
            type="text"
            id="anniversaire"
            name="anniversaire"
            className="border px-2 py-2 rounded w-full outline-red-500"
            placeholder="jj/mm/aaaa"
            value={dateValue}
            onChange={handleInputChange}
            maxLength="10" // Limite à 10 caractères
            onFocus={handleFocus}
          />
        </div>

        <input
          type="tel"
          name="phone"
          placeholder="N˚ de téléphone appel"
          className="border px-2 py-2 rounded w-full outline-red-500"
          onFocus={handleFocus}
        />
        <input
          type="text"
          name="names"
          placeholder="Nom complet relie au compte"
          className="border px-2 py-2 rounded w-full outline-red-500"
          onFocus={handleFocus}
        />
        <select  onFocus={handleFocus} className="border px-2 py-2 rounded w-full outline-red-500">
          <option>Quelle est ton statut ?</option>
          <option value="Eleve">Elève</option>
          <option value="Eleve">Employé</option>
          <option value="Eleve">J'ai une bricole</option>
        </select>
        <Link
          to="#"
          className="text-[13px] text-gray-600 flex gap-2 items-center mb-2"
        >
          <span className="text-[16px]">
            <i class="fi fi-rr-user-lock"></i>
          </span>
          <span className="underline">
            Voir notre politique de confidentialite
          </span>
        </Link>
        <button
          type="submit"
          className="w-full bg-red-500 text-white py-3 rounded-lg font-semibold transition-colors mt-4"
        >
          Enregistrer
        </button>
      </form>
    </>
  );
};

const WithdrawInformation = () => {
  const [showInfoBubble, setShowInfoBubble] = useState(false);
  const [showInfoBubble1, setShowInfoBubble1] = useState(false);
  const handleInfoClick = () => {
    setShowInfoBubble(!showInfoBubble);
  };

  const handleInfoClick1 = () => {
    setShowInfoBubble1(!showInfoBubble1);
  };

  return (
    <div className="flex border-t-2 border-black/5 mt-[-16px] flex-col gap-4">
      <div className=" ">
        <div className="flex flex-col justify-center items-center max-w-md bg-white py-6 rounded-lg">
          {/* Solde disponible */}
          <div className="flex flex-col justify-between items-center w-full px-5">
            <div className="flex items-center gap-2 border-b border-red-500 pb-3 w-full justify-center">
              <span className="font-bold text-5xl ">
                6,500 
              </span>
              <span className="font-bold text-5xl ">
                FCFA
              </span>
              {/* <FaCoins
                className="text-yellow-500 text-2xl animate-bounce"
                style={{
                  animation: "bounce 1s infinite",
                  animationDuration: "2s",
                }}
              /> */}
            </div>
            {/* <span className="text-sm text-gray-600 italic">
              Solde disponible
            </span> */}
          </div>

          {/* Solde bloqué */}
          <div className="flex pt-4 justify-center items-center w-full gap-1">
            <div className="flex items-center gap-2">
              <span className="font-bold text-sm text-gray-500 opacity-60">
                6,500 FCFA
              </span>
              <span className="text-sm text-gray-500">en attente</span>
            </div>
            {/* <FaLock className="text-gray-400" /> */}
            <button
                onClick={handleInfoClick1}
                className="relative inline-flex items-center text-gray-500 hover:text-gray-700"
                aria-label="Plus d'informations"
              >
                <i className={`fi fi-rr-info flex`} />
                {showInfoBubble1 && (
                  <div className="absolute bottom-full right-0 mb-2 w-[240px] p-3 bg-gray-800 text-white text-xs rounded-lg shadow-lg z-10">
                    <p>
                      Il s'agit d'un gain potentielement gagner à travers un
                      partage, mais la commission n'a pas encore été encaisser
                    </p>
                    <div className="absolute bottom-[-6px] right-3 w-3 h-3 bg-gray-800 transform rotate-45"></div>
                  </div>
                )}
              </button>
            
          </div>
        </div>
      </div>

      <div className="px-0">
        <div className="relative text-gray-600">
          <p className="text-sm text-center">
            En continuant, vous reconnaissez avoir lu et approuvé notre
            politique de paiement
          </p>
          <button
            onClick={handleInfoClick}
            className="inline-flex items-center text-gray-500 hover:text-gray-700 transition-colors absolute right-0 -translate-y-4 -translate-x-4"
            aria-label="Plus d'informations"
          >
            <HelpCircle className="w-4 h-4" />
            {showInfoBubble && (
              <div className="absolute bottom-full right-0 mb-2 w-[280px] p-3 bg-gray-800 text-white text-xs rounded-lg shadow-lg">
                <p>
                  En effectuant un retrait, vous acceptez nos conditions
                  générales de paiement. Les retraits sont traités sous 24-48h
                  ouvrables.
                </p>
                <div className="absolute bottom-[-6px] right-3 w-3 h-3 bg-gray-800 transform rotate-45"></div>
              </div>
            )}
          </button>
        </div>

        <button
          className="w-full bg-red-500 text-white py-3 rounded-lg font-semibold transition-colors mt-4"
          aria-label="Retirer 6,500 FCFA"
        >
          Retirer 6,500 FCFA
        </button>
      </div>
    </div>
  );
};
