import React from 'react'

export default function Step(props) {
    return (
        <div className='step'>
            <img src={props.graphic} />
            <div className='step-content'>
                <h3 className='step-header'>{props.header}</h3>
                <p className='step-details'>{props.details}</p>
            </div>
        </div>
    )
}
