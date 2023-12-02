import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import AdminCard from "@/Components/AdminCard/AdminCard";

//icon
import StudentIcon from "/public/Assets/student-icon.svg";
import TeacherIcon from "/public/Assets/teacher-icon.svg";
import AttendanceIcon from "/public/Assets/time-icon.svg";
import ScheduleIcon from "/public/Assets/calendar-icon.svg";
import MapelIcon from "/public/Assets/book-icon.svg";
export default function AdminHome({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <h1 className="text-center text-2xl mt-32 mb-28 bg-blue-500 w-fit mx-auto rounded-xl px-4 py-2">
                Admin Page
            </h1>
            <div className="flex justify-center items-center gap-12">
                <AdminCard
                    title="Siswa"
                    qty={72}
                    icon={StudentIcon}
                    path="/admin/siswa"
                />
                <AdminCard
                    title="Guru"
                    qty={40}
                    icon={TeacherIcon}
                    path="/admin/siswa"
                />
                <AdminCard
                    title="Attendance"
                    icon={AttendanceIcon}
                    path="/admin/siswa"
                />
                <AdminCard
                    title="Shedule"
                    icon={ScheduleIcon}
                    path="/admin/siswa"
                />
                <AdminCard
                    title="Mata Pelajaran"
                    icon={MapelIcon}
                    path="/admin/siswa"
                />
            </div>
        </AuthenticatedLayout>
    );
}
