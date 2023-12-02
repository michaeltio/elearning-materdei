import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
export default function StudentList({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Students" />
            <div>Hello</div>
        </AuthenticatedLayout>
    );
}
