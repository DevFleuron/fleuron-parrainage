'use client'
import Image from 'next/image'
import FormParrainage from '@/components/FormParrainage'
import FormCommande from '@/components/FormCommande'
import FormApéritif from '@/components/FormApperitif'
import Footer from '@/components/Foot'

export default function AmbassadorPage() {
  const installations = [
    {
      image: '/panneaux-solaires.webp',
      description: (
        <p className="text-base">
          Panneaux photovoltaïques ={' '}
          <span className="font-bold text-black">
            50€ par KwC jusqu&apos;à 9KwC et bien plus à gagner sur les grandes installations
            professionnelles
          </span>
        </p>
      ),
    },
    {
      image: '/ITE-LP.webp',
      description: (
        <p className="text-base">
          Travaux d&apos;isolation extérieur d&apos;une maison (ITE) ={' '}
          <span className="font-bold text-black">2€/m²</span>
        </p>
      ),
    },
    {
      image: '/MaisonFleuron - LP.webp',
      description: (
        <p className="text-base">
          Maison Fleuron = <span className="font-bold text-black">250€</span>
        </p>
      ),
    },
    {
      image: '/PAC - LP.webp',
      description: (
        <p className="text-base">
          Pompe à chaleur = <span className="font-bold text-black">150€</span>
        </p>
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
      <header className="px-4 lg:px-8 pt-6 pb-2 max-w-7xl">
        <Image src="/logo-fleuron.webp" height={60} width={200} className="lg:h-auto" />
      </header>
      {/* Wrapper full-width pour que l'image absolute se refera à lui */}
      <section className="w-full flex flex-col lg:flex-row">
        {/* ── Colonne gauche ── */}
        <div className="w-full lg:w-1/2 flex flex-col">
          {/* Texte avec padding */}
          <div className="px-4 lg:px-8 py-6 lg:py-10 flex flex-col xl:ml-15  gap-4">
            <h1
              className="text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-tight bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(135deg, #72417d 0%, #e07856 100%)',
              }}
            >
              Votre interface
              <span className="block">Ambassadeur</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-left font-semibold">
              Ce formulaire permet d&apos;horodater votre demande de parrainage afin de déclencher
              l&apos;attribution de vos gains.
            </p>
          </div>

          {/* Image — pas de padding, colle à gauche */}
          <div className="overflow-hidden rounded-r-2xl shadow-md">
            <Image
              src="/image-hero1.webp"
              alt="Maison avec panneaux solaires"
              width={800}
              height={650}
              className="w-full h-56 sm:h-72 lg:h-100 object-cover"
              priority
            />
          </div>
        </div>

        {/* ── Colonne droite : formulaire ── */}
        <div className="w-full lg:w-1/2 px-4 lg:px-12 py-6 lg:py-10 flex items-start justify-center">
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
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center leading-snug bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(135deg, #72417d 0%, #e07856 100%)',
            }}
          >
            Complétez vos revenus par installations réalisées !
          </h2>

          {/* ── Sous-titre ── */}
          <p className="text-sm sm:text-2xl font-bold uppercase tracking-wide text-center">
            Pour les particuliers et professionnels
          </p>

          {/* ── Grille 2x2 installations ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
            {installations.map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-3">
                <div
                  className="rounded-xl p-[2px] w-full shadow-md"
                  style={{
                    background: 'linear-gradient(135deg, #72417d 0%, #e07856 100%)',
                  }}
                >
                  {/* Image avec bg-white pour "couper" le gradient et ne laisser que la bordure */}
                  <div className="rounded-[9px] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={`Installation ${i + 1}`}
                      width={400}
                      height={280}
                      className="w-full h-62 object-cover"
                    />
                  </div>
                </div>
                <p className="text-sm text-gray-600 text-center max-w-xs">{item.description}</p>
              </div>
            ))}
          </div>

          {/* ── Bloc cartes cadeaux ── */}
          <div className="flex flex-col sm:flex-row items-center gap-4 bg-gray-50 rounded-2xl px-6 py-2 w-full">
            {/* Visuel carte cadeau placeholder */}
            <div className="shrink-0">
              <Image
                src="/Carte-Cadeau-LP.webp"
                alt="Carte cadeau multi-enseignes"
                width={160}
                height={80}
                className="object-contain"
              />
            </div>

            {/* Texte */}
            <div className="flex flex-col gap-1 text-center sm:text-left">
              <p className="font-bold text-gray-800 text-xl">
                Recevez vos cartes cadeaux multi-enseignes
              </p>
              <p className="text-lg text-gray-500">Valables en magasin et sur internet</p>
              <p className="text-lg text-gray-500">Dans plus de 200 enseignes</p>
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
          <p className="text-base sm:text-lg text-gray-600 text-center max-w-md">
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
          <div className="flex flex-col items-center gap-2">
            <h2
              className="text-2xl sm:text-3xl font-extrabold text-center bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(135deg, #72417d 0%, #e07856 100%)',
              }}
            >
              Commander gratuitement vos communications
            </h2>
            {/* Trait orange sous le titre */}
            <div className="w-full flex justify-center items-center mx-auto center mb-2">
              <Image src="/sourlignement.webp" width={200} height={80} />
            </div>
          </div>

          {/* ── Formulaire ── */}
          <FormCommande />
        </div>
      </section>

      <section className="bg-white py-14 px-4 lg:px-8">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-10">
          {/* ── Titre + trait ── */}
          <div className="flex flex-col items-center w-full gap-3">
            <h2
              className="text-3xl sm:text-4xl font-extrabold leading-tight text-center bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(135deg, #72417d 0%, #e07856 100%)',
              }}
            >
              Une visibilité exceptionnelle
            </h2>
            <div className="w-full flex justify-center items-center mx-auto center mb-2">
              <Image src="/sourlignement.webp" width={200} height={80} />
            </div>
          </div>

          {/* ── Bloc TikTok ── */}
          <div className="flex flex-col items-center gap-2 w-full">
            <p
              className="text-xl sm:text-3xl font-extrabold text-center bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(135deg, #72417d 0%, #e07856 100%)',
              }}
            >
              Plus de 35 millions de vues
            </p>
            <img
              src="/Logo - TikTok.webp"
              alt="Logo TikTok"
              className="h-20 w-auto object-contain"
            />
            <Image />
          </div>

          {/* ── Bloc TV ── */}
          <div className="flex flex-col items-center gap-4 w-full">
            <p
              className="text-xl sm:text-3xl font-extrabold text-center bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(135deg, #72417d 0%, #e07856 100%)',
              }}
            >
              Plus 12 millions de téléspectateurs
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {tvLogos.map((tv, i) => (
                <img key={i} alt={tv.name} src={tv.logo} className="w-auto h-35 object-contain" />
              ))}
            </div>
          </div>

          {/* ── Bloc YouTube ── */}
          <div className="flex flex-col items-center gap-3 w-full">
            <p
              className="text-xl sm:text-3xl font-extrabold text-center bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(135deg, #72417d 0%, #e07856 100%)',
              }}
            >
              Plus de 2 millions de vues
            </p>
            <img src="/logo-youtube.webp" alt="YouTube" className="h-50 w-auto object-contain" />
          </div>
        </div>
      </section>
      <section className="w-full bg-gray-100 pb-12 lg:pb-20">
        {/* ── Titre + trait + texte info avec padding ── */}
        <div className="max-w-5xl mx-auto px-4 lg:px-8 pt-12 pb-6 flex flex-col gap-4">
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-snug bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(135deg, #72417d 0%, #e07856 100%)',
            }}
          >
            Partager un apéritif ou un petit déjeuner avec vos voisins pour parler de votre
            installation
          </h2>

          {/* Trait orange */}
          <div className="w-32 h-1 bg-orange-500 rounded-full"></div>

          {/* Texte info */}
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl">
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
          <div className="w-full lg:w-1/2 overflow-hidden rounded-r-2xl">
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
