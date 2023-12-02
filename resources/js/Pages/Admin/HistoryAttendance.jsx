import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function HistoryAttendance({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <div>Hello</div>
        </AuthenticatedLayout>
    );
}
