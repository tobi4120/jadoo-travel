import React from 'react'
import travellingGirl from "../../static/travelling_girl.png";
import "../../static/styles/Hero.scss";
import underline from "../../static/underline.png";

function Hero() {
    return (
        <div className='hero'>
            {/* Left */}
            <div className='desc'>
                <h2 className='sub-header'>Best Destinations around the world</h2>
                <h1 className='main-header'>
                    Travel, <span className='enjoy'><p>enjoy</p><img className='underline' src={underline} /></span> and live a new and full life
                </h1>
                <p className='more-info'>Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>
                
                <div className='cta'>
                    <a className='find-out-more-btn'>Find out more</a>
                    <div className='demo'>
                        <div className='play-button'>
                            <span className='play-button-triangle' />
                        </div>
                        <p>Play Demo</p>
                    </div>
                </div>
            </div>

            {/* Right */}
            <div className='travelling-girl'>
                <img src={travellingGirl} />
            </div>
        </div>
    )
}
export default Hero