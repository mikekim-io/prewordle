import React from 'react'

const guesses = ['     ', '     ', '     ', '     ', '     ', '     ']

export const Board = (props) => {
    return (
        <div className="container mx-auto w-80 grid grid-cols-5 gap-1">
        {guesses.map(word=>word.split('').map((letter,idx)=>{return(
            <div className="text-base font-semibold uppercase align-middle text-center p-7 s:p-5 h-1/5 w-1/5 border-2 border-gray-200 rounded" key={idx}>{letter}</div>)
        }))}
        </div>
    )

}

export default Board;