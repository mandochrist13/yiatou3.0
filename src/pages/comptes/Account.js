import React, { useState } from 'react'
import PageLayout from '../layout/PageLayout'
import { FaImage, FaPeopleGroup } from 'react-icons/fa6'
import BottomBar from '../../components/bottomBar/BottomBar'
import { Link } from 'react-router-dom'
import ShareProduct from '../../components/Modals/ShareProduct'
import ButtonWhatsapp from '../../components/Buttons/ButtonWhatsapp'

const Account = () => {
  const [isShareOpen, setIsShareOpen] = useState(false)

  const handleToggleShare = () => setIsShareOpen(prev => !prev)

  return (
    <PageLayout 
      bottomBar={<BottomBar />} 
      topBar={
        <div className="flex w-full items-center justify-between px-4 h-[48px] bg-white">
          <div className="text-lg font-medium">Mon compte</div>
          <button
            onClick={handleToggleShare}
            className="rounded-full p-2 transition-colors"
            aria-label="Partager"
            tabIndex={0}
          >
            <i class="fi fi-sr-share text-xl"></i>
          </button>
        </div>
      }
    >
      <div className="relative z-50">
        <ShareProduct
          isProduct={false}
          toggleActiveShare={handleToggleShare}
          activeShare={isShareOpen}
        />
      </div>

      <div className="mt-6 min-h-[80vh] bg-white py-4">
        <Link 
          to="/informations"
          className="grid grid-cols-[60px_1fr_30px] gap-2 border-b px-3 py-3 items-center"
          aria-label="Voir mon profil"
          tabIndex={0}
        >
          <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-orange-100">
            <FaImage className="text-gray-600" />
          </div>
          <div>
            <p className="flex items-center gap-2 font-medium">
              <span>Dave</span>
              <span className="text-blue-700">
                <i className="fi fi-sr-check-circle" />
              </span>
            </p>
            <p className="text-[13px] font-medium text-gray-600">
              abcdef@gmail.com
            </p>
          </div>
          <i className="fi fi-rs-angle-small-right text-3xl" />
        </Link>

        <div className="border-b px-3 py-5">
          <p className="flex items-center gap-2 font-medium text-gray-600">
            <FaPeopleGroup className="text-[25px]" />
            <span className="text-black">3 invités</span>
          </p>
        </div>

        <div className="border-b px-3 py-5">
          <Link 
            to="/historique/historique"
            className="grid grid-cols-[25px_1fr_30px] items-center gap-2 w-full"
            aria-label="Voir mes commandes"
            tabIndex={0}
          >
            <i className="fi fi-rr-receipt text-2xl text-gray-600" />
            <span className="font-medium text-black">Mes commandes</span>
            <i className="fi fi-rs-angle-small-right text-3xl" />
          </Link>
        </div>

        <div className="border-b px-3 py-4">
          <h2 className="text-lg font-bold text-gray-900">Services</h2>
          <ul className="my-3 flex flex-col gap-2">
            {[
              { to: "/about", icon: "fi-rr-info", label: "À propos" },
              { to: "/affiliation", icon: "fi-rr-share", label: "Affiliation" },
              { to: "/services", icon: "fi-rr-comment-question", label: "Centre d'aide" },
              { to: "/retour", icon: "fi-rr-restock", label: "Politique de retour" },
              { to: "/business", icon: "fi-rr-seller", label: "Lance ton business" },
              { to: "/politique", icon: "fi-rr-user-lock", label: "Politique de confidentialité" },
              { to: "/conditions", icon: "fi-rr-handshake", label: "Termes et Conditions d'utilisation" }
            ].map(({ to, icon, label }) => (
              <li key={to} className="font-medium text-gray-500">
                <Link 
                  to={to}
                  className="flex items-center gap-2"
                  aria-label={label}
                  tabIndex={0}
                >
                  <span><i className={`fi ${icon} flex`} /></span>
                  <span className="text-black">{label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3 px-3 py-4">
          <ButtonWhatsapp className="flex items-center justify-center gap-3 rounded bg-green-700 py-2 font-medium text-white">
            Service client
          </ButtonWhatsapp>
        </div>
        <div className="flex flex-col items-center gap-4 px-3">
          <span className="text-center text-md text-gray-500">
            Abonne-toi pour ne rien rater
          </span>
          
          <div className="flex justify-center gap-4 pb-6">
            <a 
              href="https://wa.me/24177305184" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center"
              aria-label="Suivez-nous sur WhatsApp"
              tabIndex={0}
            >
              <i className="fi fi-brands-whatsapp text-[#25D366] text-4xl" />
            </a>

            <a 
              href="https://www.facebook.com/your-page" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center"
              aria-label="Suivez-nous sur Facebook"
              tabIndex={0}
            >
              <i className="fi fi-brands-facebook text-[#1877F2] text-4xl" />
            </a>

            <a 
              href="https://www.tiktok.com/@your-account" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center"
              aria-label="Suivez-nous sur TikTok"
              tabIndex={0}
            >
              <i className="fi fi-brands-tik-tok text-black text-4xl" />
            </a>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default Account