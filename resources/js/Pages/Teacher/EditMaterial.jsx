import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useState } from "react";
import { Head } from "@inertiajs/react";
import { router } from "@inertiajs/react";
import axios from "axios";

export default function AddMaterial({ auth, subjectDetails }) {
    const [formData, setFormData] = useState({
        id: subjectDetails.id,
        title: subjectDetails.title,
        desc: subjectDetails.desc,
        file: subjectDetails.file,
        subjectId: subjectDetails.subjectId,
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

        try {
            const response = await axios.post(
                "/api/editSubjectData",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
        } catch (error) {
            console.error(error);
        }

        router.visit("/teacher/subject/" + subjectDetails.subjectId);
    };

    const handleDelete = async () => {
        try {
            await axios.delete(`/api/deleteSubjectData/${formData.id}`);
        } catch (error) {
            console.error(error);
        }
        router.visit("/teacher/subject/" + subjectDetails.subjectId);
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Add Material" />
            <div className="my-8">
                <h1 className="text-2xl text-center">Add Material</h1>
                <form
                    onSubmit={handleSubmit}
                    className="max-w-md mx-auto p-6 bg-white border rounded-md shadow-md mt-4"
                >
                    <div className="mb-4">
                        <label
                            htmlFor="title"
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Title:
                        </label>
                        <input
                            type="text"
                            name="title"
                            id="title"
                            value={formData.title}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-md"
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="desc"
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Description:
                        </label>
                        <textarea
                            name="desc"
                            id="desc"
                            value={formData.desc}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-md"
                            style={{ resize: "none", height: "auto" }}
                            rows={4}
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="file"
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            File Upload:
                        </label>
                        <input
                            type="file"
                            name="file"
                            id="file"
                            value={formData.file}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-md"
                        />
                    </div>
                    <div className="flex flex-row justify-between">
                        <button
                            type="submit"
                            className="bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-green"
                        >
                            Submit
                        </button>
                        <button
                            type="button"
                            onClick={handleDelete}
                            className="bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-green"
                        >
                            Delete
                        </button>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
