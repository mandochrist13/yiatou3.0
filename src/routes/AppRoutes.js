import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Auth from "../pages/auth/Auth";
import Home from "../pages/home/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ProduitDetails from "../pages/produitDetails/ProduitDetails";
import Commandes from "../pages/commandes/Commandes";
import Messages from "../pages/messages/Messages";
import Historique from "../pages/commandes/Historique";
import CommandeToDay from "../pages/commandes/CommandeToDay";
import CommandeHistorique from "../pages/commandes/CommandeHistorique";
import MonArgent from "../pages/money/MonArgent";
import Account from "../pages/comptes/Account";
import Informations from "../pages/comptes/Informations";
import About from "../pages/appPages/About";
import Services from "../pages/appPages/Services";
import Restore from "../pages/auth/Restore";
import Verify from "../pages/auth/Verify";
import AddPassword from "../pages/auth/AddPassword";
import Politique from "../pages/appPages/Politique";
import Conditions from "../pages/appPages/Conditions";
import Promises from "../pages/appPages/Promises";
import Cart from "../pages/cart/Cart";
import EchantillonDetails from "../pages/echantillonDetails/EchantillonDetails";
import PaymentConfirmation from "../pages/payment-confirmation/PaymentConfirmation";
import Affiliation from "../pages/appPages/Affiliation";
import Retour from "../pages/appPages/Retour";
import Business from "../pages/appPages/Business";
import Electronique from "../pages/categories/Electronique";
import Femme from "../pages/categories/Femme";
import Beaute from "../pages/categories/Beaute";
import Homme from "../pages/categories/Homme";


const AppRoutes = () => {
    return (
        <Router>
            <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/produit-details/:id" element={<ProduitDetails/>}/>
            <Route path="/commandes" element={<Commandes/>}/>
            <Route path="/messages" element={<Messages/>}/>
            <Route path="/historique" element={<Historique/>} >
                <Route path="historique" element={<CommandeToDay/>}/>
                <Route path="historiques" element={<CommandeHistorique/>}/>
            </Route>
            <Route path="/money" element={<MonArgent/>}/>
            <Route path="/account" element={<Account/>}/>
            <Route path="/informations" element={<Informations/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/conditions" element={<Conditions/>}/>
            <Route path="/politique" element={<Politique/>}/>
            <Route path="/restore" element={<Restore/>}/>
            <Route path="/verify" element={<Verify/>}/>
            <Route path="/password" element={<AddPassword/>}/>
            <Route path="/promises" element={<Promises/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/echantillonDetails/:id" element={<EchantillonDetails />} />
            <Route path="/payment-confirmation" element={<PaymentConfirmation />} />
            <Route path="/affiliation" element={<Affiliation/>}/>
            <Route path="/retour" element={<Retour/>}/>
            <Route path="/business" element={<Business/>}/>
            <Route path="/electronique" element={<Electronique/>}/>
            <Route path="/femme" element={<Femme/>}/>
            <Route path="/beaute" element={<Beaute/>}/>
            <Route path="/homme" element={<Homme/>}/>
            </Routes>
        </Router>
    );
}

export default AppRoutes;
