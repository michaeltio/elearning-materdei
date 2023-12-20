import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "@inertiajs/react";

export default function AddSubject({ auth, classId }) {
    const [formData, setFormData] = useState({
        subjectId: "",
        subjectName: "",
        teacherId: "",
        classId: classId,
    });

    const [teacherList, setTeacherList] = useState([]);

    useEffect(() => {
        const fetchTeacher = async () => {
            try {
                const response = await axios.get("/api/showAllTeachers");
                const users = response.data;
                const filteredTeacher = users.filter(
                    (users) => users.user_details?.role === "teacher"
                );
                setTeacherList(filteredTeacher);
            } catch (error) {
                console.error(error);
            }
        };
        fetchTeacher();
    }, []);

    console.log(teacherList);

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
            const response = await axios.post("/api/addNewSubject", formData, {
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
            <Head title="Add Subject" />
            <div className="mb-6">
                <h1 className="text-2xl text-center mt-4">
                    Add Subject to {formData.classId}
                </h1>
                <form
                    onSubmit={handleSubmit}
                    className="max-w-md mx-auto p-6 bg-white border rounded-md shadow-md mt-4"
                >
                    <div className="mb-4">
                        <label
                            htmlFor="subjectId"
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Subject Id:
                        </label>
                        <input
                            type="text"
                            name="subjectId"
                            id="subjectId"
                            value={formData.subjectId}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-md"
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Nama Subjek:
                        </label>
                        <input
                            type="text"
                            name="subjectName"
                            id="subjectName"
                            value={formData.subjectName}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-md"
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="class"
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Teacher:
                        </label>
                        <select
                            name="teacherId"
                            id="teacherId"
                            value={formData.teacherId}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-md"
                        >
                            <option value="">Select Teacher</option>
                            {teacherList.map((teacher, index) => (
                                <option key={index} value={teacher.id}>
                                    {teacher.user_details.full_name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="class"
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Class:
                        </label>
                        <select
                            name="classId"
                            id="classId"
                            value={formData.classId}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-md"
                        >
                            <option value="">Select Class</option>
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
                    <div className="flex justify-between">
                        {/* <Link
                            className="bg-primaryBlue text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-green"
                            href={route(`adminStudentList`)}
                        >
                            Back
                        </Link> */}
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
