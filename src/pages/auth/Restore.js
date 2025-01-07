import { FaCheckCircle } from "react-icons/fa";
import PageLayout from "../layout/PageLayout";
import TopBarWithButtonBack from "../../components/topBar/TopBarWithButtonBack";
import { Link } from "react-router-dom";

export default function Restore() {
  return (
    <PageLayout topBar={<TopBarWithButtonBack title={<p className="text-center font-bold text-red-600">YIATOU</p>}/>}>
      <div className="px-4 py-10">
        <div>
          <h1 className="text-2xl font-bold text-gray-700">Reinitialises ton mot de passe</h1>
          <p className="font-md py-3">Saisis ton mail pour te reconnecter a ton compte</p>
        </div>
        <form className="flex flex-col gap-5">
            <input className="px-2 py-2 rounded border-2" type="email" name="mail" placeholder="Email"/>
            <button type="button" className="font-medium text-white bg-blue-800 rounded py-2"><Link to="/verify">Récupérer mon compte</Link></button>
            <div className="py-3 px-10 rounded-full flex gap-3 bg-white items-center font-medium mx-auto">
                <FaCheckCircle size={22} color="#00ff00"/>
                Code envoyé
            </div>
        </form>
      </div>
    </PageLayout>
  );
}
