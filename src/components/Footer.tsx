import Link from "next/link";

export default function Footer() {
    return (
        <div>
            <hr />
            <div className="px-5 my-6">
            <h2>Want to Join Homebrew?</h2>
            <p className="mb-4 max-w-[60vw]">We review applications on a rolling basis throughout the quarter. Applications typically take less than a week to review.</p>
            <p>
                <Link
                    href="https://tally.so/r/mZggez"
                >
                    Apply Now
                </Link>
            </p>
            </div>
        </div>
    )
}