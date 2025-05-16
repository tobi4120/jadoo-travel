import React, { useState, useEffect } from 'react'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Card from './card';
import "../../static/styles/Testimonials.scss";

import headshot1 from "../../static/testimonials/headshot_1.jpeg";
import headshot2 from "../../static/testimonials/headshot_2.jpeg";
import headshot3 from "../../static/testimonials/headshot_3.webp";


export default function Testimonials() {
    const card_states = ["hidden", "nextUp", "onTop"]
    const [currState, setCurrState] = useState(2);
    const [increase, setIncrease] = useState(true);
    const [onTopHeight, setOnTopHeight] = useState(0);
    const [cards, setCards] = useState([
        {
            image: headshot1,
            name: "Mike Taylor",
            review: `"On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no."`,
            location: "Toronto, Canada",
            state: currState
        },
        {
            image: headshot2,
            name: "Ashley Cooper",
            review: `"On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no."`,
            location: "Madison, Wisconsin",
            state: currState - 1
        },
        {
            image: headshot3,
            review: `"On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no."`,
            name: "Sofia Turner",
            location: "Chicago, Illinois",
            state: currState - 2
        }
    ]);

    useEffect(() => {
        const updateHeight = () => {
            const el = document.querySelector('.onTop');
            if (el) {
            setOnTopHeight(el.offsetHeight);
            }
        };

        // Call once to set the initial height
        updateHeight();

        // Add event listener
        window.addEventListener('resize', updateHeight);

        // Cleanup
        return () => {
            window.removeEventListener('resize', updateHeight);
        };
    }, []);

    const updateCardStates = (adjustment) => {
        let cards_copy = [...cards];
        cards_copy.forEach(card => {
            card.state += adjustment == "increase"? 1 : -1;
        })
        setCards(cards_copy)
        setIncrease(adjustment == "increase");
    }

    // Custom mod function to handle negative numbers
    Number.prototype.mod = function(n) {
        return ((this%n)+n)%n;
    }

    return (
        <div className='testimonials'>
            <div className='testimonials-left'>
                <h3 className='testimonials-sub-header'>Testimonials</h3>
                <h2 className='testimonials-header'>
                    What People Say <br />
                    About Us.
                </h2>

                <div className='elipses'>
                    <span className='circle' />
                    <span className='circle' />
                    <span className='circle' />
                </div>
            </div>

            <div className='testimonials-right'>
                <div className='testimonial-cards'>
                    <div style = {{ height: `${onTopHeight}px` }} className='testimonial-card-spacer'></div>
                    {cards.map(card => { 
                        return (
                            <Card
                                key={card.name}
                                image={card.image}
                                review={card.review}
                                name={card.name}
                                location={card.location}
                                state={card_states[card.state.mod(card_states.length)]}
                                increase={increase} />
                        );
                    })}
                </div>

                <div className='pagination'>
                    <span className='icon-up' onClick={() => updateCardStates("increase") }>
                        <ChevronRightIcon fontSize='inherit' />
                    </span>

                    <span className='icon-down' onClick={() => updateCardStates("decrease") }>
                        <ChevronRightIcon fontSize='inherit' />
                    </span>
                </div>
            </div>
        </div>
    )
}