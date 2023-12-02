import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function StudentList({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <div>Hello</div>
        </AuthenticatedLayout>
    );
}
