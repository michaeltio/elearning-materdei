import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import SubjectCard from "@/Components/SubjectCard/SubjectCard";
import { useState } from "react";
//icon
import SearchIcon from "/public/Assets/search-icon.svg";

export default function StudentHome({ auth, subjectsData }) {
    const [search, setSearch] = useState("");

    //filter the data based on the search input
    const filteredSubjects = subjectsData.filter((subject) =>
        subject.subjectName.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Home" />
            <p className="flex justify-center items-center mt-12 text-black text-2xl ">
                <span className="border-b border-black">Subject Overview</span>
            </p>
            <div className="flex flex-col items-center justify-center mt-3 sm:flex-row sm:justify-end">
                <input
                    type="text"
                    placeholder="Search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="mb-2 sm:mb-0 sm:mr-3 rounded-md"
                />
                <img
                    src={SearchIcon}
                    alt="Search Icon"
                    className="w-5 h-5 mb-2 sm:mb-0 sm:mr-4"
                />
            </div>

            <div className="flex flex-wrap justify-center mt-12">
                {filteredSubjects.map((card, index) => (
                    <>
                        {console.log(card)}
                        <SubjectCard
                            key={index}
                            user={auth.user}
                            bgColor="bg-red-500"
                            content={card}
                            arrowColor="bg-red-500"
                            dynamic={card}
                        />
                    </>
                ))}
            </div>
        </AuthenticatedLayout>
    );
}
