import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import SubjectCard from "@/Components/SubjectCard/SubjectCard";

//icon
import SearchIcon from "/public/Assets/search-icon.svg";

export default function SHome({ auth, ...props }) {
    const cards = [
        {
            content: "Mtk",
            bgColor: "bg-red-300",
            arrowColor: "bg-red-300",
        },
        {
            content: "IPA",
            bgColor: "bg-yellow-200",
            arrowColor: "bg-yellow-200",
        },
        {
            content: "IPS",
            bgColor: "bg-blue-300",
            arrowColor: "bg-blue-300",
        },
        {
            content: "Bahasa Indonesia",
            bgColor: "bg-red-300",
            arrowColor: "bg-red-300",
        },
        {
            content: "Bahasa Inggris",
            bgColor: "bg-yellow-200",
            arrowColor: "bg-yellow-200",
        },
        {
            content: "Biologi",
            bgColor: "bg-blue-300",
            arrowColor: "bg-blue-300",
        },
        {
            content: "Kimia",
            bgColor: "bg-red-300",
            arrowColor: "bg-red-300",
        },
        {
            content: "Sejarah",
            bgColor: "bg-yellow-200",
            arrowColor: "bg-yellow-300",
        },
        {
            content: "Fisika",
            bgColor: "bg-blue-300",
            arrowColor: "bg-blue-300",
        },
        {
            content: "Seni Budaya",
            bgColor: "bg-red-300",
            arrowColor: "bg-red-300",
        },
    ];

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title={props.title} />
            <p className="flex justify-center items-center mt-12 text-black text-2xl ">
                <span className="border-b border-black">
                    {props.description}
                </span>
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

            <div className="flex flex-wrap mt-12">
                {cards.map((card, index) => (
                    <SubjectCard
                        key={index}
                        bgColor={card.bgColor}
                        content={card.content}
                        arrowColor={card.arrowColor}
                    />
                ))}
            </div>
        </AuthenticatedLayout>
    );
}
