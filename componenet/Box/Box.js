import './Box.css';
import React from 'react';

export const Box=({value,onClick})=>{
    const style=value==="X"?"Box X":"Box O";
    return(
        <div className={style} onClick={onClick}>
            {value}
        </div>
    )
}