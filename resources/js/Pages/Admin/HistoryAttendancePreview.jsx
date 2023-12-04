import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { CompactTable } from "@table-library/react-table-library/compact";
export default function HistoryAttendancePreview({ auth, classTitle }) {
    useEffect(() => {
        const fetchStudent = async () => {
            try {
                const response = await axios.get("/api/showAttendanceByClass");
                console.log(response.data);

                const users = response.data;

                const filteredClass = users.filter(
                    (users) => users.user_details?.class === classTitle
                );
                console.log(filteredClass);
                console.log(classTitle);
            } catch (error) {
                console.error(error);
            }
        };
        fetchStudent();
    }, []);
    // const nodes = studentList;

    // const COLUMNS = [
    //     { label: "NIS", renderCell: (item) => item.id },
    //     {
    //         label: "Name",
    //         renderCell: (item) => item.user_details.full_name,
    //     },
    //     { label: "E-Mail", renderCell: (item) => item. },
    //     { label: "Class", renderCell: (item) => item.user_details.class },
    //     {
    //         label: "Details",
    //         renderCell: (item) => (
    //             <button onClick={() => handleAction(item.id)}>
    //                 <img className="w-8 mx-auto" src={DetailIcon} />
    //             </button>
    //         ),
    //     },
    // ];
    // const data = { nodes };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Attendance Preview" />
            <h1>{classTitle}</h1>
            <div className="p-4">
                {/* <CompactTable columns={COLUMNS} data={data} /> */}
            </div>
        </AuthenticatedLayout>
    );
}
