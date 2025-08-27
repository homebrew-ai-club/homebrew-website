import Link from "next/link";
import Image from "next/image";

export default function ExecPage() {
    const boardMembers = [
        {
            name: "Vira Vitiv",
            description: "TRMNL4 x Meta Program Lead",
            major: "Econ + Psych + Data Science",
            link: "LinkedIn",
            url: "https://www.linkedin.com/in/vira-bohdana-vitiv-418956201/",
            image: "/headshots/vira_headshot.jpeg"
        },
        {
            name: "Andrew Yuan",
            description: "Product Design @ Tonal",
            major: "Computer Science + Design",
            link: "andrew-yuan.com",
            url: "https://andrew-yuan.com",
            image: "/headshots/andrew_headshot.jpg"
        },
        {
            name: "Kaival Shah",
            description: "Research @ HAND ERC",
            major: "Computer Science + Math",
            link: "kaival.dev",
            url: "https://kaival.dev",
            image: "/headshots/kaival_headshot.jpg"
        },
        {
            name: "Ryan Kang",
            description: "Growth @ Beam",
            major: "Econ + HCI",
            link: "LinkedIn",
            url: "https://www.linkedin.com/in/ryan-kang-0b69831ba/",
            image: "/headshots/ryan_kang_headshot.jpeg"
        },
        {
            name: "Julia Li",
            description: "Speaker & Creator",
            major: "Computer Science",
            link: "LinkedIn",
            url: "https://www.linkedin.com/in/juliajiaqili/",
            image: "/headshots/julia_li_headshot.jpeg"
        }
    ];

    return (
        <div className="nonHomePage w-full px-4 md:px-[10vw] py-8">
            <h1 className="text-3xl mb-8">2025-26 Executive Board</h1>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {boardMembers.map((member, index) => (
                    <div key={index} className="flex flex-col items-center text-center p-6 border border-black">
                        <div className="w-48 h-48 relative mb-4 rounded-full overflow-hidden">
                            <Image
                            src={member.image} alt="member headshot"
                            fill
                            className="object-cover object-center"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        </div>
                        <h3 className="text-xl mb-2">{member.name}</h3>
                        <p>{member.description}</p>
                        <p>{member.major}</p>
                        {(member.link && member.url) &&
                            <p className="mt-2"><Link href={member.url}>{member.link}</Link></p>
                        }
                    </div>
                ))}
            </div>
        </div>
    );
}