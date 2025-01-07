import MoreProduct from "../../components/Sections/MoreProduct";
import TopBarWithButtonBack from "../../components/topBar/TopBarWithButtonBack";
import PageLayout from "../layout/PageLayout";

const Business = () => {
  return (
    <PageLayout topBar={<TopBarWithButtonBack link="/account" title="Lance ton business"/>}>
        <div className="px-4 py-8 text-justify bg-white">
            <H2>Notre Vision</H2>
            <div className="flex flex-col gap-3 font-medium text-[#333333]">
                <p>
                    Chez Yiatou, nous croyons que chacun mérite la chance d'entreprendre et de créer sa propre activité, 
                    peu importe où il se trouve en Afrique. Notre mission est de créer et de soutenir la prochaine génération 
                    de commerçants, d'entrepreneurs et d'e-commerçants africains en leur offrant les outils, les connaissances 
                    et les ressources pour réussir dans le commerce en important directement de Chine.
                </p>
                <p>
                    Avec Yiatou, il n'est pas nécessaire d'avoir un gros capital pour commencer. Notre plateforme te permet 
                    d'accéder à des opportunités uniques pour développer ton business.
                </p>
            </div>

            <H2>Nos avantages clés :</H2>
            <ol className="px-8 [&>*]:list-disc text-[#333333]">
                <li className="font-medium">Prix de gros compétitifs : 
                    <p className="font-normal">Bénéficie de tarifs spécialement négociés pour l'Afrique.</p>
                </li>
                <li className="font-medium">Logistique simplifiée : 
                    <p className="font-normal">Nous prenons en charge les démarches administratives et douanières pour faciliter tes importations.</p>
                </li>
                <li className="font-medium">Système de recommandation : 
                    <p className="font-normal">Commence avec un petit investissement et développe tes revenus en partageant tes coups de cœur avec ton réseau.</p>
                </li>
                <li className="font-medium">Tests sans risque : 
                    <p className="font-normal">Possibilité de commander des échantillons avant de prendre de gros volumes.</p>
                </li>
            </ol>

            <H2>Un rêve accessible pour tous</H2>
            <p className="py-3 font-medium text-[#333333]">
                Que tu souhaites ouvrir une boutique en ligne, commencer dans le commerce physique ou simplement explorer 
                les opportunités du marché, Yiatou t'accompagne étape par étape pour transformer ton projet en réalité. 
                Avec une petite somme de départ, des produits de qualité et un modèle simplifié, lance ton business, 
                gagne en indépendance et construis un avenir prometteur avec Yiatou.
            </p>

            <button 
                className="border-2 w-full py-2 mt-4 border-purple-500 rounded text-purple-500 font-medium"
                aria-label="En savoir plus sur le lancement de business"
                tabIndex={0}
                onClick={() => {/* Action à définir */}}
                onKeyDown={(e) => e.key === 'Enter' && e.target.click()}
            >
                Clique ici pour en savoir plus
            </button>
        </div>
        <div className="-translate-y-6">
            <MoreProduct/>
        </div>
    </PageLayout>
  )
}

const H2 = ({children})=>{
    return (
        <h2 className="font-medium text-lg py-4 px-2 text-[#333333]">{children}</h2>
    );
}

export default Business;