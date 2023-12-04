import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import SubjectCard from "@/Components/SubjectCard/SubjectCard";

//icon
import SearchIcon from "/public/Assets/search-icon.svg";

export default function StudentHome({ auth }) {
    // console.log(auth.user.user_details.classes.class_subjects);
    const subjects = auth.user.user_details.classes.class_subjects;
    // console.log(subjects);

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
                    className="mb-2 sm:mb-0 sm:mr-3 rounded-md"
                />
                <img
                    src={SearchIcon}
                    alt="Search Icon"
                    className="w-5 h-5 mb-2 sm:mb-0 sm:mr-4"
                />
            </div>

            <div className="flex flex-wrap  justify-center mt-12">
                {subjects.map((card, index) => (
                    <SubjectCard
                        key={index}
                        user={auth.user}
                        bgColor="bg-red-500"
                        content={card.subject_details.subjectName}
                        arrowColor="bg-red-500"
                        dynamic={card.subject_details}
                    />
                ))}
            </div>
        </AuthenticatedLayout>
    );
}
