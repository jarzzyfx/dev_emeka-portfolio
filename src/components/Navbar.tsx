"use client"
import Link from "next/link"
import React, { FC } from "react"
import CustomHeaderLink from "./ui/CustomHeaderLink"
import Button from "./ui/Button"
import { MessageSquare } from "lucide-react"

interface NavbarProps {} 


const Navbar : FC<NavbarProps> = ({}) => {
 
    return (
        <nav className="flex bg-white z-40 sticky top-0 left-0 items-center w-full justify-between pt-6 pb-6 pl-20 pr-20">
            <Link href='/' className="font-bold flex text-xl" >
            D<div className="text-indigo-700 -rotate-30">E</div>
            </Link>

            <ul className="flex items-center gap-6">
                <li><CustomHeaderLink key={1} href="/" title="Home"/></li>
                <li><CustomHeaderLink key={2} href="/about" title="About Me"/></li>
                <li><CustomHeaderLink key={3} href="/projects" title="My projects"/></li>
                <li><Button className='flex items-center justify-between' variant='ghost' size='sm'>
                <MessageSquare className="h-4 w-4 text-indigo-700  "/>
                    <span className="text-xs">Contact me</span>
                     </Button></li>
            </ul>
        </nav>
    )
}

export default Navbar
