import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import AttendanceCard from "@/Components/AttendanceCard/AttendanceCard";

export default function HistoryAttendance({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <h1 className="text-center mt-8 text-xl mb-4">
                History Attendance
            </h1>
            <p className="text-center mb-4">Filtered by Class</p>
            <div className="flex flex-wrap justify-around gap-8 w-10/12 mx-auto mb-4">
                <AttendanceCard classTitle={"7A"} />
                <AttendanceCard classTitle={"7B"} />
                <AttendanceCard classTitle={"7C"} />
                <AttendanceCard classTitle={"7D"} />
                <AttendanceCard classTitle={"7E"} />
                <AttendanceCard classTitle={"7F"} />
                <AttendanceCard classTitle={"8A"} />
                <AttendanceCard classTitle={"8B"} />
                <AttendanceCard classTitle={"8C"} />
                <AttendanceCard classTitle={"8D"} />
                <AttendanceCard classTitle={"8E"} />
                <AttendanceCard classTitle={"8F"} />
                <AttendanceCard classTitle={"9A"} />
                <AttendanceCard classTitle={"9B"} />
                <AttendanceCard classTitle={"9C"} />
                <AttendanceCard classTitle={"9D"} />
                <AttendanceCard classTitle={"9E"} />
                <AttendanceCard classTitle={"9F"} />
            </div>
        </AuthenticatedLayout>
    );
}
