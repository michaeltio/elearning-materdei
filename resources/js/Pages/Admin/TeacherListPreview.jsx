import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { router } from "@inertiajs/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "@inertiajs/react";

export default function TeacherListPreview({ auth, user_id }) {
    const [teacherDetails, setTeacherDetails] = useState({
        id: 0,
        email: "",
        user_details: {
            address: "",
            birthdate: "",
            full_name: "",
            phone_number: "",
            role: "",
            birthdate: "",
        },
    });

    const [formData, setFormData] = useState({
        full_name: "",
        email: "",
        user_id: "",
        role: "",
        address: "",
        phone_number: "",
        birthdate: "",
    });

    useEffect(() => {
        const fetchTeacherDetails = async () => {
            try {
                const response = await axios.get("/api/showTeacherDetails", {
                    params: {
                        teacher_id: user_id,
                    },
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                setTeacherDetails(response.data);
                console.log(response.data);
                setFormData({
                    full_name: response.data.user_details.full_name,
                    user_id: response.data.user_details.userId,
                    email: response.data.email,

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
        fetchTeacherDetails();
    }, []);

    const deleteTeacher = async () => {
        try {
            const response = await axios.delete(
                "/api/deleteTeacher",
                { params: { teacher_id: user_id } },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            // console.log(response.data);
        } catch (error) {
            console.log(error);
        }
        router.visit("/admin/teacher-list");
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
        try {
            const response = await axios.post("/api/editTeacher", formData, {
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
                <div className="mb-4">{formData.user_id}</div>

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
                        Teacher E-Mail
                    </label>
                    <input
                        className="w-full px-4 py-2 border rounded-md"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
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

                <div className="flex justify-center flex-wrap gap-2">
                    <Link
                        className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
                        href={route(`adminTeacherList`)}
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
                        onClick={deleteTeacher}
                    >
                        Remove Teacher
                    </button>
                </div>
            </form>
        </AuthenticatedLayout>
    );
}
