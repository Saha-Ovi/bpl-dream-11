import React from 'react';
import Card from '../Ui/Card';



const Player = ({ playerData}) => {
    // console.log(playerData);
    return (
        <div >
             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-4'>
            {
                playerData.map(player=><Card key={player.id} player={player}></Card>)
            }
            
            </div> 
        </div>
    );
};

export default Player;