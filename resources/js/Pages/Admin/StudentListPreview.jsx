import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
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
                setStudentDetails(response.data);
                console.log(studentDetails);
            } catch (error) {
                console.error(error);
            }
        };
        fetchStudentDetails();
    }, []);
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Schedule" />
            <div>NIS: {nis}</div>
            <div>Student E-Mail {studentDetails.email}</div>
            <div>Name {studentDetails.user_details.full_name}</div>
            <div>Class {studentDetails.user_details.class}</div>
            <div>Role {studentDetails.user_details.role}</div>
            <div>address {studentDetails.user_details.address}</div>
            <div>phone number {studentDetails.user_details.phone_number}</div>
            <button>Save</button>
            <button>Remove Student</button>
        </AuthenticatedLayout>
    );
}
