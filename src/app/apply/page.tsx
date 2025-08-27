import Link from "next/link";

export default function RecruitmentPage() {
    return (
        <div className="nonHomePage w-full min-h-[90vh] px-6 md:px-[20vw] py-6 md:py-8">
            <h1 className="mb-5 text-2xl md:text-3xl">Recruitment</h1>
            
            <h2>Apply</h2>
            <p className="mb-5">Recruitment is currently closed and will open in Fall 2025. In the meantime, fill out the <Link href="https://forms.gle/Bi3fj2hX7FLYiDGX9">Interest Form</Link> so you'll be notified when recruitment starts! </p>

            <h2>FAQ</h2>
            <h4>What does recruitment look like?</h4>
            <p className="mb-3">After applying, you may be invited for an interview, where you'll talk about your experiences, interests, and motivations. If you pass the interview stage, you're in! You'll then stay in the club as long as you meet member standards.</p>

            <h4>What are member standards?</h4>
            <p className="mb-3">Homebrew holds its members to standard of commitment. Members are expected to work on projects, attend most weekly demo days, and demo (a casual presentation about your recent progress) a few times per quarter. </p>

            <h4>Will I get kicked out if I don't show up / demo?</h4>
            <p>Yes! But no worries, we know people get busy, so just apply again the next quarter and we won't hold it against you.</p>
        </div>
    );
}