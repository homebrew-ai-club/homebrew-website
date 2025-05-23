import Link from "next/link";

export default function AboutPage() {
    return (
        <div className="nonHomePage w-full px-6 md:px-[20vw] py-6 md:py-8">
            <h1 className="mb-2 text-2xl md:text-3xl">About the Club</h1>

            <h2 className="text-xl md:text-2xl mt-6 mb-3">Homebrew is Northwestern's club for builders.</h2>

            <p className="mb-3">We are a home for people who want to get their hands dirty building things. We provide members with a low-stakes environment to make ideas become reality.</p>

            <p className="mb-3">Homebrew members meet weekly for demo days. Demo days are a time for you to show your recent project progress and connect with people who can help you.</p>

            <p className="mb-6">Besides demo days, we help host a variety of tech-related events on campus. Sign up for the <Link href="https://tally.so/r/wayylv">email list</Link>!</p>

            <h2 className="text-xl md:text-2xl mt-8 mb-3">When do I apply?</h2>

            <p className="mb-3">We review applications on a rolling basis throughout the quarter. If you have an idea or project, you should <Link href="https://tally.so/r/mZggez">apply now</Link>!</p>

            <p>You can also read more about the recruitment process <Link href="/recruitment">here</Link>.</p>
        </div>
    );
}