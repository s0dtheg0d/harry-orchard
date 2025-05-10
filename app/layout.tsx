"use client"
import { useState } from 'react';
import Link from 'next/link';
import { path } from '../utils/path';
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
          <link rel="icon" type="image/png" href="harrysLogo.png" />
          <title>Harry's Orchard</title>
          <meta name="description" content="Harry's Orchard" />
          <meta name="format-detection" content="telephone=no" />
        </head>
        <body>
            <header>
                <nav>
                    <ul className="nav">
                        <li><img src="harrysLogo.png" alt='Logo'></img></li>
                        <li>
                          <div className="dropdown">
                            <button className="nav-toggle" aria-label="Toggle navigation" onClick={() => {
                              setIsNavOpen(!isNavOpen);
                              console.log(isNavOpen);
                            }}>☰</button>
                            <div className="dropdown-content">
                              <ul className={isNavOpen ? 'open' : ''}>
                                <li><Link href="/">HOME</Link></li>
                                <li><Link href="/calendar">SEASON CALENDAR</Link></li>
                                <li><Link href="/purchase">PRE-PURCHASE</Link></li>
                                <li><Link href="/contact">CONTACT</Link></li>
                              </ul>
                            </div>
                          </div>
                          
                        </li>
                        <li><Link href="/">HOME</Link></li>
                        <li><Link href="/calendar">SEASON CALENDAR</Link></li>
                        <li><Link href="/purchase">PRE-PURCHASE</Link></li>
                        <li><Link href="/contact">CONTACT</Link></li>
                    </ul>
                </nav>
            </header>
            <main>{children}</main>
            <footer>
                <img src="harrysLogoText.png" alt='Logo'></img>
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