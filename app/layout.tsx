import Link from 'next/link';

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>
            <header>
                <nav>
                    <img src='/logo.png' alt='Logo' className='logo'/>
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/calendar">Season Calendar</Link></li>
                        <li><Link href="/hours">Hours</Link></li>
                        <li><Link href="/purchase">Pre-Purchase</Link></li>
                        <li><Link href="/">Contact</Link></li>
                    </ul>
                </nav>
            </header>
            <main>{children}</main>
        </body>
      </html>
    )
  }