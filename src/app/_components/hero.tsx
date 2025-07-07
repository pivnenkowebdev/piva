"use client"

// import Image from "next/image";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import { SplitText } from "gsap/SplitText";

import InfoList from "./info-list";
import CustomLink from "./link";
import Subtitle from "./subtitle";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(SplitText);

export default function Hero() {
    const heroRef = useRef(null);
    const [tl, setTl] = useState<gsap.core.Timeline>();

    useGSAP(() => {
        const tl = gsap.timeline();
        setTl(tl);

        const mainTitleAnim = SplitText.create("#main-title", {
            type: "chars",
            autoSplit: true,
            aria: "auto",
        });

        tl.from(mainTitleAnim.chars, {
            duration: 0.3, 
            x: -100, 
            autoAlpha: 0, 
            stagger: 0.07
        })

    }, {scope: heroRef});

    const heroList = [
        "Программирование для подростков 12–17 лет — в индивидуальном или групповом формате",
        "Понятно, с поддержкой, в индивидуальном темпе.",
        "Первое пробное занятие — бесплатно"
    ]

    return(
    <div ref={heroRef} className="px-3.75 pt-7.25 relative overflow-hidden flex flex-col justify-between h-180">
        <div className="absolute top-30 w-280 h-290 bg-gray-200 -z-1 rotate-45"></div>
        <div className="max-w-72.25">
            <h1 className="font-bold text-3xl mb-3" id="main-title">Пивненко Антон</h1>
            <Subtitle timeline={tl} index={9}>Программирование для детей и подростков</Subtitle>
            <InfoList timeline={tl} index={16} className="mb-10" listOfItems={heroList}></InfoList>
            <CustomLink timeline={tl} index={26} href="https://t.me/pivnenkoweb" target="_blank" className="">Получить бесплатный урок</CustomLink>
        </div>
        {/* <Image src="/ava.png" id="avatar" className="self-center" width={165} height={339} alt="avatar"/> */}
    </div>
    )
}
