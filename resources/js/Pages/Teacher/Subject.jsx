import Abstract from "/public/Assets/abstract.png";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import MeetingCard from "@/Components/MeetingCard/MeetingCard";
import PrimaryButton from "@/Components/PrimaryButton";
import { Link } from "@inertiajs/react";

export default function Subject({ auth, subjectData }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <div className="p-6">
                <p className="font-bold text-sm text-slate-400 cursor-pointer">
                    Subject / {subjectData.subjectName}
                </p>

                <div className="flex flex-row justify-between items-center mb-6">
                    <h1 className="font-bold text-xl">
                        {subjectData.subjectName}
                    </h1>
                    <img
                        src={Abstract}
                        className="w-24 bg-slate-300 py-2 px-6 rounded-lg hidden md:block"
                    />
                </div>

                <div className="flex flex-col w-full text-white">
                    {subjectData.subject_datas.map((item) => (
                        <MeetingCard
                            key={item.id}
                            content={item}
                            user={auth.user}
                        />
                    ))}
                </div>
                {(auth.user.user_details.role === "teacher" ||
                    auth.user.user_details.role === "admin") && (
                    <PrimaryButton>
                        <Link
                            href={route("teacherSubjectAdd", {
                                subjectId: subjectData.subjectId,
                            })}
                        >
                            Add Material
                        </Link>
                    </PrimaryButton>
                )}
            </div>
        </AuthenticatedLayout>
    );
}
