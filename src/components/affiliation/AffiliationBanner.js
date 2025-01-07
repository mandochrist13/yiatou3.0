const AffiliationBanner = () => {
    return (
        <div className="w-full h-[200px] relative overflow-hidden mt-14">
            <img 
                src="/images/affiliation-banner.jpg" 
                alt="Programme d'affiliation"
                className="w-full h-full object-cover"
                loading="eager"
            />
            <div className="absolute inset-0 bg-black/30" />
        </div>
    );
};

export default AffiliationBanner; 