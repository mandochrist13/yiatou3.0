const FooterCTA = ({ onAffiliationClick }) => {
    return (
        <div className="w-full">
            <div className="w-full h-[250px]">
                <img 
                    src="/images/affiliation-footer.jpg" 
                    alt="Rejoignez le programme d'affiliation"
                    className="w-full h-full object-cover"
                />
            </div>
            
            <div className="px-4 py-8 bg-white">
                <button 
                    onClick={onAffiliationClick}
                    className="w-full bg-blue-600 text-white py-4 text-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-md rounded-md"
                    aria-label="Commencer à partager"
                    tabIndex={0}
                >
                    Commencer à partager
                </button>
            </div>
        </div>
    );
};

export default FooterCTA; 