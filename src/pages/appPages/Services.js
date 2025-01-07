import TopBarWithButtonBack from "../../components/topBar/TopBarWithButtonBack";
import PageLayout from "../layout/PageLayout";
import ButtonWhatsapp from "../../components/Buttons/ButtonWhatsapp";

export default function Services() {
  return (
    <PageLayout topBar={<TopBarWithButtonBack link="/account" title="FAQs - Yiatou"/>}>
        <div className="px-4 py-12 text-justify bg-white">
            <div className="flex flex-col font-medium text-[#333333]">
                <H2>Qu'est-ce que Yiatou ?</H2>
                    <p>
                        Yiatou est une application de vente en ligne sociale qui te permet de découvrir des articles de qualité, 
                        rares et uniques à des prix incroyablement woah. Elle t’offre également la possibilité de partager des 
                        articles intéressants et de gagner de l'argent grâce aux achats effectués par tes proches à l’aide de ton lien de partage.
                    </p>
                <H2>Comment utiliser Yiatou ?</H2>
                    <p>
                        Pour utiliser Yiatou, rends-toi sur yiatou.com, ajoute l’application aux raccourcis, inscris-toi avec 
                        ton adresse email ou ton compte de réseau social, et commence à explorer nos produits pour commander et à 
                        partager des produits à tes proches pour gagner de l’argent à chaque fois qu’ils achètent.
                    </p>
                <H2>Comment passer commande ?</H2>
                    <p>
                        Une fois que tu as choisi un article et ces critères (taille, quantité, couleur, etc), Yiatou va te proposer de boucler ta commande sur WhatsApp.
                    </p>
                    <p>
                        Ensuite, tu seras redirigé sur WhatsApp avec toutes les informations relatives à ta commande dans un message déjà rempli que tu auras juste à envoyer et ta commande sera prise en charge par notre équipe de vente.                    </p>
                <H2>Comment se passe la livraison ?</H2>
                    <p>
                        Nous nous engageons à livrer toutes les commandes en moins de 2 heures maximum après la confirmation de l’achat. Nos livreurs rapides et fiables s’assurent que tes commandes arrivent le plus vite possible entre tes mains.
                    </p>
                <H2>Comment gagner de l’argent ?</H2>
                    <p> 
                        Lorsque tu partages un lien depuis ton compte et qu'un ami effectue un achat via ce lien, tu gagnes une commission sur l’article acheté. S’ils sont 10 à commander via ton lien, ta commission est X10 également.
                    </p>
                <H2>A combien sont les commissions?</H2>
                    <p> 
                        La plupart des articles sur Yiatou ont une commission (variable) défini par défaut qui peuvent aller de 100 à 5.000 FCFA. Il suffit de cliquer sur l’article pour voir la commission.
                    </p>
                <H2>Quels sont les modes de paiement disponibles sur Yiatou ?</H2>
                    <p> 
                        Yiatou te propose des options de paiement flexibles. Tu peux payer à la livraison en toute sérénité.
                    </p>
                <H2>Quels types de produits puis-je trouver sur Yiatou ?</H2>
                    <p> 
                    Sur Yiatou, tu peux trouver une vaste gamme de produits de qualité, rares et uniques, soigneusement sélectionnés pour satisfaire tous tes goûts et besoins.
                    </p>
                <H2>Est-il sûr d'acheter sur Yiatou ?</H2>
                    <p> 
                        Oui, acheter sur Yiatou est entièrement sûr. Nous utilisons des protocoles de sécurité avancés pour protéger tes informations personnelles et les transactions sont gérés par Airtel Money.
                    </p>
                <H2>Puis-je retourner un produit acheté sur Yiatou ?</H2>
                    <p> 
                        Pour toute question relative aux retours de produits, consultes <a href="/conditions">notre politique d’utilisation.</a> Nous nous efforçons de t’offrir la meilleure expérience d'achat possible et être à ton écoute.
                    </p>
                <H2>Comment puis-je contacter le service client de Yiatou ?</H2>
                    <p> 
                    Vous pouvez contacter notre service client directement sur WhatsApp Business via l'application Yiatou ou par email à l'adresse suivante : mbolo@yiatou.com. Notre équipe est disponible pour répondre à toutes vos questions et résoudre vos problèmes.
                    </p>
                <H2>Y a-t-il des frais pour l'utilisation de Yiatou ?</H2>
                    <p> 
                    L'utilisation de l'application Yiatou est gratuite. Tu ne payes que pour les articles que tu achètes et pour les frais de livraison. Il n'y a pas de frais cachés ou d'abonnement pour utiliser notre service.                    
                    </p>
                <H2>Comment gagner de l’argent ?</H2>
                    <p> 
                    Pour gagner de l’argent, c’est simple ! Choisis un article et partage son lien à tes proches avec un message qui les incite à commander l’article. Tu peux également mettre une image de l’article sur ton statut avec le prix et son lien pour augmenter tes chances de gagner des commissions.                    </p>
                
                    
            </div>
            

        </div>
        <div className="px-3 py-8 bg-green-100">
                <ButtonWhatsapp>
                    <span>Service client 24/7</span>
                </ButtonWhatsapp>
            </div>
    </PageLayout>
  )
}
const H2 = ({children})=>{
    return (
        <h2 className="font-medium text-lg py-4 px-2 text-[#333333]">{children}</h2>
    );
}