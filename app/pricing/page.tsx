import PriceCard from '@/components/pricing/PriceCard'
import React from 'react'

const page = () => {
    const priceCardsData = [
        {
            title: 'Portefeuilles EIP*',
            description: 'Best option for personal use & for your next project.',
            price: '60€',
            items: [
                'Accès aux portefeuilles PEA et CTO en temps réel',
                'Mise à jour de mes Google Sheets immédiatement après chaque transaction',
                'Alerte transactions ',
                'Compte-rendu mensuel avec récapitulatif des transactions ',
                'Suivi des positions en portefeuille et partage de mes réflexions ',
            ],
        },
        {
            title: 'Portefeuilles EIP*',
            description: 'Best option for personal use & for your next project.',
            price: '60€',
            items: [
                'Accès aux portefeuilles PEA et CTO en temps réel',
                'Mise à jour de mes Google Sheets immédiatement après chaque transaction',
                'Alerte transactions ',
                'Compte-rendu mensuel avec récapitulatif des transactions ',
                'Suivi des positions en portefeuille et partage de mes réflexions ',
            ],
        },
    ];
  return (
    <div className="absolute top-0 left-0 flex items-center justify-center right-0 z-[-2] h-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center"> {/* Ajout d'une largeur maximale */}
        <div className="space-y-8 lg:grid lg:grid-cols-2 sm:gap-6 xl:gap-10 lg:space-y-0">
            {priceCardsData.map((cardData, index) => (
                <PriceCard
                    key={index}
                    title={cardData.title}
                    description={cardData.description}
                    price={cardData.price}
                    items={cardData.items}
                />
            ))}
        </div>
    </div>
</div>

  )
}

export default page