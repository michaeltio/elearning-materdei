import { useEffect, useState } from "react";
import { Head } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import axios from "axios";

//icon
import AttendanceIcon from "/public/Assets/attendance-icon.svg";
import CheckIcon from "/public/Assets/check-icon.svg";

export default function Attendance({ auth }) {
    const [isAttend, setIsAttend] = useState(false);
    const [date, setDate] = useState("");
    const [isWeekend, setIsWeekend] = useState(false);

    //buat data date sekarang
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString("id-ID", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    //detect if weekday

    //button untuk absen
    const handleAttend = async () => {
        const studentId = auth.user.id;
        const date = currentDate.toISOString("id-ID").substring(0, 10);

        try {
            const response = await axios.post(
                "/api/updateAttendance",
                {
                    student_id: studentId,
                    date: date,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            if (response.status === 200) {
                // console.log("success");
                // console.log(response.data.is_present);
                // console.log(studentId);
                setIsAttend(response.data.is_present);
            } else {
                console.error("failed");
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        const weekdayHandler = () => {
            const weekday = formattedDate.split(", ")[0];
            if (weekday === "Minggu" || weekday === "Sabtu") {
                setIsWeekend(true);
                // console.log(isWeekDay);
            } else {
                setIsWeekend(false);
                console.log("test");
            }
        };
        //fetch student attendance from database
        const fetchSpecificAttendance = async () => {
            const studentId = auth.user.id;
            const date = currentDate.toISOString("id-ID").substring(0, 10);

            try {
                const response = await axios.get(
                    "/api/showAttendance",
                    {
                        params: {
                            student_id: studentId,
                            date: date,
                        },
                    },
                    {
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                );

                if (response.status === 200) {
                    setIsAttend(response.data.is_present);
                } else {
                    console.error("failed");
                }
            } catch (error) {
                console.error(error);
            }
        };
        fetchSpecificAttendance();
        weekdayHandler();
        setDate(formattedDate);
    }, []);

    return (
        <AuthenticatedLayout
            user={auth.user}
            className="flex justify-center items-center"
        >
            <Head title="Attendance" />
            <div className="my-8 flex flex-col">
                <div className="text-center bg-primaryBlue rounded-xl w-64 text-white p-4">
                    <h1>{date}</h1>
                    <h1>{auth.user.user_details.full_name}</h1>
                    <h1>
                        Status :{" "}
                        {isWeekend
                            ? "Weekend"
                            : isAttend == true
                            ? "Attended"
                            : "Absence"}
                    </h1>
                    <div
                        className={`w-full h-4 rounded-xl ${
                            isAttend || isWeekend
                                ? "bg-green-500"
                                : "bg-red-500"
                        }`}
                    ></div>
                </div>
                <div className="mt-8 flex flex-col justify-center items-center w-64 h-64">
                    {isAttend ? (
                        <div className="rounded-full bg-green-500 w-full h-full flex flex-col justify-center items-center">
                            <img
                                src={CheckIcon}
                                alt=""
                                className="flex w-32 brightness-0 invert"
                            />
                            <p className="text-center items-center text-white">
                                Class Attended
                            </p>
                        </div>
                    ) : (
                        <button
                            onClick={handleAttend}
                            className="rounded-full bg-red-500 w-full h-full flex flex-col justify-center items-center"
                        >
                            <img
                                className="flex w-32 brightness-0 invert"
                                src={AttendanceIcon}
                                alt=""
                            />
                            <h1 className="text-center items-center text-white">
                                Click to Attend
                            </h1>
                        </button>
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
