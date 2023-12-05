import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { router } from "@inertiajs/react";
import { useEffect, useState } from "react";
import axios from "axios";
export default function StudentListPreview({ auth, nis }) {
    const [studentDetails, setStudentDetails] = useState({
        id: 0,
        email: "",
        user_details: {
            address: "",
            birthdate: "",
            class: "",
            full_name: "",
            phone_number: "",
            role: "",
        },
    });

    useEffect(() => {
        const fetchStudentDetails = async () => {
            try {
                const response = await axios.get(
                    "/api/showStudentDetails",
                    {
                        params: {
                            student_id: nis,
                        },
                    },
                    {
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                );
                // console.log(response.data);
                setStudentDetails(response.data);
                // console.log(studentDetails);
            } catch (error) {
                console.error(error);
            }
        };
        fetchStudentDetails();
    }, []);

    const deleteStudent = async () => {
        try {
            const response = await axios.delete(
                "/api/deleteStudent",
                { params: { nis: nis } },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            console.log(response.data);
            router.visit("/admin/student-list");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Schedule" />
            <div className="bg-white p-4 shadow-md rounded-md w-1/2 mx-auto mt-8">
                <div className="mb-2 text-2xl">
                    {studentDetails.user_details.full_name}
                </div>
                <div className="mb-2">NIS: {nis}</div>
                <div className="mb-2">
                    Student E-Mail: {studentDetails.email}
                </div>
                <div className="mb-2">
                    Class: {studentDetails.user_details.class}
                </div>
                <div className="mb-2">
                    Role: {studentDetails.user_details.role}
                </div>
                <div className="mb-2">
                    Address: {studentDetails.user_details.address}
                </div>
                <div className="mb-2">
                    Phone Number: {studentDetails.user_details.phone_number}
                </div>

                <button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">
                    Save
                </button>
                <button
                    className="bg-red-500 text-white px-4 py-2 rounded-md"
                    onClick={deleteStudent}
                >
                    Remove Student
                </button>
            </div>
        </AuthenticatedLayout>
    );
}
