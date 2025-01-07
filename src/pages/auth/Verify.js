import React from 'react'
import PageLayout from '../layout/PageLayout'
import TopBarWithButtonBack from '../../components/topBar/TopBarWithButtonBack'
import { Link } from 'react-router-dom'

export default function Verify() {
  return (
    <PageLayout topBar={<TopBarWithButtonBack title={<p className="pr-4 text-center font-bold text-red-600">YIATOU</p>}/>}>
      <div className="px-4 py-10">
        <div>
          <h1 className="text-2xl font-bold text-gray-700">Code de verification envoye par email</h1>
          <p className="font-md py-3">Saisie le code que nous avons envoyé sur l'email ang******@gmail.com</p>
        </div>
        <form className="flex flex-col gap-5">
            <input className="px-2 py-2 rounded border-2" type="password" name="password" placeholder="********"/>
            <button type="button" className="font-medium text-white bg-blue-800 rounded py-2">
               <Link to="/password">Je verifie</Link>
            </button>
        </form>
      </div>
    </PageLayout>
  )
}
