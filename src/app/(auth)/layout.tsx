"use client"
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./styles.css"

const navLinks = [
    {name:"Register", href:"/register"},
    {name:"Login", href:"/login"},
    {name:"Forgot Password", href:"/forgot-password"},
]


export default function AuthLayout({children,}:{
    children:React.ReactNode
}){
    const pathname = usePathname();
    return (
        <>
            <h2>Inner layout</h2>
            {
                navLinks.map((link)=>{
                    const isActive = pathname.startsWith(link.href)
                    return(
                        <Link className={isActive ? "font-bold text-3xl mr-4": " text-blue-500"} href={link.href} key={link.name}>{link.name}</Link>
                    )
                })
            }
            {children}
        </>
    )
}