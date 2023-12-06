import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import SubjectCard from "@/Components/SubjectCard/SubjectCard";
import { useState } from "react";
import SearchIcon from "/public/Assets/search-icon.svg";

export default function SubjectList({ auth, subjectsData }) {
    console.log(subjectsData);

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Subjects" />
            <p className="flex justify-center items-center mt-12 text-black text-2xl ">
                <span className="border-b border-black">Subject Overview</span>
            </p>

            <div className="flex flex-wrap justify-center mt-12">
                {subjectsData.map((card, index) => (
                    <>
                        {console.log(card)}
                        <SubjectCard
                            key={index}
                            user={auth.user}
                            bgColor="bg-red-500"
                            content={card.subjectName}
                            arrowColor="bg-red-500"
                            dynamic={card}
                        />
                    </>
                ))}
            </div>
        </AuthenticatedLayout>
    );
}
