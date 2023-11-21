import React from "react";
import AttendanceCard from "@/Components/AttendanceCard";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function HistoryAttendance({ auth }) {
    const cards = [
        {
            content: "Matematika",
            person: "Ibu Mita",
            bgColor: "bg-red-300",
            date: "Senin, 3 Oktober 2023",
        },
        {
            content: "IPA",
            person: "Pak Dandi",
            bgColor: "bg-yellow-200",
            date: "Senin, 3 Oktober 2023",
        },
        {
            content: "IPS",
            person: "Pak Dandi",
            bgColor: "bg-blue-300",
            date: "Senin, 3 Oktober 2023",
        },
        {
            content: "Bahasa Indonesia",
            person: "Ibu Nurul",
            bgColor: "bg-red-300",
            date: "Senin, 3 Oktober 2023",
        },
        {
            content: "Bahasa Inggris",
            person: "Miss Gita",
            bgColor: "bg-yellow-200",
            date: "Senin, 3 Oktober 2023",
        },
    ];

    return (
        <AuthenticatedLayout user={auth.user}>
            <div className="p-6">
                <button className="rounded-lg bg-slate-300 p-2">
                    <img src="#" alt="back" />
                </button>
                <div className="flex flex-col items-center">
                    <h1 className="font-black text-center text-2xl text-bold border-b-2 w-1/3 border-black pb-5 mb-10">
                        Oktober 2023
                    </h1>
                </div>

                <table className="mt-6 w-full">
                    <thead className="text-gray-500">
                        <tr>
                            <th className="px-4 py-2 text-start">
                                Nama Mata Pelajaran
                            </th>
                            <th className="px-4 py-2">Kehadiran</th>
                            <th className="px-4 py-2 text-end">
                                Hari & Tanggal
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {cards.map((card, index) => (
                            <AttendanceCard key={index} {...card} />
                        ))}
                    </tbody>
                </table>
            </div>
        </AuthenticatedLayout>
    );
}
