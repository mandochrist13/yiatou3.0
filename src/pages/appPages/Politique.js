import TopBarWithButtonBack from "../../components/topBar/TopBarWithButtonBack";
import PageLayout from "../layout/PageLayout";
import ButtonWhatsapp from "../../components/Buttons/ButtonWhatsapp";

export default function Politique() {
  return (
    <PageLayout topBar={<TopBarWithButtonBack link="/account" title="Politique de confidentialité"/>}>
        <div className="px-3 py-12 bg-white text-justify">
            <p className="text-gray-600 text-sm">Dernière mise à jour : 01/12/2024</p>
            <div className="text-gray-600 mt-2">
                <p className="font-medium mb-4">
                    Chez Yiatou, nous prenons la vie privée au sérieux. Cette politique de confidentialité décrit les types d'informations personnelles que nous collectons, comment nous les utilisons, les partageons et les protégeons.
                </p>

                <H2>1. Informations Collectées</H2>
                <H3>1.1 Informations Personnelles :</H3>
                <p className="mb-3">Nous collectons les informations suivantes lorsque tu utilises notre application :</p>
                <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>Civilité</li>
                    <li>Noms et prénoms</li>
                    <li>Date de naissance</li>
                    <li>Adresses de livraison</li>
                    <li>Ville</li>
                    <li>Numéro de téléphone</li>
                    <li>Adresse email</li>
                    <li>Autres informations nécessaires en cas de besoin</li>
                </ul>

                <H3>1.2 Informations de Paiement :</H3>
                <p className="mb-3">Nous collectons des informations de paiement nécessaires pour traiter les transactions effectuées via Airtel Money ou à la livraison.</p>
                <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>Situation sociale professionnelle</li>
                    <li>Numéro Airtel Money</li>
                    <li>Nom rattaché au compte Airtel Money</li>
                </ul>

                <H3>1.3 Outils d'Analyse :</H3>
                <p className="mb-4">Nous utilisons Google Analytics, Google Pixel, Facebook Pixel et Hotjar pour analyser l'utilisation de notre application et améliorer nos services.</p>

                <H3>1.4 Cookies :</H3>
                <p className="mb-4">Yiatou utilise des cookies pour améliorer l'expérience, personnaliser tes sessions, optimiser les performances et cibler les publicités. Ces cookies permettent de mémoriser tes préférences, suivre tes interactions et mesurer l'efficacité des campagnes publicitaires, tout en respectant les réglementations sur la confidentialité des données.</p>

                <H2>2. Utilisation des Informations</H2>
                <p className="mb-3">Nous utilisons tes informations personnelles pour :</p>
                <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>Traiter et livrer tes commandes</li>
                    <li>Faciliter les paiements en ligne</li>
                    <li>Gérer ton compte et fournir un service client</li>
                    <li>Envoyer des notifications sur tes commandes</li>
                    <li>Améliorer et personnaliser notre application</li>
                    <li>Comprendre ton utilisation de Yiatou et te proposer des offres adaptées</li>
                    <li>Exécuter le programme de recommandation et calculer tes commissions</li>
                </ul>

                <H2>3. Partage des Informations</H2>
                <p className="mb-3">Nous ne partageons tes informations personnelles qu'avec :</p>
                <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>Nos partenaires de livraison pour garantir la livraison de tes commandes</li>
                    <li>Prestataires de services de paiement pour traiter tes transactions</li>
                    <li>Les outils d'analyse pour améliorer nos services</li>
                    <li>Les autorités légales si requis par la loi</li>
                </ul>

                <H2>4. Sécurité des Données</H2>
                <p className="mb-4">Nous utilisons des mesures de sécurité avancées pour protéger tes informations personnelles contre l'accès non autorisé, la modification, la divulgation ou la destruction.</p>

                <H2>5. Tes Droits</H2>
                <p className="mb-3">Tu as le droit de :</p>
                <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>Accéder à tes informations personnelles</li>
                    <li>Demander la correction de toutes informations inexactes</li>
                </ul>
                <p className="mb-4">Pour exercer tes droits, contacte-nous par email à <a href="mailto:mbolo@yiatou.com" className="text-blue-600 hover:underline">mbolo@yiatou.com</a>.</p>

                <H2>6. Modifications de la Politique de Confidentialité</H2>
                <p className="mb-4">Nous nous réservons le droit de mettre à jour cette politique de confidentialité au besoin et de manière unanime. Toute modification sera publiée sur cette page avec une nouvelle date de mise à jour.</p>
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

const H2 = ({children}) => (
    <h2 className="font-semibold text-xl py-4 text-gray-800">{children}</h2>
);

const H3 = ({children}) => (
    <h3 className="font-medium text-lg py-2 text-gray-700">{children}</h3>
);