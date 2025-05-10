import Link from 'next/link';
import { path } from '../utils/path';
import '/styles/home.css';

export default function Page() {
    return (
        <div className="home">
            <div className="topBar">
                <img src='harrysLogoText.png' id="logoText"/>
                <img src='stockPhotos/AdobeStock_292290573.jpeg' id='stockUnderLogo'></img>
            </div>

            <div className="selectPictures">
                <div>
                    <img src="stockPhotos/pexels-zen-chung-5529003.jpg"></img>
                    <p><Link href="/purchase">PICK YOUR OWN</Link></p>
                </div>
                <div>
                    <img src="stockPhotos/pexels-gustavodenuncio-31558768.jpg"></img>
                    <p><Link href="/calendar">SEASON EVENTS</Link></p>
                </div>
                <div>
                    <img src="stockPhotos/pexels-zen-chung-5528990.jpg"></img>
                    <p><Link href="/purchase">GET TICKETS</Link></p> 
                </div>  
                <div>
                    <img src="stockPhotos/pexels-planka-27080445.jpg"></img>
                    <p><Link href="/calendar">CALENDAR</Link></p> 
                </div>             
            </div>

            <h2>SUMMER SEASON</h2>
            <div className = "splitContainer">
                <div className="leftSide">
                    <div className="seasonFruits">
                        <h4>PICK YOUR OWN</h4>
                        <table>
                            <thead>
                                <tr>
                                    <th>FRUIT</th>
                                    <th>SEASON</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>APPLES</td>
                                    <td>MAY-NOV</td>
                                </tr>
                                <tr>
                                    <td>CHERRIES</td>
                                    <td>JUNE-JULY</td>
                                </tr>
                                <tr>
                                    <td>STRAWBERRIES</td>
                                    <td>JUNE-JULY</td>
                                </tr>
                                <tr>
                                    <td>PEACHES</td>
                                    <td>JULY-SEP</td>
                                </tr>
                            </tbody>
                        </table>
                        <p><Link href="/calendar">VIEW FULL HARVEST CALENDAR &gt;</Link></p>
                    </div>
                    <img src="stockPhotos/pexels-sinalmultimedia-28886689.jpg"></img>
                    <div className="hours">
                        <h3>HOURS</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>MONDAY</td>
                                    <td>8AM - 7PM</td>
                                </tr>
                                <tr>
                                    <td>TUESDAY</td>
                                    <td>8AM - 7PM</td>
                                </tr>
                                <tr>
                                    <td>WEDNESDAY</td>
                                    <td>8AM - 7PM</td>
                                </tr>
                                <tr>
                                    <td>THURSDAY</td>
                                    <td>8AM - 7PM</td>
                                </tr>
                                <tr>
                                    <td>FRIDAY</td>
                                    <td>7AM - 8PM</td>
                                </tr>
                                <tr>
                                    <td>SATURDAY</td>
                                    <td>7AM - 8PM</td>
                                </tr>
                                <tr>
                                    <td>SUNDAY</td>
                                    <td>CLOSED</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="rightSide">
                    <img src="stockPhotos/pexels-planka-27080445.jpg"></img>
                    <h3>EVENTS</h3>

                    <div>
                        <h4>OPENING DAY</h4>
                        <p>MAY 22, 8:00 AM</p>
                    </div>

                    <div>
                        <h5>HARRY'S ORCHARDS</h5>
                        <h4>ANNUAL PIE EATING CONTEST</h4>
                        <p>JUNE 7, 3:00 PM</p>
                        <p className="small">$15 ENTRY FEE</p>
                        <p className="small">WINNER GETS A VOUCHER FOR ONE FREE PIE</p>
                    </div>

                    <div>
                        <h4>COUNTY FARM FESTIVAL</h4>
                        <p>JUNE 13 - JUNE 15</p>
                        <p className="small">$5 ENTRY FEE</p>
                        <p className="small">FOOD, GAMES, AND RIDES FOR THE FAMILY</p>
                    </div>
                    <p><Link href="/calendar">VIEW FULL EVENTS CALENDAR &gt;</Link></p>
                </div>
            </div>
        </div>
    )
}