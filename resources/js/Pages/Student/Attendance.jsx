import { useEffect, useState } from "react";
import { Head } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

//icon
import AttendanceIcon from "/public/Assets/attendance-icon.svg";
import CheckIcon from "/public/Assets/check-icon.svg";
export default function Attendance({ auth }) {
    const [isAttend, setIsAttend] = useState(false);
    const [date, setDate] = useState("");

    const handleAttend = () => {
        setIsAttend(true);
    };

    useEffect(() => {
        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleDateString("id-ID", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
        });
        setDate(formattedDate);
    }, []);

    return (
        <AuthenticatedLayout
            user={auth.user}
            className="flex justify-center items-center"
        >
            <Head title="attendance" />
            <div className="my-8 flex flex-col">
                <div className="text-center bg-primaryBlue rounded-xl w-64 text-white p-4">
                    <h1>{date}</h1>
                    <h1>{auth.user.user_details.full_name}</h1>
                    <h1>
                        Status : {isAttend == true ? "Attended" : "Absence"}
                    </h1>
                    <div
                        className={`w-full h-4 rounded-xl ${
                            isAttend ? "bg-green-500" : "bg-red-600"
                        }`}
                    ></div>
                </div>
                <button className="mt-8 flex flex-col rounded-full justify-center items-center bg-primaryBlue w-64 h-64">
                    <img
                        className="flex w-32 brightness-0 invert"
                        src={isAttend ? CheckIcon : AttendanceIcon}
                        alt=""
                    />
                    <h1 className="text-center items-center text-white">
                        {isAttend ? "Class Attended" : "Click to Attend"}
                    </h1>
                </button>
            </div>
        </AuthenticatedLayout>
    );
}
