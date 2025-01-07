import React from 'react'
import PageLayout from '../layout/PageLayout'
import TopBarWithButtonBack from '../../components/topBar/TopBarWithButtonBack'

export default function AddPassword() {
  return (
    <PageLayout topBar={<TopBarWithButtonBack title={<p className="pr-4 text-center font-bold text-red-600">YIATOU</p>}/>}>
      <div className="px-4 py-10">
        <div>
          <h1 className="text-2xl font-bold text-gray-700">
            Creation du nouveau mot de passe
          </h1>
          <p className="font-medium py-3">Saisie ton nouveau mot de passe sur Yiatou</p>
        </div>
        <form className="flex flex-col gap-5">
            <input className="px-2 py-2 rounded border-2" type="password" name="password" placeholder="********"/>
            <button type="button" className="font-medium text-white bg-blue-800 rounded py-2">
                Je crée mon mot de passe
            </button>
        </form>
      </div>
    </PageLayout>
  )
}
