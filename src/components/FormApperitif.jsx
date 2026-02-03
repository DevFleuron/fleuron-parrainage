'use client'
import { useState } from 'react'

export default function FormApéritif() {
  const [ambassadeur, setAmbassadeur] = useState('')
  const [participants, setParticipants] = useState(['', '', ''])

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
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Soirée:', { ambassadeur, participants })
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
          onChange={(e) => setAmbassadeur(e.target.value)}
          className={inputClass}
        />
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

        {/* + ajouter un participant */}
        <button
          type="button"
          onClick={handleAddParticipant}
          className="text-sm text-orange-500 hover:text-orange-600 self-start mt-1 font-medium"
        >
          + ajouter un participant
        </button>
      </div>

      {/* ── Bouton Envoyer ── */}
      <div className="flex justify-center pt-2">
        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg px-12 py-3 rounded-md transition-colors duration-200 shadow-md"
        >
          Envoyer
        </button>
      </div>
    </form>
  )
}
