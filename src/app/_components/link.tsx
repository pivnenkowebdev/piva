import Link, {LinkProps} from "next/link"
import { ReactNode, AnchorHTMLAttributes } from "react"
import { Inter } from 'next/font/google'
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

type CustomLinkProps = LinkProps &
    AnchorHTMLAttributes<HTMLAnchorElement> & {
    children: ReactNode | string;
    timeline?: gsap.core.Timeline | undefined,
    index?: number,
};

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
})

export default function CustomLink({
    href,
    children,
    className,
    timeline,
    index,
    ...rest
}: CustomLinkProps) {
    const linkRef = useRef(null);
    
    useGSAP(() => {
        if (timeline) {
            timeline.from(linkRef.current, {
                duration: 0.8, 
                opacity: 0, 
            }, index ? index * 0.1 : '')
        }
    }, [timeline, index])

    return (
        <Link ref={linkRef} className={`px-3 py-2.5 bg-yellow-100 border-2 border-yellow-200 block text-center font-semibold text-md max-w-3xs ${inter.className} ${className}`} href={href} {...rest}>
        {children}
        </Link>
    );
}
