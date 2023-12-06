import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { CompactTable } from "@table-library/react-table-library/compact";
export default function HistoryAttendancePreview({ auth, classTitle }) {
    const [studentsAttendance, setStudentsAttendance] = useState([]);
    useEffect(() => {
        const fetchStudent = async () => {
            try {
                const response = await axios.get("/api/showAttendanceByClass");
                // console.log(response.data);

                const users = response.data;

                const filteredClass = users.filter(
                    (users) => users.class === classTitle
                );
                // console.log(filteredClass);
                // console.log(classTitle);
                setStudentsAttendance(filteredClass);
            } catch (error) {
                console.error(error);
            }
        };
        fetchStudent();
    }, []);
    const nodes = studentsAttendance;

    const COLUMNS = [
        { label: "NIS", renderCell: (item) => item.student_id },
        {
            label: "Name",
            renderCell: (item) => "Ganteng",
        },
        { label: "Class", renderCell: (item) => item.class },
        { label: "Present", renderCell: (item) => item.is_present },
        { label: "Late", renderCell: (item) => item.is_late },
        {
            label: "Attendance Time",
            renderCell: (item) => item.updated_at.substring(11, 16),
        },
        {
            label: "Attendance Date",
            renderCell: (item) => item.updated_at.substring(0, 10),
        },
    ];
    const data = { nodes };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Attendance Preview" />
            <h1 className="text-center text-2xl mt-4">
                Class: {classTitle} Attendances
            </h1>
            <div className="p-4">
                <CompactTable columns={COLUMNS} data={data} />
            </div>
        </AuthenticatedLayout>
    );
}
