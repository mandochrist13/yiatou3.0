import React from 'react';
import { Link } from 'react-router-dom';

const HomeAbout = () => {
    return (
        <div className='px-3 py-8 bg-orange-50'>
            <h2 className='font-bold text-lg pb-5'>Nous sommes Yiatou</h2>

            <div>
                <p><strong>Permettre </strong>de trouver des articles, rares, pratique et utiles.</p>
            </div>
            <div className='py-4'>
                <p><strong>Permettre </strong>à n'importe qui de gagner de l'argent depuis son téléphone.</p>
            </div>
            <div>
                <p><strong>Lutter contre </strong>le chomage, la vie chere et la pauvreté.</p>
            </div>
            <p className='my-3'>Voila ce qui nous anime au quotidient !</p>

            <Link href='#' className='px-3 py-2 bg-gray-50 border rounded mt-4 inline-block'>En savoir plus</Link>
        </div>
    );
}

export default HomeAbout;
