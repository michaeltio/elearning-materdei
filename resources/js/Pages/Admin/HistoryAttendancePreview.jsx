import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
export default function HistoryAttendancePreview({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Attendance Preview" />
        </AuthenticatedLayout>
    );
}
