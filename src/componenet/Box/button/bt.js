import './bt.css';

export const Bt=({board,onClick})=>{
    return(
        <div>
            <button onClick={onClick}>Reset</button>
        </div>
    )
}