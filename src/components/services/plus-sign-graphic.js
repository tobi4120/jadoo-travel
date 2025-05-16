import React from 'react'

export default function PlusSignGraphic() {
    return (
        <div className='plus-sign-graphic'>
            <div className='row'>{[...Array(5).keys()].map(index => { 
                return <span className={index === 0 && "plus-orange"}>&#43;</span> 
            } )}</div>

            <div className='row'>{Array(5).fill().map(() => { return <span>&#43;</span> } )}</div>

            <div className='row'>{[...Array(5).keys()].map(index => { 
                return <span className={index === 2 && "plus-blue"}>&#43;</span> 
            } )}</div>

            <div className='row'>
                {[...Array(5).keys()].map(index => { 
                    return <span className={index} style={{ opacity: index === 0? 0 : 1 }}>&#43;</span>
                })}
            </div>

            <div className='row'>
                {[...Array(5).keys()].map(index => { 
                    return <span className={index} style={{ opacity: index === 0 || index === 1? 0 : 1 }}>&#43;</span>
                })}
            </div>
        </div>
    )
}
