export default function Menu() {
    return(
        <nav className="fixed inset-0 bg-yellow-100 text-black z-40 -translate-full">
            <ul className="h-full flex justify-center items-center flex-col gap-6 font-semibold">
                <li>Обо мне</li>
                <li>Курсы</li>
                <li>Примеры работ</li>
                <li>Отзывы</li>
                <li>Вопросы</li>
            </ul>
        </nav>
    )
}
