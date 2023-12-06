import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { CompactTable } from "@table-library/react-table-library/compact";

//icon
import DetailIcon from "/public/Assets/edit-icon.svg";

export default function StudentList({ auth }) {
    const [totalData, setTotalData] = useState(0);
    const [studentList, setStudentsList] = useState([]);

    //variabel untuk search yang untuk coba coba
    const [search, setSearch] = useState("");
    
    useEffect(() => {
        const fetchStudent = async () => {
            try {
                const response = await axios.get("/api/showAllStudents");
                // console.log(response.data);
                const users = response.data;

                // Filter students with the role 'student'
                const filteredStudents = users.filter(
                    (users) => users.user_details?.role === "student"
                );
                setTotalData(filteredStudents.length);
                // console.log(filteredStudents);
                setStudentsList(filteredStudents);
            } catch (error) {
                console.error(error);
            }
        };
        fetchStudent();
    }, []);

    //tables
    const nodes = studentList;

    const COLUMNS = [
        { label: "NIS", renderCell: (item) => item.id },
        {
            label: "Name",
            renderCell: (item) => item.user_details.full_name,
        },
        { label: "E-Mail", renderCell: (item) => item.email },
        { label: "Class", renderCell: (item) => item.user_details.class },
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

    //search
    const handleSearch = (event) => {
        setSearch(event.target.value);
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Students" />
            <div className="mt-8">
                <h1 className="text-2xl text-center mb-4">
                    Students: {totalData}
                </h1>
                <div className="flex flex-wrap justify-center gap-8">
                    <label htmlFor="search">
                        Search by Task:&nbsp;
                        <input
                            id="search"
                            type="text"
                            // value={search}
                            // onChange={handleSearch}
                        />
                    </label>
                    <br />
                    <div>
                        <label htmlFor="myDropdown">Select an option: </label>
                        <select id="myDropdown">
                            <option value="">Select...</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                    </div>
                    <button className="bg-red-500 px-4 py-2 rounded-xl">
                        Add New Students
                    </button>{" "}
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
