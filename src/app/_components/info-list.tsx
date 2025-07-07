"use client"

import { useRef } from "react";
import { useGSAP } from "@gsap/react";

type itemsProps = {
    listOfItems: string[],
    className: string,
    timeline: gsap.core.Timeline | undefined,
    index: number
}

export default function InfoList({ listOfItems, className, timeline, index }: itemsProps) {
    const listRef = useRef(null);
    
    useGSAP(() => {
        if (timeline) {
            timeline.from('[data-item]', {
                duration: 0.8, 
                x: -100, 
                opacity: 0, 
                stagger: 0.3
            }, index ? index * 0.1 : '')
        }
    }, [timeline, index, {scope: listRef.current}])
    
    return (
        <ul ref={listRef} className={`flex flex-col gap-2 ${className ?? ''}`}>
        {listOfItems.map((text: string) => (
            <li key={text} data-item className="flex items-start gap-1">
                <div className="self-start pt-1.75 shrink-0">
                    <span className="w-3.5 h-0.5 bg-red-100 block"/>
                </div>
                <span className="text-tiny font-normal">{text}</span>
            </li>
        ))}
        </ul>
    );
}
