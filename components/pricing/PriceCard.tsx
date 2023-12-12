import React from 'react';
import { Card } from '../ui/card';
import { Button } from '@/components/ui/button';

const PriceCard = ({ title, description, price, items, temporality, itemsNotInTheOffer, cardBorderClassName }:any) => {
    return (
        <div className={cardBorderClassName}>
        <Card className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border">
            <h3 className="mb-4 text-2xl font-semibold">{title}</h3>
            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">{description}</p>
            <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-5xl font-extrabold">{price}</span>
                <span className="text-gray-500 dark:text-gray-400">{temporality}</span>
            </div>
            {/* List */}
            <ul role="list" className="mb-8 space-y-4 text-left">
                {items.map((item:any, index:any) => (
                    <li key={index} className="flex items-center space-x-3">
                        {/* Icon */}
                        <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                        <span>{item}</span>
                    </li>
                ))}
                {itemsNotInTheOffer && itemsNotInTheOffer.map((itemNotInTheOffer:any, index:any) => (
                    <li key={index} className="flex items-center space-x-3">
                        {/* Croix */}
                        <svg className="flex-shrink-0 w-5 h-5 text-red-500 dark:text-red-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M13.414 6.586a2 2 0 112.828 2.828L11.828 12l4.414 4.414a2 2 0 11-2.828 2.828L9 14.828l-4.414 4.414a2 2 0 11-2.828-2.828L6.172 12 1.758 7.586a2 2 0 112.828-2.828L9 9.172l4.414-4.414z" clipRule="evenodd"></path></svg>
                        <span>{itemNotInTheOffer}</span>
                    </li>
                ))}
            </ul>
            <Button>Accéder au portefeuilles</Button>
        </Card>
        </div>
    );
};

export default PriceCard;
