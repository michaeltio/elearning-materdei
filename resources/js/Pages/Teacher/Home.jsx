import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
export default function TeacherHome({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <div>Hello</div>
        </AuthenticatedLayout>
    );
}
