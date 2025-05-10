import Link from "next/link";

export default function RecruitmentPage() {
    return (
        <div className="nonHomePage w-full md:px-[20vw]">
            <h1 className="mb-2">Recruitment</h1>

            <h2>Who should join Homebrew?</h2>

            <p className="mb-3">Homebrew is made for people who:</p>

            <ul className="list-decimal pl-10 mb-3">

                <li>
                    Have a habit of building things (or want to develop that habit).
                </li>
                <li>
                    Want to meet other builders.
                </li>
                <li>
                    Enjoy food.
                </li>

            </ul>

            <p>If that sounds like you, feel free to <Link href="https://tally.so/r/mZggez">apply</Link>!</p>

            <h2 className="mt-5">When do I apply?</h2>

            <p>We review applications on a rolling basis throughout the quarter. Applications typically take less than a week to review. If you have an idea or project, you should <Link href="https://tally.so/r/mZggez">apply now</Link>!</p>
        </div>
    );
}