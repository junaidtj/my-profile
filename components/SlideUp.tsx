"use client"
import React, { ReactNode, useEffect, useRef } from "react"
interface props{
    offset?: string
    children?: ReactNode
}
 export default function SlideUp({children, offset = "0px"}:props) {
    const ref= useRef(null)

    useEffect(() =>{
        const observer = new IntersectionObserver (
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.remove("opacity-0")
                        entry.target.classList.add("animate-slideUpCubiBezier")
                    }
                })
            },
            {rootMargin:offset}
        )
        if(ref.current){
            observer.observe(ref.current)
        }
    }, [offset, ref])
    return(
        <div ref={ref} className="relative opacity-0">
            {children}
        </div>
    )
 }