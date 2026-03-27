import React, { use, useState } from 'react';
import Player from '../Card/Player';
import SelectedPlayers from '../SelectedPlayers/SelectedPlayers';

const AvailablePlayers = ({playerPromise,coins,setCoins}) => {
    const playerData=use(playerPromise);
    // console.log(playerData);

    const [selectedType,setSelectedType]=useState("Available");
    // console.log(selectedType);
    const [selectedPlayers,setSelectedPlayers]=useState([]);
    console.log(selectedPlayers);
    return (
        <div className='container mx-auto my-4'>

            <div className='flex justify-between items-center my-8'>
                <h2 className='font-bold text-2xl'>
                    {selectedType==="Available"?"Available Players":`Selected Player(${selectedPlayers.length}/${playerData.length})`}
                    </h2>
                <div>
                    <button onClick={()=>setSelectedType("Available")} 
                    className={`btn btn-xs sm:btn-sm md:btn-md rounded-r-none rounded-l-xl 
                        ${selectedType==="Available"? "bg-[#E7FE29]": "btn-base"}`}>Available
                        </button>
                    <button onClick={()=>setSelectedType("Selected")} 
                    className={`btn btn-xs sm:btn-sm md:btn-md rounded-l-none rounded-r-xl
                     ${selectedType==="Selected"? "bg-[#E7FE29]": "btn-base"}`}>Selected ({selectedPlayers.length})
                     </button>
                </div>
            </div>
        {
            
            selectedType==="Available"? 
            (<Player playerData={playerData} coins={coins} setCoins={setCoins} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}></Player>) 
            :
            (<SelectedPlayers selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} coins={coins} setCoins={setCoins}></SelectedPlayers>)
        }
          
        </div>
    );
};

export default AvailablePlayers;