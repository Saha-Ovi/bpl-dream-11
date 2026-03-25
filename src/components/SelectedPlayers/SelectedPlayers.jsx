import React from 'react';

const SelectedPlayers = ({ selectedPlayers }) => {
    console.log(selectedPlayers);
    return (
        <div>
            <h2>selected Players are here</h2>
            {/* <div className="card bg-base-100 w-full shadow-sm">
                <div>
                    <h2 className="card-title">{selectedPlayers.name}</h2>
                    <p>{selectedPlayers.batting_style}</p>
                    </div>
                </div> */}
            </div>
        
    );
};

export default SelectedPlayers;