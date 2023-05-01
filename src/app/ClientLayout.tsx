"use client"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { ReactNode } from "react"
// import { useRouter } from "next/router"

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    // const router = useRouter();
    return (
        <div className="divide-y-[1px] divide-solid">
            <Navbar  />
            {children}
            <Footer/>
        </div>
    )
}

export default Layout
