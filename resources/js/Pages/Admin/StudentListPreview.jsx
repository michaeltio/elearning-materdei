import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { router } from "@inertiajs/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "@inertiajs/react";

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
            birthdate: "",
        },
    });

    const [formData, setFormData] = useState({
        full_name: "",
        email: "",
        nis: "",
        class: "",
        role: "",
        address: "",
        phone_number: "",
        birthdate: "",
    });

    useEffect(() => {
        const fetchStudentDetails = async () => {
            try {
                const response = await axios.get("/api/showStudentDetails", {
                    params: {
                        student_id: nis,
                    },
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                setStudentDetails(response.data);
                console.log(response.data);
                setFormData({
                    full_name: response.data.user_details.full_name,
                    nis: response.data.user_details.userId,
                    email: response.data.email,
                    class: response.data.user_details.class,
                    birthdate: response.data.user_details.birthdate,
                    role: response.data.user_details.role,
                    address: response.data.user_details.address,
                    phone_number: response.data.user_details.phone_number,
                    birthdate: response.data.user_details.birthdate,
                });
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
            // console.log(response.data);
            router.visit("/admin/student-list");
        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Add logic to update the student details with the submitted data
        try {
            const response = await axios.post("/api/editStudent", formData, {
                headers: { "Content-Type": "application/json" },
            });
            if (response.status === 200) {
                console.log(response.data);
            } else {
                console.log(`Error Status Response ${response.status}`);
            }
        } catch (error) {
            console.log(error);
        }
        console.log(formData);
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Schedule" />
            <form
                className="bg-white p-4 shadow-md rounded-md  w-full md:w-1/2 mx-auto mt-8"
                onSubmit={handleSubmit}
            >
                <h1 className="mb-2 text-2xl">{formData.full_name}</h1>
                <div className="mb-4">{formData.nis}</div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">
                        Name
                    </label>
                    <input
                        className="w-full px-4 py-2 border rounded-md"
                        name="full_name"
                        value={formData.full_name}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">
                        Student E-Mail
                    </label>
                    <input
                        className="w-full px-4 py-2 border rounded-md"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">
                        Class
                    </label>
                    <select
                        className="w-full px-4 py-2 border rounded-md"
                        name="class"
                        value={formData.class}
                        onChange={handleChange}
                    >
                        <option value="" disabled>
                            Select Class
                        </option>
                        <option value="7A">7A</option>
                        <option value="7B">7B</option>
                        <option value="7C">7C</option>
                        <option value="7D">7D</option>
                        <option value="7E">7E</option>
                        <option value="8A">8A</option>
                        <option value="8B">8B</option>
                        <option value="8C">8C</option>
                        <option value="8D">8D</option>
                        <option value="8E">8E</option>
                        <option value="9A">9A</option>
                        <option value="9B">9B</option>
                        <option value="9C">9C</option>
                        <option value="9D">9D</option>
                        <option value="9E">9E</option>
                    </select>
                </div>

                <div className="mb-4">
                    Role <br />
                    {formData.role}
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">
                        Address
                    </label>
                    <input
                        className="w-full px-4 py-2 border rounded-md"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">
                        Phone Number
                    </label>
                    <input
                        className="w-full px-4 py-2 border rounded-md"
                        name="phone_number"
                        value={formData.phone_number}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">
                        Birthdate
                    </label>
                    <input
                        type="date"
                        className="w-full px-4 py-2 border rounded-md"
                        name="birthdate"
                        value={formData.birthdate}
                        onChange={handleChange}
                    />
                </div>

                <div className="flex justify-center">
                    <Link
                        className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
                        href={route(`adminStudentList`)}
                    >
                        Back
                    </Link>
                    <button
                        type="submit"
                        className="bg-green-500 text-white px-4 py-2 rounded-md mr-2"
                    >
                        Save
                    </button>
                    <button
                        className="bg-red-500 text-white px-4 py-2 rounded-md"
                        onClick={deleteStudent}
                    >
                        Remove Student
                    </button>
                </div>
            </form>
        </AuthenticatedLayout>
    );
}
