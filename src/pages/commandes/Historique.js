import { NavLink, Outlet } from "react-router-dom";
import TopBarTitle from "../../components/topBar/TopBarTitle";
import PageLayout from "../layout/PageLayout";
import BottomBar from "../../components/bottomBar/BottomBar";
import TopBarWithButtonBack from "../../components/topBar/TopBarWithButtonBack";

export default function Historique() {
  return (
    <PageLayout className="bg-background" bottomBar={<BottomBar/>} topBar={<TopBarWithButtonBack link='/account' title="Mes commandes"/>}>
        <ul className="flex justify-center items-center gap-6 py-4 mt-10">
            <li>
                <NavLink to="historique" className='nav-link'>Récents</NavLink>
            </li>
            <li>
                <NavLink to="historiques" className="nav-link">Historique</NavLink>
            </li>
        </ul>
        <Outlet/>
    </PageLayout>
  )
}