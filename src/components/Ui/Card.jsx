import React, { useState } from 'react';
import { FaFlag, FaUser } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Card = ({player,coins,setCoins}) => {
    /**
      * use state used to control selected or choose button using onclick to change state
 */
    const[isSelected,setIsSelected]=useState(false);
    const handleState=()=>
    {
        const newCoins=(coins - player.price);
        if(newCoins>=0)
        {
          
            setCoins(newCoins);
            toast.success(`${player.name}is selected`);
            setIsSelected(true);
        }
        else
        {
            toast.error("Not Enough Coins");
        }
    }
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
                        <p className='font-semibold text-md'>Price:${player.price} </p>
                        {/* disabled={isSelected?true:false} */}
                        {/* onClick={()=>setIsSelected(true)} =>primary when coin and set coin state come then call a function to solve all work */}
                        <button onClick={handleState} disabled={isSelected} className="btn btn-base">
                            {isSelected?"Selected":"Choose Player"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
