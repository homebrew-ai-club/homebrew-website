import Link from "next/link";
import Image from "next/image";
import { NavLinks } from "./Navbar"

export default function Footer() {
    return (
        <div>
            <hr />
            <div className="px-5 my-6 flex flex-row items-end justify-between">
                <div className="flex flex-col">
                    <h3>Join Homebrew.</h3>
                    <NavLinks />
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
                </div>
            </div>
        </div>
    )
}