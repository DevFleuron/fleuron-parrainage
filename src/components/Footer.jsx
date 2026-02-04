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
    </footer>
  )
}
