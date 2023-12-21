import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import SubjectCard from "@/Components/SubjectCard/SubjectCard";
import { useState } from "react";
import SearchIcon from "/public/Assets/search-icon.svg";
import { Link } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";

export default function SubjectList({ auth, subjectsData, classId }) {
    console.log(subjectsData);
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Subjects" />
            <div className="flex flex-col justify-center items-center mt-12 text-black text-2xl ">
                <span className="border-b border-black">Subject Overview</span>
                {auth.user.user_details.role === "admin" && (
                    <Link
                        className="mt-12"
                        href={route("adminAddSubject", { classId: classId })}
                    >
                        <PrimaryButton>Add Subject</PrimaryButton>
                    </Link>
                )}
            </div>
            <div className="flex flex-wrap justify-center mt-12">
                {subjectsData.map((card, index) => (
                    <SubjectCard
                        key={index}
                        user={auth.user}
                        bgColor="bg-red-500"
                        content={card}
                        arrowColor="bg-red-500"
                        dynamic={card}
                        classId={classId}
                    />
                ))}
            </div>
        </AuthenticatedLayout>
    );
}
