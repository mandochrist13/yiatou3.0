const HowItWorks = () => {
    return (
        <div className="px-4 py-8 bg-gray-50">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
                Comment ça marche
            </h2>

            <div className="space-y-6">
                {steps.map((step, index) => (
                    <div key={index} className="flex items-start gap-4">
                        <span className="flex-shrink-0 text-gray-600  text-xl font-bold">{index + 1}.</span>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                {step.title}
                            </h3>
                            <p className="text-gray-600">
                                {step.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const steps = [
    {
        title: "Choisis un produit",
        description: "Choisis un produit qui te plaît et partage-le avec ton réseau en utilisant ton lien d’affiliation."
    },
    {
        title: "Gagne une commission",
        description: "Gagne une commission instantanément pour chaque vente réalisée via ton lien, ou reçois ta commission après la livraison."
    },
    {
        title: "Retire ton argent ",
        description: "Retire ton argent facilement par Airtel Money en un clic."
    }
];

export default HowItWorks; 