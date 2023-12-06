import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import AdminCard from "@/Components/AdminCard/AdminCard";
import { Head } from "@inertiajs/react";

//icon
import StudentIcon from "/public/Assets/student-icon.svg";
import TeacherIcon from "/public/Assets/teacher-icon.svg";
import AttendanceIcon from "/public/Assets/time-icon.svg";
import ScheduleIcon from "/public/Assets/calendar-icon.svg";
import MapelIcon from "/public/Assets/book-icon.svg";
export default function AdminHome({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Admin" />
            <h1 className="text-center text-4xl mt-20 mb-8 text-white w-fit mx-auto rounded-md px-6 py-4 shadow-lg bg-gradient-to-r from-primaryBlue to-secondaryBlue">
                Admin Page
            </h1>
            <div className="flex flex-wrap justify-center items-center gap-12 mb-8">
                <AdminCard
                    title="Students"
                    icon={StudentIcon}
                    path="adminStudentList"
                />
                <AdminCard
                    title="Teachers"
                    icon={TeacherIcon}
                    path="adminTeacherList"
                />
                <AdminCard
                    title="History Attendance"
                    icon={AttendanceIcon}
                    path="adminHistoryAttendance"
                />
                <AdminCard
                    title="Shedule"
                    icon={ScheduleIcon}
                    path="adminSchedule"
                />
                <AdminCard
                    title="Subjects"
                    icon={MapelIcon}
                    path="adminSubjectList"
                />
            </div>
        </AuthenticatedLayout>
    );
}
