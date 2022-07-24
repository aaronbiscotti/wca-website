import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className="sticky top-0 left-0 w-full p-[20px] flex bg-white justify-between items-center z-10">
        <Image src="/logo.svg" width='50' height='50' />
        <div className="flex items-center">
            <ul className="flex space-x-8 font-semibold text-text-title antialiased text-sm">
                <Link href="/"><li>HOME</li></Link>
                <Link href="/"><li>WHO WE ARE</li></Link>
                <Link href="/"><li>WHAT WE DO</li></Link>
                <Link href="/"><li>NEWS AND BLOG</li></Link>
                <Link href="/"><li>CONTACT</li></Link>
            </ul>
            <button className="text-sm bg-primary text-white px-5 py-2 ml-8 hover:bg-secondary ease-in-out duration-150">DONATE</button>
        </div>
    </div>
  )
}

export default Navbar