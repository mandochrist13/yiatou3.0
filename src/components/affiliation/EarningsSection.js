import { useNavigate } from 'react-router-dom';

const EarningsSection = ({ onAffiliationClick }) => {
    const navigate = useNavigate();

    const handleAffiliationClick = () => {
        if (onAffiliationClick) {
            onAffiliationClick();
        }
        navigate('/');
    };

    return (
        <div className="px-4 py-8 bg-white">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                Gagnez n'importe quand
            </h2>
            
            <p className="text-gray-600 text-base leading-relaxed text-justify mb-8">
                Avec notre système de commission transparent, suivez vos gains en temps réel. 
                Chaque fois qu'un de vos filleuls effectue un achat, vous gagnez instantanément 
                votre commission. Plus vous partagez, plus vous gagnez, sans limite de temps ni de montant.
            </p>

            <button 
                onClick={handleAffiliationClick}
                className="w-full max-w-md mx-auto block relative overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                aria-label="Commencer l'affiliation"
                tabIndex={0}
            >
                <img 
                    src="/images/affiliation-earnings.jpg" 
                    alt="Commencer à gagner avec l'affiliation"
                    className="w-full h-[300px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center pb-6">
                    <span className="text-white text-xl font-semibold">
                        Commencer maintenant
                    </span>
                </div>
            </button>
        </div>
    );
};

export default EarningsSection; 