import React from 'react';

export const WordInput = ({handleChnage, value}) => {
    return (
        <>   
            <label htmlFor="word-input">Enter word to be highlighted here</label>
            <input 
                id="word-input" 
                type={"text"}
                onChange={(e)=>handleChnage(e.target.value)}
                value={value}
            />
        </>
    )
}