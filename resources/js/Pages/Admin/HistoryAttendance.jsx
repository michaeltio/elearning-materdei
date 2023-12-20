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
                <AttendanceCard
                    classTitle={"7A"}
                    path={"adminAttendancePreview"}
                />
                <AttendanceCard
                    classTitle={"7B"}
                    path={"adminAttendancePreview"}
                />
                <AttendanceCard
                    classTitle={"7C"}
                    path={"adminAttendancePreview"}
                />
                <AttendanceCard
                    classTitle={"7D"}
                    path={"adminAttendancePreview"}
                />
                <AttendanceCard
                    classTitle={"7E"}
                    path={"adminAttendancePreview"}
                />
                <AttendanceCard
                    classTitle={"8A"}
                    path={"adminAttendancePreview"}
                />
                <AttendanceCard
                    classTitle={"8B"}
                    path={"adminAttendancePreview"}
                />
                <AttendanceCard
                    classTitle={"8C"}
                    path={"adminAttendancePreview"}
                />
                <AttendanceCard
                    classTitle={"8D"}
                    path={"adminAttendancePreview"}
                />
                <AttendanceCard
                    classTitle={"8E"}
                    path={"adminAttendancePreview"}
                />
                <AttendanceCard
                    classTitle={"9A"}
                    path={"adminAttendancePreview"}
                />
                <AttendanceCard
                    classTitle={"9B"}
                    path={"adminAttendancePreview"}
                />
                <AttendanceCard
                    classTitle={"9C"}
                    path={"adminAttendancePreview"}
                />
                <AttendanceCard
                    classTitle={"9D"}
                    path={"adminAttendancePreview"}
                />
                <AttendanceCard
                    classTitle={"9E"}
                    path={"adminAttendancePreview"}
                />
            </div>
        </AuthenticatedLayout>
    );
}
