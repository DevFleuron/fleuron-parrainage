'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function FormParrainage() {
  const [formData, setFormData] = useState({
    nomAmbassadeur: '',
    villeAmbassadeur: '',
    nom: '',
    prenom: '',
    telephone: '',
    codePostal: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const inputClass =
    'border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-500 bg-white focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-gray-400'

  return (
    <div className="flex-1 max-w-lg w-full">
      {/* Title */}
      <h2 className="text-3xl font-semibold text-[#743d75] text-center mb-1">
        Formulaire de parrainage
      </h2>
      <div className="w-full flex justify-center items-center mx-auto center mb-2">
        <Image src="/sourlignement.webp" width={200} height={80} />
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        {/* ── L'Ambassadeur ── */}
        <div className="flex flex-col gap-2">
          <label className="text-base font-semibold text-gray-700">L&apos;Ambassadeur :</label>
          <input
            type="text"
            name="nomAmbassadeur"
            placeholder="Nom et Prénom de L'Ambassadeur*"
            value={formData.nomAmbassadeur}
            onChange={handleChange}
            className={inputClass}
          />
          <input
            type="text"
            name="villeAmbassadeur"
            placeholder="Ville de L'Ambassadeur*"
            value={formData.villeAmbassadeur}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        {/* ── Le parraîné ── */}
        <div className="flex flex-col gap-2">
          <label className="text-base font-semibold text-gray-700">Le parraîné :</label>
          <input
            type="text"
            name="nom"
            placeholder="Nom*"
            value={formData.nom}
            onChange={handleChange}
            className={inputClass}
          />
          <input
            type="text"
            name="prenom"
            placeholder="Prénom*"
            value={formData.prenom}
            onChange={handleChange}
            className={inputClass}
          />
          <input
            type="tel"
            name="telephone"
            placeholder="Téléphone*"
            value={formData.telephone}
            onChange={handleChange}
            className={inputClass}
          />
          <input
            type="text"
            name="codePostal"
            placeholder="Code Postal*"
            value={formData.codePostal}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        {/* ── CGU ── */}
        <p className="text-xs text-gray-500 leading-snug" style={{ textAlign: 'justify' }}>
          En Cliquant sur &quot;Valider&quot;, vous acceptez les Conditions générale
          d&apos;utilisation et la Politique de protection des données.
        </p>

        {/* ── Submit ── */}
        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg py-3 rounded-lg transition-colors duration-200 shadow-md mt-2 cursor-pointer"
        >
          Valider
        </button>
      </form>
    </div>
  )
}
