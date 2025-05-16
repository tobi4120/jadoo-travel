import React from 'react'
import { motion } from "framer-motion"

const duration = 0.75;

const decreaseVariants = {
    onTop: {
        y: [0, -200, -50],
        opacity: [0, 1],
        x: [10, -50],
        position: "absolute",
        boxShadow: "rgba(100, 100, 111, 0.2) 2px 9px 29px 2px",
        border: "1.5px solid rgba(1, 1, 1, 0)",
        backgroundColor: "rgb(255,255,255)",
        zIndex: 0,
        transition: {
            delay: duration * 1/4,
            duration: duration,
            zIndex: {
                delay: duration * 3/4,
            },
            opacity: {
                duration: duration * 0.5
            }
        }
    },

    hidden: {
        position: "absolute",
        boxShadow: "rgba(0, 0, 0, 0) 0px 0px 0px 0px",
        border: "1.5px solid rgba(1, 1, 1, 0)",
        backgroundColor: "rgb(253,253,253)",
        y: 0,
        x: 0,
        zIndex: -2,
        opacity: 1
    },

    nextUp: {
        position: "absolute",
        boxShadow: "rgba(0, 0, 0, 0) 0px 0px 0px 0px",
        border: "1.5px solid rgba(1, 1, 1, 0.05)",
        backgroundColor: "rgb(253,253,253)",
        y: 0,
        x: 0,
        zIndex: -1,
        opacity: 1
    }
}

const increaseVariants = {
    onTop: {
        y: [0, -50],
        opacity: 1,
        x: -50,
        position: "absolute",
        zIndex: 0,
        boxShadow: "rgba(100, 100, 111, 0.2) 2px 9px 29px 2px",
        border: "1.5px solid rgba(1, 1, 1, 0)",
        backgroundColor: "rgb(255,255,255)",
        transition: {
            duration: duration,
            zIndex: {
                delay: duration * 1/2
            }
        }
    },

    hidden: {
        position: "absolute",
        y: [-50, -230, 0],
        x: [-50, 0],
        zIndex: -2,
        opacity: 1,
        boxShadow: "rgba(0, 0, 0, 0) 0px 0px 0px 0px",
        border: "1.5px solid rgba(1, 1, 1, 0)",
        backgroundColor: "rgb(253,253,253)",
        transition: {
            duration: duration,
            zIndex: {
              delay: duration * 1/2,
            },
            opacity: {
                delay: duration * 1/2,
                duration: duration * 1/2
            }
        }
    },

    nextUp: {
        position: "absolute",
        y: 0,
        x: 0,
        zIndex: -1,
        opacity: 1,
        boxShadow: "rgba(0, 0, 0, 0) 0px 0px 0px 0px",
        border: "1.5px solid rgba(1, 1, 1, 0.05)",
        backgroundColor: "rgb(253,253,253)",
        transition: {
            duration: duration,
            zIndex: {
              delay: duration * 1/2,
            }
        }
    } 
}

export default function Card(props) {
    return (
        <motion.div 
            initial={false}
            className={`testimonial-card ${props.state}`}
            animate={props.state}
            variants={props.increase? increaseVariants : decreaseVariants }
            transition={{ duration: duration }}>
            {/* onAnimationComplete={() => setClassName() }> */}

            <img src={props.image} />
            <p className='review'>{props.review}</p>
            <p className='name'>{props.name}</p>
            <p className='location'>{props.location}</p>
        </motion.div>
    )
}
