import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <div>
            <hr />
            <div className="px-5 my-6 flex flex-row items-end justify-between">
                <div className="flex flex-col">
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
                <div className="flex flex-col items-end gap-5">
                    <Link href="https://instagram.com">
                        <Image
                            src="/icons/instagram.png"
                            alt="instagram icon"
                            width={30}
                            height={30}
                        />
                    </Link>
                    <p>Website by <Link href="https://andrew-yuan.com">Andrew Yuan</Link>.</p>
                </div>
            </div>
        </div>
    )
}