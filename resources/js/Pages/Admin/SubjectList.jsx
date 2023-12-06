import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
export default function SubjectList({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Subjects" />
            <div>Hello</div>
        </AuthenticatedLayout>
    );
}
