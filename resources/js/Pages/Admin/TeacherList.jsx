import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { CompactTable } from "@table-library/react-table-library/compact";
import { Link } from "@inertiajs/react";

//icon
import DetailIcon from "/public/Assets/edit-icon.svg";

export default function TeacherList({ auth }) {
    const [totalData, setTotalData] = useState(0);
    const [teacherList, setTeacherList] = useState([]);
    const [search, setSearch] = useState("");
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        const fetchStudent = async () => {
            try {
                const response = await axios.get("/api/showAllTeachers");
                // console.log(response.data);
                const users = response.data;

                // Filter students with the role 'student'
                const filteredTeacher = users.filter(
                    (users) => users.user_details?.role === "teacher"
                );
                setTotalData(filteredTeacher.length);
                // console.log(filteredStudents);
                setTeacherList(filteredTeacher);
                setFilteredData(filteredTeacher);
            } catch (error) {
                console.error(error);
            }
        };
        fetchStudent();
    }, []);

    //search
    const handleSearch = (event) => {
        const input = event.target.value;
        setSearch(input);
        const filtered = teacherList.filter((teacher) =>
            teacher.user_details.full_name
                .toLowerCase()
                .includes(input.toLowerCase())
        );

        setFilteredData(filtered);
    };

    //tables
    const nodes = filteredData;

    const COLUMNS = [
        { label: "NIS", renderCell: (item) => item.id },
        {
            label: "Name",
            renderCell: (item) => item.user_details.full_name,
        },
        { label: "E-Mail", renderCell: (item) => item.email },
        {
            label: "Details",
            renderCell: (item) => (
                <button onClick={() => handleAction(item.id)}>
                    <img className="w-8 mx-auto" src={DetailIcon} />
                </button>
            ),
        },
    ];
    const data = { nodes };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Students" />
            <div className="mt-8">
                <h1 className="text-2xl text-center mb-4">
                    Students: {totalData}
                </h1>
                <div className="flex flex-wrap justify-center gap-8">
                    <label htmlFor="search">
                        Search by Name:&nbsp;
                        <input
                            id="search"
                            type="text"
                            value={search}
                            onChange={handleSearch}
                        />
                    </label>
                    <Link
                        className="bg-green-500 p-2 text-center rounded-xl text-white"
                        // href={route(`adminTeacherListAdd`)}
                    >
                        New Teacher
                    </Link>
                </div>
                {/* untuk buat tabel */}
                <div className="p-4">
                    <CompactTable
                        columns={COLUMNS}
                        data={data}
                        tableStyle={{
                            border: "1px solid #ddd",
                            borderRadius: "5px",
                            padding: "100px",
                        }}
                    />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
