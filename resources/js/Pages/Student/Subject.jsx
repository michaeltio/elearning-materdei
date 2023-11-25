import Abstract from "/public/Assets/abstract.png";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import MeetingCard from "@/Components/MeetingCard/MeetingCard";

export default function Subject({ auth }) {
    const subjectEx = {
        subject: "Math",
        meeting: [
            {
                title: "Jumat, 30 Oktober 2023",
                content: [
                    { title: "materi pertemuan 1" },
                    { title: "materi pertemuan 2" },
                ],
            },
            {
                title: "Senin",
                content: [
                    { title: "materi pertemuan 3" },
                    { title: "materi pertemuan 4" },
                ],
            },
        ],
    };
    return (
        <AuthenticatedLayout user={auth.user}>
            <div className="p-6">
                <p className="font-bold text-sm text-slate-400 cursor-pointer">
                    Subject / {subjectEx.subject}
                </p>

                <div className="flex flex-row justify-between items-center mb-6">
                    <h1 className="font-bold text-xl">Matematika</h1>
                    <img
                        src={Abstract}
                        className="w-24 bg-slate-300 py-2 px-6 rounded-lg hidden md:block"
                    />
                </div>

                <div className="flex flex-col w-full text-white">
                    {subjectEx.meeting.map((item, index) => (
                        <MeetingCard
                            key={index}
                            title={item.title}
                            content={item.content}
                        />
                    ))}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
