import Link from "next/link";
import Image from "next/image";

export default function ExecPage() {
    const boardMembers = [
        {
            name: "Vira Vitiv",
            description: "Prev exec board @ EPIC.",
            major: "Econ + Psych + Data Science",
            link: "LinkedIn",
            url: "https://www.linkedin.com/in/vira-bohdana-vitiv-418956201/",
            image: "/placeholder.jpg"
        },
        {
            name: "Andrew Yuan",
            description: "Product Design @ Tonal.",
            major: "Computer Science + Design",
            link: "andrew-yuan.com",
            url: "https://andrew-yuan.com",
            image: "/placeholder.jpg"
        },
        {
            name: "Kaival Shah",
            description: "CTO @ Appetize.",
            major: "Computer Science + Math",
            link: "kaival.dev",
            url: "https://kaival.dev",
            image: "/placeholder.jpg"
        },
    ];

    return (
        <div className="nonHomePage w-full px-4 md:px-[10vw] py-8">
            <h1 className="text-3xl font-bold mb-8">2025-26 Executive Board</h1>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {boardMembers.map((member, index) => (
                    <div key={index} className="flex flex-col items-center text-center p-6 rounded-lg shadow-md">
                        <div className="w-48 h-48 relative mb-4 rounded-full overflow-hidden">
                            {/* Placeholder for headshot */}
                            <div className="w-full h-full bg-gray-300"></div>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
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