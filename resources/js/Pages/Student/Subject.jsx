import Abstract from "/public/Assets/abstract.png";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import MeetingCard from "@/Components/MeetingCard/MeetingCard";

export default function Subject({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <div className="p-6">
                <p className="font-bold text-sm text-slate-400 cursor-pointer">
                    Mapel / Matematika
                </p>

                <div className="flex flex-row justify-between items-center mb-6">
                    <h1 className="font-bold text-xl">Matematika</h1>
                    <img
                        src={Abstract}
                        className="w-24 bg-slate-300 py-2 px-6 rounded-lg hidden md:block"
                    />
                </div>

                <div className="flex flex-col w-full text-white">
                    <MeetingCard />
                    <MeetingCard />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
