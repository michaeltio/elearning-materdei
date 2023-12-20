import EditIcon from "/public/Assets/edit-icon.svg";
import { Link } from "@inertiajs/react";

export default function MeetingCard({ user, content }) {
    return (
        <div className="bg-slate-400 p-4 mt-6 rounded-xl">
            <h1 className="font-bold text-xl mb-2 ">{content.title}</h1>
            <div className="flex flex-row items-center border-b w-full border-black" />
            <div className="flex flex-col">
                <div className="flex flex-row items-center mt-2">
                    <h2 className="text-sm">{content.desc}</h2>
                </div>
                {content.file && (
                    <div>
                        <a
                            download={content.file}
                            href={"public/uploaded/" + content.file}
                        >
                            File Name: {content.file}
                        </a>
                    </div>
                )}

                {!content.file && (
                    <div>
                        <p>No file available.</p>
                    </div>
                )}
            </div>
            {(user.user_details.role === "teacher" ||
                user.user_details.role === "admin") && (
                <div className="flex flex-row mt-2">
                    <Link
                        href={route("teacherSubjectEdit", {
                            id: content.id,
                            subjectId: content.subjectId,
                        })}
                    >
                        <img className="w-5 h-5" src={EditIcon} />
                    </Link>
                </div>
            )}
        </div>
    );
}
