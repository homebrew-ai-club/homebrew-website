import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <div>
            <hr />
            <div className="px-5 my-6 flex flex-row items-end justify-between">
                <div className="flex flex-col">
                    <h2>Want to Join Homebrew?</h2>
                    <p className="mb-4 max-w-[60vw]">Tell us about yourself! This is an opportunity for us to get to know your interests, goals, and what you're passionate about building.</p>
                    <p>
                        <Link
                            href="https://tally.so/r/mZggez"
                        >
                            Apply Now
                        </Link>
                    </p>
                </div>
                <div className="flex flex-col items-end gap-5">
                    <div className="flex flex-row items-end gap-5">
                        <Link href="https://www.linkedin.com/company/homebrewnu/">
                            <Image
                                src="/icons/linkedin.png"
                                alt="linkedin icon"
                                width={30}
                                height={30}
                            />
                        </Link>
                        <Link href="https://www.instagram.com/homebrew.nu">
                            <Image
                                src="/icons/instagram.png"
                                alt="instagram icon"
                                width={30}
                                height={30}
                            />
                        </Link>
                    </div>
                    <p>Website made with 🤎 by the Homebrew team.</p>
                </div>
            </div>
        </div>
    )
}