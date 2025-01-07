const ShareSection = () => {
    return (
        <div className="px-4 py-8 bg-gray-50">
            <h2 className="text-2xl text-center font-medium text-[#333333] mb-6">
                Partagez à tout moment et n'importe où
            </h2>
            
            <p className="font-base text-[#333333] leading-relaxed text-justify mb-8">
                Avec notre programme d'affiliation, partagez facilement vos codes de parrainage sur tous vos réseaux 
                sociaux préférés. Que ce soit sur WhatsApp, Instagram, Facebook ou par message direct, vous pouvez 
                toucher votre audience où qu'elle soit.
            </p>

            <div className="flex gap-4">
                <div className="w-2/3">
                    <img 
                        src="/images/affiliation-share-1.jpg" 
                        alt="Partage sur mobile"
                        className="w-full h-[400px] object-cover rounded-md shadow-md"
                    />
                </div>
                
                <div className="w-1/2 flex flex-col gap-4">
                    <img 
                        src="/images/affiliation-share-2.jpg" 
                        alt="Partage sur réseaux sociaux"
                        className="w-full h-[190px] object-cover rounded-md shadow-md"
                    />
                    <img 
                        src="/images/affiliation-share-3.jpg" 
                        alt="Suivi des partages"
                        className="w-full h-[190px] object-cover rounded-md shadow-md"
                    />
                </div>
            </div>
        </div>
    );
};

export default ShareSection; 