"use client"
import { useState } from 'react';
import { prefix } from '/utils/prefix';
import Link from 'next/link';
import '/styles/globals.css';

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    const [isNavOpen, setIsNavOpen] = useState(false);
    return (
      <html lang="en">
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" type="image/png" href={prefix("/harrysLogo.png")} />
          <title>Harry's Orchard</title>
          <meta name="description" content="Harry's Orchard" />
          <meta name="format-detection" content="telephone=no" />
        </head>
        <body>
            <header>
                <nav>
                    <ul className="nav">
                        <li><Link className="topLogo" href="/"><img src={prefix("/harrysLogo.png")} alt='Logo'></img></Link></li>
                        <li>
                          <div className="dropdown">
                            <button className="nav-toggle" aria-label="Toggle navigation" onClick={() => {
                              setIsNavOpen(!isNavOpen);
                              console.log(isNavOpen);
                            }}>☰</button>
                            <div className="dropdown-content">
                              <ul className={isNavOpen ? 'open' : ''}>
                                <li><Link href="/"  onClick={() => setIsNavOpen(false)}>HOME</Link></li>
                                <li><Link href="/calendar"  onClick={() => setIsNavOpen(false)}>SEASON CALENDAR</Link></li>
                                <li><Link href="/events"  onClick={() => setIsNavOpen(false)}>EVENTS</Link></li>
                                <li><Link href="/contact"  onClick={() => setIsNavOpen(false)}>CONTACT</Link></li>
                                <li><Link href="/purchase"  onClick={() => setIsNavOpen(false)}>PURCHASE</Link></li>
                              </ul>
                            </div>
                          </div>
                          
                        </li>
                        <li><Link href="/">HOME</Link></li>
                        <li><Link href="/calendar">SEASON CALENDAR</Link></li>
                        <li><Link href="/events">EVENTS</Link></li>
                        <li><Link href="/contact">CONTACT</Link></li>
                        <li><Link href="/purchase">PURCHASE</Link></li>
                        <li>
                          <Link href="/shoppingCart" className="shopping-cart" aria-label="Shopping Cart">
                            <svg 
                              xmlns="http://www.w3.org/2000/svg" 
                              viewBox="0 0 576 512" 
                              width="24" 
                              height="24" 
                              fill="currentColor">
                                <path d="M528.12 301.319L576 118H131.27l-9.67-33.641A24 24 0 0 0 100.69 48H24A24 24 0 0 0 0 72v16a24 24 0 0 0 24 24h63.637l70.795 246.213A63.987 63.987 0 1 0 168 400h288a64 64 0 1 0 16-98.681zM201.838 400a32 32 0 1 1 32 32 32 32 0 0 1-32-32zm240 0a32 32 0 1 1 32 32 32 32 0 0 1-32-32z"/>
                            </svg>
                            <span className="cart-label">Cart</span>
                          </Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>{children}</main>
            <footer>
                <img src={prefix("/harrysLogoText.png")} alt='Logo'></img>
                <div>
                  <p><a id="telephone" href="tel: +1-999-999-999">(999) 999-999</a></p>
                  <p>CONTACT<wbr></wbr>@HARRYSORCHARD.COM</p>
                </div>
                <div>
                  <p>HARRY'S ORCHARD</p>
                  <p>420 GROWERS LANE</p>
                  <p>EASTTOWN, ST 24446</p>
                </div>
            </footer>
        </body>
      </html>
    )
  }