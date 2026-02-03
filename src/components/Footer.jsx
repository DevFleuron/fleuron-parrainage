import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-200">
      {/* ── Haut du footer : 3 colonnes ── */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-10 flex flex-col sm:flex-row items-start justify-between gap-10">
        {/* Logo */}
        <div className="shrink-0">
          <Image
            src="/logo-fleuron.webp"
            width={180}
            height={60}
            alt="Fleuron Industries"
            className="object-contain"
          />
        </div>

        {/* Liens téléchargement */}
        <div className="flex flex-col gap-3">
          <a href="#" className="text-sm text-blue-800 font-semibold underline hover:text-blue-900">
            Télécharger la plaquette ambassadeur
          </a>
          <a href="#" className="text-sm text-blue-800 font-semibold underline hover:text-blue-900">
            Télécharger le contrat
          </a>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-2">
          <p className="text-sm font-bold text-gray-800">
            Pour suivre vos parrainage contactez-nous :
          </p>
          <p className="text-sm text-gray-600">
            Par téléphone : <span className="font-medium">06 60 29 73 17</span>
          </p>
          <p className="text-sm text-gray-600">
            Par email :{' '}
            <a
              href="mailto:ambassadeurs@fleuronindustries.com"
              className="font-medium hover:underline"
            >
              ambassadeurs@fleuronindustries.com
            </a>
          </p>
        </div>
      </div>

      {/* ── Barre bas : copyright + liens légaux ── */}
      <div className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 lg:px-8 py-4 flex flex-col-2 sm:flex-row items-center justify-center gap-2 sm:gap-6 flex-wrap">
          <span className="text-xs text-gray-500">© Copyright 2024</span>
          <a href="#" className="text-xs text-gray-500 hover:text-gray-700 hover:underline">
            Mentions légales
          </a>
          <a href="#" className="text-xs text-gray-500 hover:text-gray-700 hover:underline">
            Charte de confidentialité
          </a>
          <a href="#" className="text-xs text-gray-500 hover:text-gray-700 hover:underline">
            Conditions générale de vente
          </a>
          <a href="#" className="text-xs text-gray-500 hover:text-gray-700 hover:underline">
            Fleuron Industries SaS
          </a>
        </div>
      </div>
    </footer>
  )
}
