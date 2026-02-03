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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleQtyChange = (id, value) => {
    setQuantities({ ...quantities, [id]: Number(value) })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Commande:', { ...formData, quantities })
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
        <input
          type="text"
          name="prenom"
          placeholder="Prénom"
          value={formData.prenom}
          onChange={handleChange}
          className={inputClass}
        />
        <input
          type="text"
          name="codeParrainage"
          placeholder="Code de parrainage"
          value={formData.codeParrainage}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      {/* ── Choix des supports ── */}
      <div className="flex flex-col gap-4">
        <p className="font-bold text-gray-800 text-center text-base">
          Choix du supports de communication :
        </p>

        <div className="flex flex-col gap-3">
          {supports.map((support) => (
            <div key={support.id} className="flex items-center gap-3 justify-center flex-wrap">
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

      {/* ── Bouton Envoyer ── */}
      <div className="flex justify-center pt-2">
        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg px-12 py-3 rounded-md transition-colors duration-200 shadow-md cursor-pointer"
        >
          Envoyer
        </button>
      </div>
    </form>
  )
}
