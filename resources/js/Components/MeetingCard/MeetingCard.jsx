import MeetingContent from "@/Components/MeetingContent/MeetingContent";

export default function MeetingCard({ title, content }) {
    return (
        <div className="bg-slate-400 p-4 mb-6 rounded-xl">
            <h1 className="font-bold text-xl mb-2 ">{title}</h1>
            <div className="flex flex-row items-center border-b w-full border-black" />
            <div className="flex flex-col">
                {content.map((item, index) => (
                    <MeetingContent key={index} title={item.title} />
                ))}
            </div>
        </div>
    );
}
