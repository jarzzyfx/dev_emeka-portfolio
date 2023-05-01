"use client"
import Link from "next/link"

import React, { FC } from "react"

interface CustomHeaderLinkProps {
    href: string
    title: string
} 


const CustomHeaderLink : FC<CustomHeaderLinkProps> = ({href, title }) => {
   
    return (
         <Link className="p-1 rounded-sm font-semibold text-xs relative group"  href={href}>
            {title}
            <span 
            className={
                `
                h-[1px] inline-block bg-indigo-700 w-0 absolute left-0 bottom-0 group-hover:w-full transition-[width] ease duration-200 
         
                `
            }
            
            >&nbsp;</span>    
        </Link>
    )
}

export default CustomHeaderLink
