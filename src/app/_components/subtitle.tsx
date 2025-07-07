"use client"

import { ReactNode } from "react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";

type itemsProps = {
    children: ReactNode | string,
    timeline?: gsap.core.Timeline | undefined,
    index?: number,
}

export default function Subtitle({ children, timeline, index}: itemsProps) {
    const subtitleRef = useRef(null);

    useGSAP(() => {
        const split = SplitText.create(subtitleRef.current, { type: "words" });

        if (timeline) {
            timeline.from(split.words, {
                opacity: 0,
                x: -100,
                duration: 0.8,
                stagger: 0.05,
            },
            index ? index * 0.1 : ''
        );
        }

    }, [timeline, index])

    return(
        <div ref={subtitleRef} className="flex items-start gap-1 mb-4.5">
            <span className="text-2xl text-red-100 font-semibold">*</span>
            <h2 className="text-base font-semibold">
                { children }
            </h2>
        </div>
    )
}
