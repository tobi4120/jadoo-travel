import React from 'react'
import Destination from './destination'

import rome from "../../static/destinations/rome.png";
import london from "../../static/destinations/london.png";
import fullEurope from "../../static/destinations/full_europe.png";

export default function Destinations() {
    return (
        <div className='destinations'>
            <h3 className='destinations-sub-header'>Top Selling</h3>
            <h2 className='destinations-header'>Top Destinations</h2>

            <div className='destinations_locations'>
                <Destination
                    image={rome}
                    location={"Rome, Italy"}
                    location_code={"rome"}
                    price={"5.42k"}
                    tripLength={"10 Days Trip"}/>

                <Destination
                    image={london}
                    location={"London, UK"}
                    location_code={"lon"}
                    price={"4.2k"}
                    tripLength={"12 Days Trip"}/>

                <Destination
                    image={fullEurope}
                    location={"Full Europe"}
                    location_code={"eur"}
                    price={"15k"}
                    tripLength={"28 Days Trip"}/>
            </div>
        </div>
    )
}
