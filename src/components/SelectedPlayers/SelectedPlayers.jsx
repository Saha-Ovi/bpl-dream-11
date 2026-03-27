import React from 'react';


import SelectedPlayersCard from '../Ui/SelectedPlayersCard';
const SelectedPlayers = ({ selectedPlayers ,setSelectedPlayers,coins, setCoins}) => {
    // console.log(selectedPlayers);
    const handleSelectedPlayer = (p)=>
    {
        const newCoin=coins+p.price
        const filteredPlayers=selectedPlayers.filter(player=>player.id!==p.id)
        setSelectedPlayers(filteredPlayers);
        setCoins(newCoin);
    }
    return (
        <div>
            {
              selectedPlayers.length===0 ?
            <div className='flex flex-col justify-center items-center shadow-2xl p-5'>
                <h2 className='font-bold text-3xl mb-6'>No players selected yet</h2>
                <p className='font-semibold text-xl'>Go to Available tab to select players</p>
            </div> :
              selectedPlayers.map(player=><SelectedPlayersCard player={player} handleSelectedPlayer={handleSelectedPlayer}></SelectedPlayersCard> )
            }
          
         </div>
        
    );
};

export default SelectedPlayers;