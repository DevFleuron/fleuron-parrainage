'use client'
import { useState } from 'react'

export default function FormApéritif() {
  const [ambassadeur, setAmbassadeur] = useState('')
  const [participants, setParticipants] = useState(['', '', ''])

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')

  const handleAddParticipant = () => {
    setParticipants([...participants, ''])
  }

  const handleRemoveParticipant = (index) => {
    setParticipants(participants.filter((_, i) => i !== index))
  }

  const handleParticipantChange = (index, value) => {
    const updated = [...participants]
    updated[index] = value
    setParticipants(updated)

    // Efface l'erreur du participant modifié
    if (errors[`participant_${index}`]) {
      const newErrors = { ...errors }
      delete newErrors[`participant_${index}`]
      setErrors(newErrors)
    }
  }

  const validateForm = () => {
    const newErrors = {}

    // Ambassadeur obligatoire
    if (!ambassadeur.trim()) {
      newErrors.ambassadeur = "Le nom de l'ambassadeur est requis"
    }

    // Au moins un participant doit être rempli
    const filledParticipants = participants.filter((p) => p.trim())
    if (filledParticipants.length === 0) {
      newErrors.participants = 'Au moins un participant est requis'
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
      // Filtrer les participants vides
      const filledParticipants = participants.filter((p) => p.trim())

      const response = await fetch('/api/send-aperitif', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ambassadeur, participants: filledParticipants }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Erreur lors de l'envoi")
      }

      // Succès : vider le formulaire
      setAmbassadeur('')
      setParticipants(['', '', ''])
      setSuccessMessage("✓ Votre demande d'apéritif/petit déjeuner a bien été envoyée !")

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
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md">
      {/* ── L'Ambassadeur ── */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold text-gray-700">L&apos;Ambassadeur :</label>
        <input
          type="text"
          placeholder="Nom et Prénom de L'Ambassadeur*"
          value={ambassadeur}
          onChange={(e) => {
            setAmbassadeur(e.target.value)
            if (errors.ambassadeur) {
              setErrors({ ...errors, ambassadeur: '' })
            }
          }}
          className={inputClass}
        />
        {errors.ambassadeur && <p className="text-red-500 text-xs -mt-1">{errors.ambassadeur}</p>}
      </div>

      {/* ── Les participants ── */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold text-gray-700">Les participants :</label>
        {participants.map((participant, i) => (
          <div key={i} className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Nom et Prénom"
              value={participant}
              onChange={(e) => handleParticipantChange(i, e.target.value)}
              className={inputClass}
            />
            {/* Bouton supprimer — apparaît seulement si plus d'un participant */}
            {participants.length > 1 && (
              <button
                type="button"
                onClick={() => handleRemoveParticipant(i)}
                className="text-gray-400 hover:text-red-500 transition-colors duration-200 shrink-0 text-xl leading-none"
              >
                ×
              </button>
            )}
          </div>
        ))}
        {errors.participants && <p className="text-red-500 text-xs">{errors.participants}</p>}

        {/* + ajouter un participant */}
        <button
          type="button"
          onClick={handleAddParticipant}
          className="text-sm text-orange-500 hover:text-orange-600 self-start mt-1 font-medium"
        >
          + ajouter un participant
        </button>
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
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg px-12 py-3 rounded-md transition-colors duration-200 shadow-md disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
        </button>
      </div>
    </form>
  )
}
