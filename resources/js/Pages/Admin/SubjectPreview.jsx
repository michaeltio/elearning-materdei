import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useState, useEffect } from "react";
import axios from "axios";
import { router, Link } from "@inertiajs/react";

export default function SubjectPreview({ auth, subject_id, class_id }) {
    const [subject, setSubject] = useState({
        subjectId: "",
        subjectName: "",
        teacherId: "",
    });

    const [teacherList, setTeacherList] = useState([]);
    console.log("subject tanpa form " + typeof subject_id);
    console.log("subject id " + subject.subjectId);
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

    useEffect(() => {
        const fetchTeacher = async () => {
            try {
                const response = await axios.get("/api/showSubjectPreview", {
                    params: {
                        subjectId: subject_id,
                    },
                });
                setSubject(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchTeacher();
    }, [subject_id]);

    useEffect(() => {
        console.log("Updated form values:", subject);
    }, [subject]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSubject((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "/api/editSubject",
                {
                    subjectId: subject_id,
                    subjectName: subject.subjectName,
                    teacherId: subject.teacherId,
                },
                {
                    headers: { "Content-Type": "application/json" },
                }
            );
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
        router.visit("/admin/subject-list/" + class_id);
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Edit Subject" />
            <form
                className="bg-white p-4 shadow-md rounded-md w-full md:w-1/2 mx-auto mt-8"
                onSubmit={handleSubmit}
            >
                <h1 className="mb-2 text-2xl">{subject.subjectName}</h1>
                <div className="mb-4">{subject_id}</div>
                <div>{class_id}</div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">
                        Subject Name
                    </label>
                    <input
                        className="w-full px-4 py-2 border rounded-md"
                        name="subjectName"
                        value={subject.subjectName}
                        onChange={(e) =>
                            setSubject({
                                ...subject,
                                subjectName: e.target.value,
                            })
                        }
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
                        value={subject.teacherId}
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
                <h1></h1>

                <div className="flex justify-center flex-wrap gap-2">
                    <Link
                        href={route("adminSubjectPreview", class_id)}
                        className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
                    >
                        Back
                    </Link>
                    <button
                        type="submit"
                        className="bg-green-500 text-white px-4 py-2 rounded-md mr-2"
                    >
                        Save
                    </button>
                    <button className="bg-red-500 text-white px-4 py-2 rounded-md">
                        Remove Subject
                    </button>
                </div>
            </form>
        </AuthenticatedLayout>
    );
}
