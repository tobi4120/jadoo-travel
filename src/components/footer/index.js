import React from 'react';

import facebook from '../../static/footer/facebook.png';
import twitter from '../../static/footer/twitter.png';
import instagram from '../../static/footer/instagram.png';
import googlePlay from '../../static/footer/Google_play.png';
import appleStore from '../../static/footer/Play_store.png';

import "../../static/styles/Footer.scss";

export default function Footer() {
    return (
        <div className='footer'>
            <div className="footer-table">
                {/* <div className='footer-table-header'>
                    <div className='th'>
                        <h2 className='jadoo-name'>Jadoo.</h2>
                    </div>
                    <div className='th'>
                        <p>Company</p>
                    </div>
                    <div className='th'>
                        <p>Contact</p>
                    </div>
                    <div className='th'>
                        <p>More</p>
                    </div>
                    <div className='th'>
                    </div>
                </div> */}

                <div className='footer-table-body'>
                    <div className='col-1'>
                        <div className='th'>
                            <h2 className='jadoo-name'>Jadoo.</h2>
                        </div>
                        <p>Book your trip in minutes, get full control for much longer.</p>
                    </div>
                    <div className='col-2'>
                        <div className='th'>
                            <p>Company</p>
                        </div>
                        <ul>
                            <li>About</li>
                            <li>Careers</li>
                            <li>Mobile</li>
                        </ul>
                    </div>
                    <div className='col-3'>
                        <div className='th'>
                            <p>Contact</p>
                        </div>
                        <ul>
                            <li>Help/FAQ</li>
                            <li>Press</li>
                            <li>Affiliates</li>
                        </ul>
                    </div>
                    <div className='col-4'>
                        <div className='th'>
                            <p>More</p>
                        </div>
                        <ul>
                            <li>Aireline fees</li>
                            <li>Airline</li>
                            <li>Low fare tips</li>
                        </ul>
                    </div>
                    <div className='col-5'>
                        <div className='th'>
                            <p>Socials</p>
                        </div>
                        <div class="socials">
                            <img src={facebook} />
                            <img src={instagram} />
                            <img src={twitter} />
                        </div>
                    </div>
                </div>
            </div>

            {/* <table class="footer-table">
                <thead>
                    <tr>
                    <th className='jadoo-name'>Jadoo.</th>
                    <th>Company</th>
                    <th>Contact</th>
                    <th>More</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td className='col-1'>
                        <p>Book your trip in minutes, get full control for much longer.</p>
                    </td>
                    <td className='col-2'>
                        <ul>
                        <li>About</li>
                        <li>Careers</li>
                        <li>Mobile</li>
                        </ul>
                    </td>
                    <td className='col-3'>
                        <ul>
                        <li>Help/FAQ</li>
                        <li>Press</li>
                        <li>Affiliates</li>
                        </ul>
                    </td>
                    <td className='col-4'>
                        <ul>
                        <li>Aireline fees</li>
                        <li>Airline</li>
                        <li>Low fare tips</li>
                        </ul>
                    </td>
                    <td className='col-5'>
                        <div class="socials">
                        <img src={facebook} />
                        <img src={instagram} />
                        <img src={twitter} />
                        </div>
                        <div class="app">
                        <h3>Discover our app</h3>
                        <img src={googlePlay} />
                        <img src={appleStore} />
                        </div>
                    </td>
                    </tr>
                </tbody>
            </table> */}

            <p className='copyright'>All rights reserved@jadoo.ca</p>
        </div>
    )
}
