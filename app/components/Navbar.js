import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className="h-16 bg-purple-700 flex flex-col md:flex-row justify-between px-3 items-center text-white">
            <div className="logo font-bold text-lg mb-2 md:mb-0">
                RBFORT
            </div>
            <ul className="flex flex-col md:flex-row justify-center gap-2 md:gap-4 items-center w-full md:w-auto">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/shorten">Shorten</Link></li>
                <li><Link href="/contact">Contact Us</Link></li>
                <li>
                    <Link href="/generate">
                        <button className="bg-white text-purple-700 px-3 py-1 rounded hover:bg-purple-100 transition">Try Now</button>
                    </Link>
                </li>
                <li>
                    <Link href="/github">
                        <button className="bg-white text-purple-700 px-3 py-1 rounded hover:bg-purple-100 transition">GitHub</button>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
