import MeetingContent from "@/Components/MeetingContent/MeetingContent";

export default function MeetingCard({ index, title }) {
    return (
        <div className="bg-slate-400 p-4 mb-6 rounded-xl">
            <h1 className="font-bold text-xl mb-2 ">Jumat, 24 November 2023</h1>
            <div className="flex flex-row items-center border-b w-full border-black" />
            <div className="flex flex-col">
                <MeetingContent key={index} title={title} />
            </div>
        </div>
    );
}
