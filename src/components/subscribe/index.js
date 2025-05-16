import React from 'react'
import MailOutlineIcon from '@mui/icons-material/MailOutline';

import sendLogo from '../../static/subscribe/send_logo.png';
import spiralLeft from '../../static/subscribe/spiral_left.png';
import spiralRight from '../../static/subscribe/spiral_right.png';

import "../../static/styles/Subscribe.scss";

export default function Subscribe() {
    return (
        <div className='subscribe'>
            <img className='sendLogo' src={sendLogo} />
            <h2 className='header'>Subscribe to get information, latest news and other interesting offers about Jadoo</h2>
            <div className='email'>
                <div className='email-input'>
                    <span className='mail-icon'><MailOutlineIcon /></span>
                    <input type="text" placeholder='Your email' />
                </div>

                <button className='subscribe-btn'>Subscribe</button>
            </div>
            <img className='spiralLeft' src={spiralLeft} />
            <img className='spiralRight' src={spiralRight} />
        </div>
    )
}
