import React from 'react';
import { FaFlag, FaUser } from 'react-icons/fa';

const Card = ({player}) => {
    return (
        <div>
            <div className="card bg-base-100 shadow-sm border border-gray-400">
                <figure>
                    <img className='w-[60%]' src={player.image}
                        alt={player.alt} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title"><FaUser />{player.name}</h2>
                    <div className='flex justify-between items-center'>
                         <div className='flex items-center gap-2'>
                            <FaFlag/>
                            <h2>{player.country}</h2>
                         </div>
                        <h2 className='badge badge-base font-bold'>{player.role}</h2>
                    </div>
                     <div className="divider"></div>
                    <p className='font-extrabold'>Rating : {player.rating}</p>
                    <div className='flex justify-between'>
                        <p className='font-bold'> {player.batting_style} </p>
                        <p className='text-right font-bold'> {player.bowling_style} </p>
                    </div>
                    <div className="card-actions justify-between items-center">
                        <p className='font-semibold text-md'>Price: {player.price} </p>
                        <button className="btn btn-base">Choose Player</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;