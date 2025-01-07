import MoreProduct from "../../components/Sections/MoreProduct";
import TopBarWithButtonBack from "../../components/topBar/TopBarWithButtonBack";
import PageLayout from "../layout/PageLayout";

const Retour = () => {
  return (
    <PageLayout topBar={<TopBarWithButtonBack link="/account" title="Politique de retour"/>}>
        <div className="px-4 py-12 text-justify bg-white">
            <div className="flex flex-col gap-3 font-medium text-[#333333]">
                <p>
                    Chez Yiatou, la satisfaction de nos clients est une priorité. Nous faisons tout pour garantir 
                    des produits de qualité à des prix compétitifs. Cependant, si un produit ne répond pas aux attentes, 
                    nous avons mis en place une politique de retour pour simplifier le processus.
                </p>
            </div>

            <H2>Conditions de retour</H2>
            <ul className="flex flex-col gap-3 list-disc px-4 text-[#333333]">
                <li className="font-medium">Délai de retour : 
                    <p className="font-normal">Tu peux initier une demande de retour dans les 2 jours suivant la réception de ta commande.</p>
                </li>
                <li className="font-medium">État du produit : 
                    <p className="font-normal">Le produit doit être retourné dans son état d'origine, avec tous les accessoires et l'emballage d'origine.</p>
                </li>
                <li className="font-medium">Produits non-éligibles : 
                    <p className="font-normal">Certains produits, comme les articles de soin personnel et les produits endommagés après réception, 
                    ne sont pas éligibles au retour pour des raisons d'hygiène et de sécurité.</p>
                </li>
            </ul>

            <H2>Processus de retour</H2>
            <ol className="flex flex-col gap-3 list-decimal px-4 text-[#333333]">
                <li className="font-medium">Demande de retour : 
                    <p className="font-normal">Rendez-vous dans l'onglet "Compte" de ton application Yiatou et contacte le service client pour faire une demande retour.</p>
                </li>
                <li className="font-medium">Validation de retour : 
                    <p className="font-normal">Une fois ta demande soumise, notre équipe l'examinera et tu recevras une confirmation si ton retour est approuvé.</p>
                </li>
                <li className="font-medium">Envoi du produit : 
                    <p className="font-normal">Tu seras guidé pour retourner le produit à notre entrepôt.</p>
                </li>
                <li className="font-medium">Remboursement : 
                    <p className="font-normal">Une fois le produit retourné et inspecté, le remboursement sera effectué selon ton mode de paiement initial 
                    ou sous forme de réduction pour tes futurs achats.</p>
                </li>
            </ol>

            <H2>Questions et Assistance</H2>
            <p className="font-medium text-[#333333]">
                Pour toute question supplémentaire concernant les retours, notre service client est à ta disposition 
                pour t'accompagner dans chaque étape.
            </p>

            <button 
                className="w-full py-2 mt-6 border-2 border-purple-500 rounded text-purple-500 font-medium hover:bg-purple-50 transition-colors"
                onClick={() => window.location.href = '/contact'}
                aria-label="Contacter le service client"
            >
                Contacter le service client
            </button>
        </div>
        <div className="-translate-y-6">
            <MoreProduct/>
        </div>
    </PageLayout>
  )
}

const H2 = ({children}) => {
    return (
        <h2 className="font-medium text-lg py-4 px-2 text-[#333333]">{children}</h2>
    );
}

export default Retour;