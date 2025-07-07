import LogoICON from "@/app/images/logo.svg";
import Link from "next/link";
import Burger from "./burger";
import Menu from "./menu";

export default function Header() {
    return (
        <>
            <header className="bg-yellow-100 py-2.5 px-3.5 flex justify-between items-center">
                <Link href="" className="z-50">
                    <LogoICON></LogoICON>
                </Link>
                <Menu />
                <Burger />
            </header>
        </>
    )
}
