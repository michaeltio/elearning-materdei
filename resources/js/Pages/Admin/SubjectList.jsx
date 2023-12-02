import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function SubjectList({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <div>Hello</div>
        </AuthenticatedLayout>
    );
}
