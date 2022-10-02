import './result.css'

const Result=({close,xplaying})=>{
    return(

        
        <div className={!xplaying?'result cl1':'result cl2'}>
            {
                
            <div >
            <div className='won'>
              {!xplaying?'player_001 ':'player_002 '} {!xplaying?"'X'":"'O'"}  
            </div>
            <div className='text'>
            won the match
            </div>
            <div >
            <button className='btn' onClick={()=>close(false)}>Replay</button>
            <button className='btn' onClick={()=>close(false)}>Ok</button>
            </div>
            </div>
}
            
        </div>
        
    )
}

export default Result;