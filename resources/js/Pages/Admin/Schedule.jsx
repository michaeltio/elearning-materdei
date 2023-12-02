import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Schedule({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <div>Hello</div>
        </AuthenticatedLayout>
    );
}
