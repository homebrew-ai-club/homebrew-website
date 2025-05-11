import Link from "next/link";

export default function RecruitmentPage() {
    return (
        <div className="nonHomePage w-full px-6 md:px-[20vw] py-6 md:py-8">
            <h1 className="mb-2 text-2xl md:text-3xl">Recruitment</h1>

            <h2 className="text-xl md:text-2xl mt-6 mb-3">Who should join Homebrew?</h2>

            <p className="mb-3">Homebrew is made for people who:</p>

            <ul className="list-decimal pl-6 md:pl-10 mb-6">
                <li className="mb-2">
                    Have a habit of building things (or want to develop that habit).
                </li>
                <li className="mb-2">
                    Want to meet other builders.
                </li>
                <li className="mb-2">
                    Enjoy food.
                </li>
            </ul>

            <p className="mb-6">If that sounds like you, feel free to <Link href="https://tally.so/r/mZggez">apply</Link>!</p>

            <h2 className="text-xl md:text-2xl mt-8 mb-3">When do I apply?</h2>

            <p>We review applications on a rolling basis throughout the quarter. Applications typically take less than a week to review. If you have an idea or project, you should <Link href="https://tally.so/r/mZggez">apply now</Link>!</p>
        </div>
    );
}