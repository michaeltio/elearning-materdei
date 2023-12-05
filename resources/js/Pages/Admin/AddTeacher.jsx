import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useState } from "react";
import axios from "axios";
import { Link } from "@inertiajs/react";

export default function AddStudent({ auth }) {
    const [formData, setFormData] = useState({
        teacher_id: "",
        email: "",
        password: "",
        full_name: "",
        address: "",
        phone_number: "",
        birthdate: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // You can perform further actions here, like sending the data to an API
        try {
            const response = await axios.post("/api/addNewTeacher", formData, {
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.status === 200) {
                console.log(response.data);
                window.location.reload();
            } else {
                console.log(`Response Error ${response.status}`);
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Add Teacher" />
            <div>
                <h1 className="text-2xl text-center mt-4">Add New Teacher</h1>
                <form
                    onSubmit={handleSubmit}
                    className="max-w-md mx-auto p-6 bg-white border rounded-md shadow-md mt-4"
                >
                    <div className="mb-4">
                        <label
                            htmlFor="teacher_id"
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Teacher ID
                        </label>
                        <input
                            type="text"
                            name="teacher_id"
                            id="teacher_id"
                            value={formData.teacher_id}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-md"
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Email:
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-md"
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="password"
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Password:
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-md"
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="full_name"
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Full Name:
                        </label>
                        <input
                            type="text"
                            name="full_name"
                            id="full_name"
                            value={formData.full_name}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-md"
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="address"
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Address:
                        </label>
                        <input
                            type="text"
                            name="address"
                            id="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-md"
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="phone_number"
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Phone Number:
                        </label>
                        <input
                            type="text"
                            name="phone_number"
                            id="phone_number"
                            value={formData.phone_number}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-md"
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="birthdate"
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Birthdate:
                        </label>
                        <input
                            type="date"
                            name="birthdate"
                            id="birthdate"
                            value={formData.birthdate}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-md"
                        />
                    </div>

                    <div className="flex justify-between">
                        <Link
                            className="bg-primaryBlue text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-green"
                            href={route(`adminStudentList`)}
                        >
                            Back
                        </Link>
                        <button
                            type="submit"
                            className="bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-green"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
