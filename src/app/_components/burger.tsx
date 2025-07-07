export default function Burger() {
    return(
        <button className="w-10 h-10 md:hidden z-50">
            <span className="relative w-full h-0.5 bg-black block before:absolute before:-top-2 before:block before:bg-black before:w-full before:h-0.5 after:absolute after:-bottom-2 after:block after:bg-black after:w-full after:h-0.5"></span>
        </button>
    )
}