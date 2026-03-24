import React, { use } from 'react';
import Player from '../Card/Player';

const AvailablePlayers = ({playerPromise}) => {
    const playerData=use(playerPromise);
    // console.log(playerData);
    return (
        <div className='container mx-auto my-4'>
            <h2 className='font-bold text-2xl'>Available Player</h2>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-4'>
            {
                playerData.map(player=><Player key={player.id} player={player}></Player>)
            }
            
            </div> 
        </div>
    );
};

export default AvailablePlayers;