import PriceCard from '@/components/pricing/PriceCard'
import React from 'react'

const page = () => {
    const priceCardsData = [
        {
            title: 'Portefeuilles EIP*',
            description: 'Suivez l’évolution de mes portefeuilles en temps réel avec mise à jour de mes lignes immédiatement après chaque transaction.',
            price: '60€',
            temporality: '/an',
            items: [
                'Accès aux portefeuilles PEA et CTO en temps réel',
                'Mise à jour de mes Google Sheets immédiatement après chaque transaction',
                'Alerte transactions ',
                'Compte-rendu mensuel avec récapitulatif des transactions ',
                'Suivi des positions en portefeuille et partage de mes réflexions ',
            ],
            itemsNotInTheOffer: [
                'Accès watchlist',
                'Analyses d\'actions (2 par mois)',
                'Discord privé',
                'Réunions (2 par mois)'
            ],
            buttonTexts: 'Accèdez à mes portefeuilles'
            
        },
        {
            title: 'Portefeuilles EIP*',
            description: 'Suivez l’évolution de mes portefeuilles en temps réel avec mise à jour de mes lignes immédiatement après chaque transaction.',
            price: '90€',
            temporality: 'pour 3 mois',
            items: [
                'Accès aux portefeuilles PEA et CTO en temps réel',
                'Mise à jour de mes Google Sheets immédiatement après chaque transaction',
                'Alerte transactions ',
                'Accès watchlist',
                'Analyses d\'actions (2 par mois)',
                'Compte-rendu mensuel avec récapitulatif des transactions ',
                'Discord privé',
                'Suivi des positions en portefeuille et partage de mes réflexions ',
                'Réunions (2 par mois)'
            ],
            buttonTexts: 'Rejoindre la Team'
            
        },
        {
            title: 'Team EIP',
            description: 'Interagissez avec moi dans le Discord privé. Partagez Des idées d’investissement qui pourront être analysées en détail lors des réunions.',
            price: '300€',
            temporality: '/an',
            items: [
                'Portefeuilles PEA et CTO en temps réel',
                'Mise à jour de mes Google Sheets immédiatement après chaque transaction',
                'Alerte transactions ',
                'Accès watchlist',
                'Analyses d\'actions (2 par mois)',
                'Compte-rendu mensuel avec récapitulatif des transactions ',
                'Discord privé',
                'Suivi des positions en portefeuille et partage de mes réflexions ',
                'Réunions (2 par mois)'
            ],
            cardBorderClassName:'flex flex-col p-1 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg bg-gradient-to-r from-blue-500 to-purple-500',
            buttonTexts: 'Rejoindre la Team'
        },
    ];
  return (
    <div className="absolute top-0 left-0 flex items-center justify-center right-0 z-[-2] h-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center h-screen md:mt-10"> {/* Ajout d'une largeur maximale */}
            <div className="sm:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0 ">
                {priceCardsData.map((cardData, index) => (
                    <div key={index} className="mb-8 ">
                    <PriceCard
                        
                        title={cardData.title}
                        description={cardData.description}
                        price={cardData.price}
                        items={cardData.items}
                        itemsNotInTheOffer={cardData.itemsNotInTheOffer}
                        temporality={cardData.temporality}
                        cardBorderClassName={cardData.cardBorderClassName}
                        buttonTexts={cardData.buttonTexts}
                    />
                    </div>
                ))}
            </div>
        </div>
    </div>

  )
}

export default page