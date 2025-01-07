import React, { useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserLock } from 'react-icons/fa';

const PersonnalInfoForm = () => {
  const navigate = useNavigate();

  const handleFocus = useCallback((e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/commandes');
  };

  return (
    <>
      <div className="mb-1">
        <p className="text-center text-sm text-gray-700 -translate-y-7">
          Ces informations permettent à Yiatou de traiter tes commandes et
          restent privées.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="mt-3 flex flex-col gap-3">
        <div className="flex gap-4 items-center">
          <div className="flex gap-2 items-center">
            <input type="radio" name="sexe" id="m" />
            <label htmlFor="m">Monsieur</label>
          </div>
          <div className="flex gap-2 items-center">
            <input type="radio" name="sexe" id="f" />
            <label htmlFor="f">Madame</label>
          </div>
        </div>
        <input
          type="text"
          name="lastname"
          placeholder="Nom"
          className="border px-2 py-2 rounded w-full"
          onFocus={handleFocus}
        />
        <input
          type="text"
          name="firstname"
          placeholder="Prenom"
          className="border px-2 py-2 rounded w-full"
          onFocus={handleFocus}
        />
        <input
          type="tel"
          name="phone"
          placeholder="N de telephone appel"
          className="border px-2 py-2 rounded w-full"
          onFocus={handleFocus}
        />
        <textarea
          name="adresse"
          placeholder="Adresse de livraison"
          className="border px-2 py-2 rounded w-full min-h-[100px] resize-none"
          onFocus={handleFocus}
        ></textarea>
        
        <button
          type="submit"
          className="w-full bg-main-button text-white py-3 rounded-lg font-semibold transition-colors mt-4"
        >
          Enregistrer
        </button>
      </form>
      <Link
        to="#"
        className="flex justify-center items-center gap-2 py-4 text-gray-400"
      >
        <FaUserLock />
        <span className="underline">
          <Link to="/politique">
            Voir notre politique de confidentialité
          </Link>
        </span>
      </Link>
    </>
  );
};

export default PersonnalInfoForm; 