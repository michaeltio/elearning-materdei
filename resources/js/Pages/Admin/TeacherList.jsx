import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function TeacherList({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <div>Hello</div>
        </AuthenticatedLayout>
    );
}
