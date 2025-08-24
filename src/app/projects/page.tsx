import Link from 'next/link'
export default function ProjectsPage() {

    const projects: { projectName: string, description: string, link: string | null }[] = [
        {
            projectName: "Alto",
            description: "Voice Email Client.",
            link: null
        },
        {
            projectName: "Amity",
            description: "Northwestern's Networking Tool",
            link: "https://northwestern.tryamity.com"
        }
    ]

    return (
        <div className="min-h-[95vh] px-2 md:px-[25vw]">
            <h1 className="mt-5">Projects</h1>
            {projects.map(project =>
                <div key={project.projectName} className="mt-2">
                    <h4>{project.projectName}</h4>
                    <p>{project.description}</p>
                    {project.link && <Link href={project.link}>Link</Link>}
                </div>
            )}

        </div>
    )
}