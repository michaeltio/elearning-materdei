import { useState } from "react";
import { Head } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

//icon
import AttendanceIcon from "/public/Assets/attendance-icon.svg";
import CheckIcon from "/public/Assets/check-icon.svg";
export default function Attendance({ auth }) {
    const [isAttend, setIsAttend] = useState(false);

    const handleAttend = () => {
        setIsAttend(true);
    };
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="attendance" />
            {/* page */}
            <div>
                <div className="text-center bg-primaryBlue rounded-xl w-64 md:w-96 mx-auto text-white mt-8 md:mt-28 p-4">
                    <h1>30 January 1993</h1>
                    <h1>{auth.user.user_details.full_name}</h1>
                    <h1>Status : Attended</h1>
                    <div
                        className={`w-full h-4 rounded-xl ${
                            isAttend ? "bg-green-500" : "bg-red-600"
                        }`}
                    ></div>
                </div>
                <button
                    className="w-64 h-64 rounded-full bg-primaryBlue transform translate-x-[-50%] translate-y-[-50%] absolute top-1/2 left-1/2 hover:bg-secondaryBlue "
                    onClick={handleAttend}
                >
                    <img
                        className="w-32 mx-auto brightness-0 invert"
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
