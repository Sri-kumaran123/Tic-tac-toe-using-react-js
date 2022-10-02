import React from 'react';
import './Scour.css';

const Scour=({scores,xplaying})=>{
    const {xScores,oScores}=scores;
    return(
        <div className='S_board'>
            
                <div className={`score x-score ${!xplaying && "inactive"}`}>
                    <h2>Team 'X'</h2>
                    <span className='player p1'>ID : Player_001</span>
                    <span className='sc'>Scores :  {xScores}</span> </div>
                <div className={`score o-score ${xplaying && "inactive"}`}>
                    <h2>Team 'O'</h2>
                    <span className='player p2'>ID :  Player_002</span>
                    <span className='sc'>Scores :  {oScores}</span> </div>
        </div>
    );
}

export default Scour;