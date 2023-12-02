import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
export default function TeacherList({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Teachers" />
            <div>Hello</div>
        </AuthenticatedLayout>
    );
}
