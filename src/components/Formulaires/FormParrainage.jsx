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

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    // Efface l'erreur du champ modifié
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' })
    }
  }

  const validateForm = () => {
    const newErrors = {}

    // Tous les champs obligatoires
    if (!formData.nomAmbassadeur.trim()) {
      newErrors.nomAmbassadeur = "Le nom de l'ambassadeur est requis"
    }
    if (!formData.villeAmbassadeur.trim()) {
      newErrors.villeAmbassadeur = "La ville de l'ambassadeur est requise"
    }
    if (!formData.nom.trim()) {
      newErrors.nom = 'Le nom du parraîné est requis'
    }
    if (!formData.prenom.trim()) {
      newErrors.prenom = 'Le prénom du parraîné est requis'
    }

    // Validation téléphone français (format: 0X XX XX XX XX ou 0XXXXXXXXX)
    const phoneRegex = /^0[1-9](\d{2}){4}$/
    const phoneClean = formData.telephone.replace(/\s/g, '')
    if (!formData.telephone.trim()) {
      newErrors.telephone = 'Le téléphone est requis'
    } else if (!phoneRegex.test(phoneClean)) {
      newErrors.telephone = 'Format invalide (ex: 06 12 34 56 78)'
    }

    // Validation code postal français (5 chiffres)
    const codePostalRegex = /^\d{5}$/
    if (!formData.codePostal.trim()) {
      newErrors.codePostal = 'Le code postal est requis'
    } else if (!codePostalRegex.test(formData.codePostal)) {
      newErrors.codePostal = 'Code postal invalide (5 chiffres)'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSuccessMessage('')

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/send-parrainage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Erreur lors de l'envoi")
      }

      // Succès : vider le formulaire et afficher le message
      setFormData({
        nomAmbassadeur: '',
        villeAmbassadeur: '',
        nom: '',
        prenom: '',
        telephone: '',
        codePostal: '',
      })
      setSuccessMessage('✓ Votre demande de parrainage a bien été envoyée !')

      // Masquer le message après 5 secondes
      setTimeout(() => setSuccessMessage(''), 5000)
    } catch (error) {
      setErrors({ submit: error.message })
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputClass =
    'border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-500 bg-white focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-gray-400'

  return (
    <div className="flex-1 max-w-lg w-full">
      {/* Title */}
      <h2 className="text-3xl font-semibold text-[#743d75] text-center">
        Formulaire de parrainage
      </h2>
      <div className="w-full flex justify-center items-center mx-auto center">
        <Image src="/sourlignement.webp" className="h-13 w-50" width={500} height={100} />
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
          {errors.nomAmbassadeur && (
            <p className="text-red-500 text-xs -mt-1">{errors.nomAmbassadeur}</p>
          )}
          <input
            type="text"
            name="villeAmbassadeur"
            placeholder="Ville de L'Ambassadeur*"
            value={formData.villeAmbassadeur}
            onChange={handleChange}
            className={inputClass}
          />
          {errors.villeAmbassadeur && (
            <p className="text-red-500 text-xs -mt-1">{errors.villeAmbassadeur}</p>
          )}
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
          {errors.nom && <p className="text-red-500 text-xs -mt-1">{errors.nom}</p>}
          <input
            type="text"
            name="prenom"
            placeholder="Prénom*"
            value={formData.prenom}
            onChange={handleChange}
            className={inputClass}
          />
          {errors.prenom && <p className="text-red-500 text-xs -mt-1">{errors.prenom}</p>}
          <input
            type="tel"
            name="telephone"
            placeholder="Téléphone*"
            value={formData.telephone}
            onChange={handleChange}
            className={inputClass}
          />
          {errors.telephone && <p className="text-red-500 text-xs -mt-1">{errors.telephone}</p>}
          <input
            type="text"
            name="codePostal"
            placeholder="Code Postal*"
            value={formData.codePostal}
            onChange={handleChange}
            className={inputClass}
            maxLength={5}
          />
          {errors.codePostal && <p className="text-red-500 text-xs -mt-1">{errors.codePostal}</p>}
        </div>

        {/* ── CGU ── */}
        <p className="text-xs text-gray-500 leading-snug" style={{ textAlign: 'justify' }}>
          En Cliquant sur &quot;Valider&quot;, vous acceptez les Conditions générale
          d&apos;utilisation et la Politique de protection des données.
        </p>

        {/* Message de succès */}
        {successMessage && (
          <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-sm">
            {successMessage}
          </div>
        )}

        {/* Erreur générale */}
        {errors.submit && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
            {errors.submit}
          </div>
        )}

        {/* ── Submit ── */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg py-3 rounded-lg transition-colors duration-200 shadow-md mt-2 cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Envoi en cours...' : 'Valider'}
        </button>
      </form>
    </div>
  )
}
