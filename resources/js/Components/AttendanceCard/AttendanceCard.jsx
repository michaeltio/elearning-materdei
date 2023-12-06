import { Link } from "@inertiajs/react";
export default function AttendanceCard({ classTitle }) {
    return (
        <Link
            className="w-80 h-36 bg-blue-500 rounded-lg shadow-md items-center flex justify-center hover:scale-110 duration-300"
            href={route("adminSubjectPreview", classTitle)}
        >
            <h1 className="text-white text-xl">{classTitle}</h1>
        </Link>
    );
}
