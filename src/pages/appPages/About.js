import MoreProduct from "../../components/Sections/MoreProduct";
import TopBarWithButtonBack from "../../components/topBar/TopBarWithButtonBack";
import PageLayout from "../layout/PageLayout";

export default function About() {
  return (
    <PageLayout topBar={<TopBarWithButtonBack link="/account" title="A propos"/>}>
        <div className="px-4 py-12 text-justify bg-white">
        <H2>Découverte !</H2>
            <div className="flex flex-col gap-3 font-medium text-[#333333]">
                <p>
                Découvres Yiatou, ta nouvelle application de vente en ligne sociale révolutionnaire! 
                Avec Yiatou, plonge dans un univers d'articles de qualités, rares et uniques qui ne manqueront pas de t’émerveiller. 
                Nos produits sont à couper le souffle et à des prix incroyables.
                </p>
                <p>
                Mais Yiatou, ce n'est pas seulement l'achat de produits formidables qui t’apportent du bonheur. 
                C'est aussi une communauté où tu peux partager tes trouvailles avec tes proches et gagner de l'argent à 
                chaque fois que l’un d'entre eux effectue un achat via ton lien de recommandation. 
                Profite d'une expérience d'achat enrichissante, engageante et unique.
                </p>
                <p>
                Pour faciliter tes transactions, Yiatou te permet de payer à la livraison. De plus, nous nous engageons 
                à livrer toutes tes commandes en moins de 2 heures maximum. Rejoins Yiatou pour construire ensemble un 
                avenir commun et pour transformer ta vie à chaque interaction avec nous!
                </p>
            </div>
            <H2>Principales fonctionnalités de Yiatou :</H2>
            <ol className="px-8 [&>*]:list-disc text-[#333333]">
                <li className="font-medium">Articles de qualité, rares et uniques : <p className="font-normal">Découvrez des produits sélectionnés avec soin pour vous.</p></li>
                <li className="font-medium">Prix incroyables : <p className="font-normal">Profites de tarifs justes et attractifs qui te permettent d'acheter plein de choses avec très peu d'argent.</p></li>
                <li className="font-medium">Options de commande flexibles : <p className="font-normal">Tu peux valider ta commande sur WhatsApp ou directement en ligne.</p></li>
                <li className="font-medium">Réservation : <p className="font-normal">En cas de rupture de stock, tu peux envoyer un message sur WhatsApp pour être informé lors du prochain réapprovisionnement.</p></li>
                <li className="font-medium">Recommandations et gains : <p className="font-normal">Partage tes articles préférés et gagne de l'argent lorsque tes proches achètent via ton lien de recommandation.</p></li>
                <li className="font-medium">Paiement facile : <p className="font-normal">Tu peux payer à la livraison en toute confiance.</p></li>
                <li className="font-medium">Livraison rapide : <p className="font-normal">Reçois tes commandes en moins de 2 heures après achat.</p></li>
                <li className="font-medium">Recevoir de l'argent : <p className="font-normal">Tu reçois sur ton Airtel Money l'argent que tu as gagné en partageant des articles.</p></li>
            </ol>
            <p className="py-3 font-medium text-[#333333]">
            Rejoins Yiatou dès maintenant et fais partie de la communauté des gens les plus heureux de la toile !
            </p>
            <button className="border-2 w-full py-2 mt-4 border-purple-500 rounded text-purple-500 font-medium">
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