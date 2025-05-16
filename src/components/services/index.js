import React from 'react'
import PlusSignGraphic from "./plus-sign-graphic";
import Category from './category';
import "../../static/styles/Services.scss";

import CalculatedWeatherGraphic from "../../static/categories/calculated_weather_graphic.png";
import BestFlightsGraphic from "../../static/categories/best_flights_graphic.png";
import LocalEventsGraphic from "../../static/categories/local_events_graphic.png";
import CustomizationGraphic from "../../static/categories/customization_graphic.png";

import redRectangle from "../../static/red-rectangle.png";

export default function Services() {
    return (
        <div className='Services'>
            <h3 className='sub-header'>Category</h3>
            <h2 className='header'>We Offer Best Services</h2>
            <PlusSignGraphic />

            <div className='categories'>
                <Category 
                    header={"Calculated Weather"}
                    description={"Built Wicket longer admire do barton vanity itself do in it."}
                    graphic_name={"calculated_weather"}
                    graphic={CalculatedWeatherGraphic} />
                
                <Category 
                    header={"Best Flights"}
                    description={"Engrossed listening. Park gate sell they west hard for the."}
                    graphic_name={"best_flights"}
                    graphic={BestFlightsGraphic} />

                <Category 
                    header={"Local Events"}
                    description={"Barton vanity itself do in it. Preferd to men it engrossed listening."}
                    graphic_name={"local_events"}
                    graphic={LocalEventsGraphic} />

                <Category 
                    header={"Customization"}
                    description={"We deliver outsourced aviation services for military customers"}
                    graphic_name={"customization"}
                    graphic={CustomizationGraphic} />
            </div>
        </div>
    )
}
