'use client'
import Image from 'next/image'
import FormParrainage from '@/components/Formulaires/FormParrainage'
import FormCommande from '@/components/Formulaires/FormCommande'
import FormApéritif from '@/components/Formulaires/FormApperitif'
import Footer from '@/components/Footer'

export default function AmbassadorPage() {
  const installations = [
    {
      image: '/panneaux-solaires.webp',
      description: (
        <div className="text-sm w-full">
          <p className="font-bold text-black mb-2 text-center">Panneaux photovoltaïques</p>
          <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-gray-700">
            <span className="whitespace-nowrap">
              3KwC = 7 900 € → <span className="font-bold text-black">Bonus 150 €</span>
            </span>
            <span className="whitespace-nowrap">
              12KwC = 18 900 € → <span className="font-bold text-black">Bonus 600 €</span>
            </span>
            <span className="whitespace-nowrap">
              6KwC = 11 900 € → <span className="font-bold text-black">Bonus 300 €</span>
            </span>
            <span className="whitespace-nowrap">
              15KwC = 21 900 € → <span className="font-bold text-black">Bonus 750 €</span>
            </span>
            <span className="whitespace-nowrap">
              9KwC = 14 900 € → <span className="font-bold text-black">Bonus 450 €</span>
            </span>
            <span className="whitespace-nowrap">
              18KwC = 26 900 € → <span className="font-bold text-black">Bonus 900 €</span>
            </span>
          </div>
          <p className="text-xs italic text-gray-500 mt-2 text-center">
            (pose et démarches administratives incluses)
          </p>
        </div>
      ),
    },
    {
      image: '/MaisonFleuron - LP.webp',
      description: (
        <div className="text-sm w-full">
          <p className="font-bold text-black mb-2 text-center">Maison Fleuron</p>
          <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-gray-700">
            <span className="whitespace-nowrap">
              20 m² : 34 900 € HT → <span className="font-bold text-black">Bonus 250 €</span>
            </span>
            <span className="whitespace-nowrap">
              80 m² : 89 900 € HT → <span className="font-bold text-black">Bonus 900 €</span>
            </span>
            <span className="whitespace-nowrap">
              44 m² : 44 900 € HT → <span className="font-bold text-black">Bonus 500 €</span>
            </span>
            <span className="whitespace-nowrap">
              100 m² : 124 900 € HT → <span className="font-bold text-black">Bonus 1 050 €</span>
            </span>
            <span className="whitespace-nowrap">
              60 m² : 79 900 € HT → <span className="font-bold text-black">Bonus 750 €</span>
            </span>
            <span className="whitespace-nowrap">
              120 m² : 134 900 € HT → <span className="font-bold text-black">Bonus 1 200 €</span>
            </span>
          </div>
        </div>
      ),
    },

    {
      image: '/ITE-LP.webp',
      description: (
        <div className="text-sm w-full text-center">
          <p className="text-gray-700">
            Isolation des murs par l&apos;extérieur (ITE) ={' '}
            <span className="font-bold text-black">2 €/m²</span>
          </p>
        </div>
      ),
    },
    {
      image: '/batterie-externe-solaire.webp',
      description: (
        <div className="text-sm w-full text-center">
          <p className="font-bold text-black mb-2">
            Batterie de stockage = <strong>150 €</strong>
          </p>
        </div>
      ),
    },

    {
      image: '/PAC - LP.webp',
      description: (
        <div className="text-sm w-full text-center">
          <p className="text-gray-700">
            Pompe à chaleur = <span className="font-bold text-black">150 €</span>
          </p>
        </div>
      ),
    },
  ]

  const enseignes = [
    { name: 'E.Leclerc', logo: '/Logo-E.Leclerc.webp' },
    { name: 'Leroy Merlin', logo: '/Logo_LeroyMerlin.webp' },
    { name: 'Fnac', logo: '/Logo-Fnac.webp' },
    { name: 'Auchan', logo: '/Logo-Auchan.webp' },
    { name: 'Boulanger', logo: '/Logo-Boulanger.webp' },
    { name: 'Amazon', logo: '/Logo-Amazon.webp' },
  ]

  const tvLogos = [
    { name: 'TFI', logo: '/logo-tfi.webp' },
    { name: 'RMC Découverte', logo: '/logo-rmc-decouverte.webp' },
    { name: 'BFMTV', logo: '/logo-bfmtv.webp' },
    { name: 'LCI', logo: '/logo-lci.webp' },
    { name: 'CNews', logo: '/logo-cnews.webp' },
    { name: 'RMC Story', logo: '/logo-rmc-story.webp' },
  ]
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* ── Header / Logo ── */}
      {/* Wrapper full-width pour que l'image absolute se refera à lui */}
      <section className="w-full flex flex-col lg:flex-row lg:pb-20 pt-5">
        {/* ── Colonne gauche ── */}
        <div className="w-full lg:w-1/2 flex flex-col">
          <Image
            src="/logo-fleuron.webp"
            alt="Logo Fleuron Industries"
            height={60}
            width={240}
            className="px-4 lg:px-8 lg:h-auto"
          />
          {/* Texte avec padding */}
          <div className="px-4 lg:px-8 py-6 lg:py-10 flex flex-col xl:ml-15  gap-4">
            <h1
              className="text-4xl lg:text-6xl font-extrabold leading-tight bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(135deg, #72417d 0%, #f19312 100%)',
              }}
            >
              Votre interface Ambassadeur
            </h1>

            <p className="text-base md:text-lg leading-relaxed text-left font-semibold">
              Ce formulaire permet d&apos;horodater votre demande de parrainage afin de déclencher
              l&apos;attribution de vos gains.
            </p>
          </div>

          {/* Image — pas de padding, colle à gauche */}
          <div className="w-[85%] mx-0 lg:w-full  overflow-hidden">
            <Image
              src="/image-hero1.webp"
              alt="Maison avec panneaux solaires"
              width={800}
              height={650}
              className="w-full h-56 sm:h-90 sm:w-190 lg:h-110 rounded-r-2xl object-cover"
              priority
            />
          </div>
        </div>

        {/* ── Colonne droite : formulaire ── */}
        <div className="w-full lg:w-1/2 px-4 lg:px-12 py-6 lg:py-0 flex items-start justify-center">
          <div className="w-full max-w-lg">
            <FormParrainage />
          </div>
        </div>
      </section>

      {/* Section des installations réalisées */}
      <section className="bg-white py-12 px-4 lg:px-8">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-8">
          {/* ── Titre ── */}
          <h2
            className="text-2xl md:text-4xl font-extrabold text-center leading-snug bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(135deg, #72417d 0%, #f19312 100%)',
            }}
          >
            Complétez vos revenus par installations réalisées !
          </h2>

          {/* ── Sous-titre ── */}
          <h3 className="text-lg md:text-2xl font-bold uppercase tracking-wide text-center">
            Pour les particuliers et professionnels
          </h3>

          {/* ── Grille 2x2 installations ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {installations.map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-3">
                <div
                  className="rounded-xl p-0.5 w-full shadow-md"
                  style={{
                    background: 'linear-gradient(135deg, #72417d 0%, #f19312 100%)',
                  }}
                >
                  {/* Image avec bg-white pour "couper" le gradient et ne laisser que la bordure */}
                  <div className="rounded-[9px] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={`Installation ${i + 1}`}
                      width={400}
                      height={280}
                      className="w-full h-70 object-cover"
                    />
                  </div>
                </div>
                <div className="text-sm text-gray-600 text-center max-w-lg">{item.description}</div>
              </div>
            ))}
          </div>

          {/* ── Bloc cartes cadeaux ── */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:gap-20 rounded-2xl px-6 py-2 w-full">
            {/* Visuel carte cadeau placeholder */}
            <div className="shrink-0">
              <Image
                src="/Carte-Cadeau-LP.webp"
                alt="Carte cadeau multi-enseignes valable dans plus de 200 enseignes"
                width={160}
                height={80}
                className="object-contain"
              />
            </div>

            {/* Texte */}
            <div className="flex flex-col gap-1 text-left sm:text-left">
              <p className="font-bold text-gray-800 text-base md:text-lg">
                Recevez vos cartes cadeaux multi-enseignes
              </p>
              <p className="text-base md:text-lg text-gray-500">
                Valables en magasin et sur internet
              </p>
              <p className="text-base md:text-lg text-gray-500">Dans plus de 200 enseignes</p>
            </div>
          </div>

          {/* ── Logos enseignes ── */}
          <div className="flex flex-wrap items-center justify-center md:justify-between gap-8 w-full">
            {enseignes.map((enseigne, i) => (
              <div key={i} className="flex items-center justify-center">
                <Image
                  src={enseigne.logo}
                  alt={enseigne.name}
                  width={120}
                  height={40}
                  className="object-contain"
                />
              </div>
            ))}
          </div>

          {/* ── Phrase finale ── */}
          <p className="text-base md:text-lg text-gray-600 text-center max-w-md">
            Certains Ambassadeurs génèrent déjà{' '}
            <span className="font-bold text-black">
              plusieurs milliers d&apos;euros chaque mois
            </span>
            . Et vous ?
          </p>
        </div>
      </section>

      <section className="bg-gray-100 py-14 px-4 lg:px-8">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-8">
          {/* ── Titre ── */}
          <div className="flex flex-col items-center">
            <h2 className="w-full text-2xl sm:text-4xl font-bold text-center text-[#743d75]">
              Commander gratuitement vos communications
            </h2>
            {/* Trait orange sous le titre */}
            <div className="w-full flex justify-center items-center mx-auto center">
              <Image
                src="/sourlignement.webp"
                className="h-20 w-60 lg:h-20 lg:w-70"
                width={280}
                height={80}
              />
            </div>
          </div>

          {/* ── Formulaire ── */}
          <FormCommande />
        </div>
      </section>

      <section className="bg-white py-14 px-4 lg:px-8">
        <div className="max-w-4xl mx-auto flex flex-col gap-10">
          {/* ── Titre + trait ── */}
          <div className="flex flex-col w-full gap-3">
            <h2
              className="text-2xl sm:text-4xl font-extrabold leading-tight bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(135deg, #72417d 0%, #f19312 100%)',
              }}
            >
              Une visibilité exceptionnelle
            </h2>
            <div className="w-92 h-1 bg-[#f19312]  rounded-full"></div>
          </div>

          {/* ── Bloc TikTok ── */}
          <div className="flex flex-col items-center gap-2 w-full mt-15">
            <h3
              className="text-xl sm:text-3xl font-extrabold text-center bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(135deg, #72417d 0%, #f19312 100%)',
              }}
            >
              Plus de 35 millions de vues
            </h3>
            <img
              src="/Logo - TikTok.webp"
              alt="Logo TikTok"
              className="h-20 w-auto object-contain"
            />
          </div>

          {/* ── Bloc TV ── */}
          <div className="flex flex-col items-center gap-4 w-full">
            <h3
              className="text-xl sm:text-3xl font-extrabold text-center bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(135deg, #72417d 0%, #f19312 100%)',
              }}
            >
              Plus 12 millions de téléspectateurs
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-2">
              {tvLogos.map((tv, i) => (
                <img key={i} alt={tv.name} src={tv.logo} className="w-auto h-25 object-contain" />
              ))}
            </div>
          </div>

          {/* ── Bloc YouTube ── */}
          <div className="flex flex-col items-center w-full">
            <h3
              className="text-xl sm:text-3xl font-extrabold text-center bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(135deg, #72417d 0%, #f19312 100%)',
              }}
            >
              Plus de 2 millions de vues
            </h3>
            <img src="/logo-youtube.webp" alt="YouTube" className="h-50 w-auto object-contain" />
          </div>
        </div>
      </section>
      <section className="w-full bg-gray-100 pb-12 lg:pb-20">
        {/* ── Titre + trait + texte info avec padding ── */}
        <div className="max-w-5xl mx-auto px-4 lg:px-8 pt-12 pb-6 flex flex-col gap-4">
          <h2
            className="text-2xl sm:text-4xl font-extrabold leading-snug bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(135deg, #72417d 0%, #f19312 100%)',
            }}
          >
            Partager un apéritif ou un petit déjeuner avec vos voisins pour parler de votre
            installation
          </h2>

          {/* Trait orange */}
          <div className="w-92 h-1 bg-[#f19312] rounded-full"></div>

          {/* Texte info */}
          <p className="text-base mt-2 mb-5 md:text-lg text-gray-600 max-w-5xl">
            <span className="font-bold text-gray-800">
              Fleuron Industries prend en charge 5€ par participants.
            </span>{' '}
            La liste des noms des participants devra nous être transmise avant l&apos;événement pour
            validation par la Direction du programme &quot;Ambassadeurs&quot;.
          </p>
        </div>

        {/* ── Layout deux colonnes : image gauche + form droite ── */}
        <div className="flex flex-col lg:flex-row">
          {/* Image — colle à gauche, pas de padding */}
          <div className="-ml-12 w-full lg:ml-0 lg:w-1/2 overflow-hidden rounded-r-2xl">
            <Image
              src="/aperitif-hero.webp"
              alt="Deux hommes qui partagent un petit déjeuner"
              width={800}
              height={500}
              className="w-full h-64 sm:h-80 lg:h-116 object-cover"
            />
          </div>

          {/* Formulaire */}
          <div className="w-full lg:w-1/2 px-4 lg:px-12 py-8 lg:py-10 flex items-center justify-center">
            <FormApéritif />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
