import TopBarWithButtonBack from "../../components/topBar/TopBarWithButtonBack";
import PageLayout from "../layout/PageLayout";
import ButtonWhatsapp from "../../components/Buttons/ButtonWhatsapp";
import BulletList from "../../components/lists/BulletList";

export default function Conditions() {
  const userConductRules = [
    "Ne pas utiliser l'application à des fins illégales ou non autorisées",
    "Ne pas interférer avec le bon fonctionnement de l'application",
    "Ne pas harceler, abuser ou nuire à d'autres utilisateurs",
    "Ne pas spammer des gens avec tes liens de recommandation",
    "Ne pas chercher à obtenir des avantages illégalement",
    "Ne pas garder l'argent d'une commission en cas de retour produit du client",
    "Ne pas créer un deuxième compte pour gagner des avantages",
    "Ne pas salir le nom de Yiatou sur les réseaux sociaux en cas de litige sans chercher une solution à l'amiable",
    "Ne pas accuser Yiatou sans avoir contacté Yiatou pour remonter une préoccupation",
    "Ne pas laisser quelqu'un parler mal de Yiatou, sans lui demander de contacter notre service client pour résoudre son problème"
  ];

  return (
    <PageLayout topBar={<TopBarWithButtonBack link="/account" title="Termes et Conditions d'utilisation"/>}>
        <div className="px-3 py-12 bg-white">
        <p className="text-gray-600 text-sm">Dernière mise à jour : 01/12/2024</p>
            <div className="mb-6 mt-2">
                <p className="text-gray-700 font-medium">
                    Bienvenue sur Yiatou! En utilisant notre application, tu acceptes les termes et conditions suivants.
                </p>
            </div>

            <ol className="list-decimal space-y-6 pl-4">
                <li>
                    <H2>Utilisation de l'Application</H2>
                    <p className="text-gray-600">
                        Yiatou te permet de découvrir et d'acheter des articles de qualité et à des prix de gros auprès des fournisseurs en Chine. Tu peux également partager des articles et gagner de l'argent grâce à notre programme de recommandation.
                    </p>
                </li>

                <li>
                    <H2>Inscription et Compte Utilisateur</H2>
                    <p className="text-gray-600">
                        Pour utiliser Yiatou, tu dois créer un compte en fournissant des informations exactes et complètes. Tu es responsable de la confidentialité de tes identifiants de connexion et de toutes les activités effectuées sur votre compte.
                    </p>
                </li>

                <li>
                    <H2>Achats et Paiements</H2>
                    <p className="text-gray-600">
                        Tu peux commander des produits en payant par Airtel Money ou à la livraison.
                    </p>
                </li>

                <li>
                    <H2>Programme de Recommandation</H2>
                    <p className="text-gray-600">
                        En partageant des articles via ton lien de recommandation unique, tu peux gagner une commission chaque fois qu'un ami effectue un achat. Les détails du programme et les commissions sont décrits dans ton compte utilisateur via l'onglet "Affiliation".
                    </p>
                </li>

                <li>
                    <H2>Récompenses et Annulation</H2>
                    <div className="space-y-3 text-gray-600">
                        <p>
                            Yiatou te paiera tes commissions de manière quasi instantanée la plupart du temps pour les produits disponibles au sein de son entrepôt local (échantillons). Pour les produits qui proviennent directement de notre entrepôt en Chine, les commissions sont payées entre 24h à 48h après la livraison de la commande.
                        </p>
                        <p>
                            En cas de retour produit de la part du client, la commission reçue devra être annulée, afin que Yiatou puisse rembourser le client. Par défaut, Yiatou retire le montant de ton solde et t'informe par notification et si le solde n'est pas suffisant, le solde de ton compte s'il est supérieur ou égale à 500 FCFA sera débité automatiquement.
                        </p>
                        <p>
                            Lorsque Yiatou t'informe d'une telle situation, tu dois automatiquement rembourser Yiatou dans un délai de 1 heure si ton solde est vide au moment de la réception de la notification. Si cela n'est pas fait, ton compte sera débité du montant que tu devrais rembourser automatiquement lors de la prochaine commission avec une pénalité de 50% du montant non remboursé dans les délais.
                        </p>
                        <p className="font-bold text-red-600">
                            NB : Ton compte pourrait être suspendu en cas de mauvaise fois observé sur ton compte.
                        </p>
                        <p>
                            Retraits des commissions : Tu dois avoir au minimum 1.000 FCFA pour retirer de l'argent.
                        </p>
                    </div>
                </li>

                <li>
                    <H2>Retour produit et remboursement</H2>
                    <p className="text-gray-600">
                        Les produits achetés sur Yiatou peuvent être retournés dans un délai de 24 heures, à condition qu'ils soient dans leur état d'origine. Les clients peuvent retourner les produits au siège de Yiatou dans les 24 heures et se faire rembourser le montant total de la commande (sans frais de livraison pour les échantillons).
                    </p>
                </li>

                <li>
                    <H2>Livraison</H2>
                    <p className="text-gray-600">
                        Yiatou s'engage à livrer toutes les commandes entre 9-14 jours pour les produits simples, entre 21-30 jours pour les produits liquides et en moins de 2 heures pour les échantillons. Pour cela, tu dois fournir des adresses de livraison précises pour garantir une livraison rapide et efficace.
                    </p>
                </li>

                <li>
                    <H2>Conduite de l'Utilisateur</H2>
                    <p className="text-gray-600 mb-3">En utilisant Yiatou, tu acceptes de :</p>
                    <BulletList items={userConductRules} />
                </li>

                <li>
                    <H2>Propriété Intellectuelle</H2>
                    <p className="text-gray-600">
                        Tous les contenus et matériaux sur Yiatou, y compris les textes, graphiques, logos, images, et les conceptes sont la propriété de Yiatou et protégés par les lois sur la propriété intellectuelle en République Gabonaise. Toute entrave à cela, aussi diverse et infime soit-elle, obligera Yiatou à prendre les mesures nécessaires fermes qui s'imposent à la situation, dans le but de défendre et de protéger ses intérêts vitaux.
                    </p>
                </li>

                <li>
                    <H2>Résiliation</H2>
                    <p className="text-gray-600">
                        Nous nous réservons le droit de suspendre ou de résilier ton compte à tout moment si tu violes ces conditions d'utilisation.
                    </p>
                </li>

                <li>
                    <H2>Limitation de Responsabilité</H2>
                    <div className="space-y-3 text-gray-600">
                        <p>
                            Yiatou ne sera pas responsable des dommages indirects, consécutifs ou punitifs résultant de ton utilisation de notre application. Notre responsabilité totale ne dépassera pas le montant que tu as payé pour les produits achetés sur Yiatou.
                        </p>
                        <p>
                            En cas de litige, tu acceptes de régler cela à l'amiable avec Yiatou à son siège social dans un intervalle de 1-10 jours ouvrés maximum. Si une solution à l'amiable n'est pas trouvée, la voie juridique pourrait être une solution et cela dans toute la transparence nécessaire.
                        </p>
                        <p className="font-bold  text-red-600">
                            IMPORTANT : Nous tenons à t'informer que toutes maladresses, manque de sagesse, de bonne fois, de responsabilité, d'honnêteté, de transparence, de respect, de compassion ou d'esprit critique de ta part qui portera préjudice à l'image ou au fonctionnement de Yiatou selon notre avis ne restera pas sans réponse.
                        </p>
                    </div>
                </li>

                <li>
                    <H2>Modifications des Conditions d'Utilisation</H2>
                    <p className="text-gray-600">
                        Nous pouvons modifier ces conditions d'utilisation à tout moment. Les modifications seront publiées sur cette page avec une nouvelle date de mise à jour. En continuant à utiliser l'application, tu acceptes les conditions modifiées.
                    </p>
                </li>
            </ol>

            <div className="mt-6 text-gray-600">
                <p>
                    Pour toute question ou préoccupation concernant ces politiques, contactes-nous l'adresse email <a href="mailto:mbolo@yiatou.com" className="text-blue-600 hover:underline">mbolo@yiatou.com</a>.
                </p>
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

const H2 = ({children}) => {
    return (
        <h2 className="font-semibold text-lg mb-2 text-gray-800">
            {children}
        </h2>
    );
}