import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useState } from "react";
import { Head } from "@inertiajs/react";
import { router } from "@inertiajs/react";

export default function AddMaterial({ auth, subjectData }) {
    const [formData, setFormData] = useState({
        title: "",
        desc: "",
        filePath: "",
        subjectId: subjectData.subjectId,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can perform further actions here, like sending the data to an API

        // For now, let's log the form data to the console
        console.log(formData);

        router.visit("/teacher/subject/" + subjectData.subjectId);
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
                        <input
                            type="textarea"
                            name="desc"
                            id="desc"
                            value={formData.desc}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-md"
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
                            value={formData.filePath}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-md"
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-green"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
