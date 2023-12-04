import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
export default function StudentListPreview({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Schedule" />
            <div>Hello</div>
        </AuthenticatedLayout>
    );
}
