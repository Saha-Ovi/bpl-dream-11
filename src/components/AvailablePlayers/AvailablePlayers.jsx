import React, { use, useState } from 'react';
import Player from '../Card/Player';
import SelectedPlayers from '../SelectedPlayers/SelectedPlayers';

const AvailablePlayers = ({playerPromise,coins,setCoins}) => {
    const playerData=use(playerPromise);
    // console.log(playerData);

    const [selectedType,setSelectedType]=useState("Available");
    // console.log(selectedType);
    return (
        <div className='container mx-auto my-4'>

            <div className='flex justify-between items-center my-8'>
                <h2 className='font-bold text-2xl'>Available Players</h2>
                <div>
                    <button onClick={()=>setSelectedType("Available")} 
                    className={`btn btn-xs sm:btn-sm md:btn-md rounded-r-none rounded-l-xl 
                        ${selectedType==="Available"? "bg-[#E7FE29]": "btn-base"}`}>Available
                        </button>
                    <button onClick={()=>setSelectedType("Selected")} 
                    className={`btn btn-xs sm:btn-sm md:btn-md rounded-l-none rounded-r-xl
                     ${selectedType==="Selected"? "bg-[#E7FE29]": "btn-base"}`}>Selected (0)
                     </button>
                </div>
            </div>
        {
            selectedType==="Available"? 
            (<Player playerData={playerData} coins={coins} setCoins={setCoins}></Player>) 
            :
            (<SelectedPlayers></SelectedPlayers>)
        }
          
        </div>
    );
};

export default AvailablePlayers;