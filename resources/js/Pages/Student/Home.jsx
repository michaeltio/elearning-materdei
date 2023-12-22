import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import SubjectCard from "@/Components/SubjectCard/SubjectCard";
import { useState } from "react";
//icon
import SearchIcon from "/public/Assets/search-icon.svg";

export default function StudentHome({ auth }) {
    const subjects = auth.user.user_details.classes.class_subjects;

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Home" />
            <p className="flex justify-center items-center mt-12 text-black text-2xl ">
                <span className="border-b border-black">Subject Overview</span>
            </p>

            <div className="flex flex-wrap justify-center mt-12">
                {subjects.map((card, index) => (
                    <SubjectCard
                        key={index}
                        user={auth.user}
                        bgColor="bg-red-500"
                        content={card.subject_details}
                        arrowColor="bg-red-500"
                        dynamic={card.subject_details}
                    />
                ))}
            </div>
        </AuthenticatedLayout>
    );
}
