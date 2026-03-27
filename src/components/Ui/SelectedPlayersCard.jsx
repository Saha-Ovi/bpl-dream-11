import React from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FaUser } from 'react-icons/fa';

const SelectedPlayersCard = ({player,handleSelectedPlayer}) => {
    return (
        <div>
            <div className='flex justify-between items-center space-y-5 p-5 shadow-xl'>
                        <div className='flex justify-between items-center gap-4'>
                            <img className='h-15 w-15' src={player.image} alt="" />
                        <div className='flex flex-col justify-center items-center'>
                            <h2 className='flex items-center gap-2'><FaUser /> {player.name}</h2>
                            <p >{player.role}</p>
                        </div>
                        </div>
                        <button onClick={()=>handleSelectedPlayer(player)} className='btn text-red-500  '><RiDeleteBin6Line /></button>
                    </div>
        </div>
    );
};

export default SelectedPlayersCard;