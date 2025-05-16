import React from 'react'

export default function Category(props) {
    return (
        <div className='category'>
            <div className={`graphic ${props.graphic_name}`}><img src={props.graphic} /></div>
            <h3 className='category-header'>{props.header}</h3>
            <p>{props.description}</p>
        </div>
    )
}
