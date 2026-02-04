'use client'
import { useState } from 'react'

const supports = [
  { id: 'courriers', label: 'Courriers imprimés A5', defaultQty: 50, hasPdf: true },
  { id: 'panneaux', label: 'Panneaux publicitaires 80×60', defaultQty: 1, hasPdf: false },
  { id: 'flyers', label: 'Flyers A5', defaultQty: 50, hasPdf: true },
  { id: 'affiche', label: 'Affiche A4', defaultQty: 10, hasPdf: true },
]

const qtyOptions = [1, 5, 10, 25, 50, 100, 200]

export default function FormCommande() {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    codeParrainage: '',
  })

  const [quantities, setQuantities] = useState(
    Object.fromEntries(supports.map((s) => [s.id, s.defaultQty]))
  )

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

  const handleQtyChange = (id, value) => {
    setQuantities({ ...quantities, [id]: Number(value) })
  }

  const validateForm = () => {
    const newErrors = {}

    // Tous les champs obligatoires
    if (!formData.nom.trim()) {
      newErrors.nom = 'Le nom est requis'
    }
    if (!formData.prenom.trim()) {
      newErrors.prenom = 'Le prénom est requis'
    }
    if (!formData.codeParrainage.trim()) {
      newErrors.codeParrainage = 'Le code de parrainage est requis'
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
      const response = await fetch('/api/send-commande', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, quantities }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Erreur lors de l'envoi")
      }

      // Succès : vider le formulaire et afficher le message
      setFormData({
        nom: '',
        prenom: '',
        codeParrainage: '',
      })
      setQuantities(Object.fromEntries(supports.map((s) => [s.id, s.defaultQty])))
      setSuccessMessage('✓ Votre commande a bien été envoyée !')

      // Masquer le message après 5 secondes
      setTimeout(() => setSuccessMessage(''), 5000)
    } catch (error) {
      setErrors({ submit: error.message })
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputClass =
    'w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-500 bg-white focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-gray-400'

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
      {/* ── Inputs Nom / Prénom / Code ── */}
      <div className="flex flex-col gap-3">
        <input
          type="text"
          name="nom"
          placeholder="Nom"
          value={formData.nom}
          onChange={handleChange}
          className={inputClass}
        />
        {errors.nom && <p className="text-red-500 text-xs -mt-2">{errors.nom}</p>}

        <input
          type="text"
          name="prenom"
          placeholder="Prénom"
          value={formData.prenom}
          onChange={handleChange}
          className={inputClass}
        />
        {errors.prenom && <p className="text-red-500 text-xs -mt-2">{errors.prenom}</p>}

        <input
          type="text"
          name="codeParrainage"
          placeholder="Code de parrainage"
          value={formData.codeParrainage}
          onChange={handleChange}
          className={inputClass}
        />
        {errors.codeParrainage && (
          <p className="text-red-500 text-xs -mt-2">{errors.codeParrainage}</p>
        )}
      </div>

      {/* ── Choix des supports ── */}
      <div className="flex flex-col gap-4">
        <p className="font-bold text-gray-800 text-center text-base">
          Choix du supports de communication :
        </p>

        <div className="flex items-center flex-col gap-3 w-full">
          {supports.map((support) => (
            <div key={support.id} className="flex items-center gap-3 justify-start w-full max-w-md">
              <select
                value={quantities[support.id]}
                onChange={(e) => handleQtyChange(support.id, e.target.value)}
                className="border border-gray-300 rounded-md px-2 py-1.5 text-sm bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-400 w-16 text-center"
              >
                {qtyOptions.map((qty) => (
                  <option key={qty} value={qty}>
                    {qty}
                  </option>
                ))}
              </select>

              <span className="text-sm text-gray-700">{support.label}</span>

              {support.hasPdf && (
                <a href="#" className="text-sm text-orange-500 hover:underline">
                  (PDF téléchargeable)
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

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

      {/* ── Bouton Envoyer ── */}
      <div className="flex justify-center pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg px-12 py-3 rounded-md transition-colors duration-200 shadow-md cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
        </button>
      </div>
    </form>
  )
}
