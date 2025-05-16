import React from 'react'
import NearMeIcon from '@mui/icons-material/NearMe';
import "../../static/styles/Destinations.scss";
import decore from "../../static/destinations/Decore.png";

export default function Destination(props) {
    return (
        <div className={`destination ${props.location_code}`} style={{ backgroundImage: `url(${props.image})` }}>
            <div className='destination-content'>
                <div className='general-details'>
                    <p className='location'>{props.location}</p>
                    <p className='price'>${props.price}</p>
                </div>

                <div className='trip-length'>
                    <span className='destinataion-icon'>
                        <NearMeIcon fontSize="inherit" />
                    </span>
                    <p>{props.tripLength}</p>
                </div>
            </div>

            {props.location_code === "eur" && <img className='destination-decore' src={decore} />}
        </div>
    )
}
