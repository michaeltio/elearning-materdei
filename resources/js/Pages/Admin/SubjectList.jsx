import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import AttendanceCard from "@/Components/AttendanceCard/AttendanceCard";

export default function SubjectList({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <h1 className="text-center mt-8 text-xl mb-4">Subjects</h1>
            <p className="text-center mb-4">Filtered by Class</p>
            <div className="flex flex-wrap justify-around gap-8 w-10/12 mx-auto mb-4">
                <AttendanceCard classTitle={"7A"} path="adminSubjectPreview" />
                <AttendanceCard classTitle={"7B"} path="adminSubjectPreview" />
                <AttendanceCard classTitle={"7C"} path="adminSubjectPreview" />
                <AttendanceCard classTitle={"7D"} path="adminSubjectPreview" />
                <AttendanceCard classTitle={"7E"} path="adminSubjectPreview" />

                <AttendanceCard classTitle={"8A"} path="adminSubjectPreview" />
                <AttendanceCard classTitle={"8B"} path="adminSubjectPreview" />
                <AttendanceCard classTitle={"8C"} path="adminSubjectPreview" />
                <AttendanceCard classTitle={"8D"} path="adminSubjectPreview" />
                <AttendanceCard classTitle={"8E"} path="adminSubjectPreview" />

                <AttendanceCard classTitle={"9A"} path="adminSubjectPreview" />
                <AttendanceCard classTitle={"9B"} path="adminSubjectPreview" />
                <AttendanceCard classTitle={"9C"} path="adminSubjectPreview" />
                <AttendanceCard classTitle={"9D"} path="adminSubjectPreview" />
                <AttendanceCard classTitle={"9E"} path="adminSubjectPreview" />
            </div>
        </AuthenticatedLayout>
    );
}
