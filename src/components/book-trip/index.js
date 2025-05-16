import React from 'react'
import Step from './step';
import "../../static/styles/BookTrip.scss";

import step1 from '../../static/book_trip/step_1.png';
import step2 from '../../static/book_trip/step_2.png';
import step3 from '../../static/book_trip/step_3.png';

import image from '../../static/book_trip/book_trip_img.png';

export default function BookTrip() {
    return (
        <div className='book-trip'>
            <div className='book-trip-content'>
                <h3 className='book-trip-sub-header'>Easy and Fast</h3>
                <h2 className='book-trip-header'>
                    Book Your Next Trip <br />
                    In 3 Easy Steps
                </h2>

                <div className='steps'>
                    <Step 
                        graphic={step1}
                        header={"Choose Destination"}
                        details={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus."} />
                    <Step 
                        graphic={step2}
                        header={"Make Payment"}
                        details={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus."} />
                    <Step 
                        graphic={step3}
                        header={"Reach Airport on Selected Date"}
                        details={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus."} />
                </div>
            </div>
            <div className='book-trip-img'><img src={image} /></div>
        </div>
    )
}
