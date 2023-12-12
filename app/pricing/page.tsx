import PriceCard from '@/components/pricing/PriceCard'
import React from 'react'

const page = () => {
    const priceCardsData = [
        {
            title: 'Portefeuilles EIP*',
            description: 'Suivez l’évolution de mes portefeuilles en temps réel.',
            price: '60€',
            temporality: '/an',
            items: [
                'PEA et CTO en temps réel',
                'Mise à jour immédiatement après chaque transaction',
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
            buttonTexts: 'Accèdez à mes portefeuilles',
            classNameForPrice:'mr-2 text-5xl font-extrabold '
            
        },
        {
            title: 'Team EIP',
            description: 'Rejoignez mon équipe d\'investisseurs particuliers !',
            price: '90€',
            temporality: 'pour 3 mois',
            items: [
                'PEA et CTO en temps réel',
                'Mise à jour immédiatement après chaque transaction',
                'Alerte transactions',
                'Compte-rendu mensuel avec récapitulatif des transactions ',
                'Suivi des positions en portefeuille et partage de mes réflexions ',
                'Accès watchlist',
                'Analyses d\'actions (2 par mois)',
                'Discord privé',
                'Réunions (2 par mois)'
            ],
            buttonTexts: 'Rejoindre la Team',
            classNameForPrice:'mr-2 text-5xl font-extrabold '
            
        },
        {
            title: 'Team EIP',
            description: 'Rejoignez mon équipe d\'investisseurs particuliers !',
            price: '300€',
            temporality: '/an',
            items: [
                'PEA et CTO en temps réel',
                'Mise à jour immédiatement après chaque transaction',
                'Alerte transactions',
                'Compte-rendu mensuel avec récapitulatif des transactions ',
                'Suivi des positions en portefeuille et partage de mes réflexions ',
                'Accès watchlist',
                'Analyses d\'actions (2 par mois)',
                'Discord privé',
                'Réunions (2 par mois)'
            ],
            cardBorderClassName:'flex flex-col p-1 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg bg-gradient-to-r from-blue-500 to-purple-500',
            buttonTexts: 'Rejoindre la Team',
            classNameForPrice:'mr-2 text-5xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text'
        },
    ];
  return (
    <div className="absolute top-0 left-0 flex items-center justify-center right-0 z-[-2] h-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center h-screen md:mt-10"> {/* Ajout d'une largeur maximale */}
                <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-8">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Choissisez votre offre</h2>
                <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">Vous êtes déterminé(e) à prendre en main votre épargne, à investir en Bourse et à vous construire un patrimoine à long terme, et vous souhaitez être accompagné(e) ? Ces offres peuvent vous intéresser.</p>
                </div>
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
                        classNameForPrice={cardData.classNameForPrice}
                        
                    />
                    </div>
                ))}
            </div>
        </div>
    </div>

  )
}

export default page