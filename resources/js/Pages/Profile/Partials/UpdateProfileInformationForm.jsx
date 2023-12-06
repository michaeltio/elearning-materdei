import { usePage } from "@inertiajs/react";

export default function UpdateProfileInformation({
    mustVerifyEmail,
    status,
    className = "",
}) {
    const user = usePage().props.auth.user;

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">
                    Profile Information
                </h2>

                <p className="mt-1 text-sm text-gray-600">
                    Your account's profile information and email address.
                </p>
            </header>

            <div className="mt-6 space-y-6">
                <div>
                    <h3 className="text-lg font-medium text-gray-900">Name</h3>
                    <p className="mt-1 block w-full">
                        {user.user_details.full_name}
                    </p>
                </div>

                <div>
                    <h3 className="text-lg font-medium text-gray-900">Email</h3>
                    <p className="mt-1 block w-full">{user.email}</p>
                </div>

                <div>
                    <h3 className="text-lg font-medium text-gray-900">
                        Address
                    </h3>
                    <p className="mt-1 block w-full">
                        {user.user_details.address}
                    </p>
                </div>

                <div>
                    <h3 className="text-lg font-medium text-gray-900">
                        Phone Number
                    </h3>
                    <p className="mt-1 block w-full">
                        {user.user_details.phone_number}
                    </p>
                </div>
                <div>
                    <h3 className="text-lg font-medium text-gray-900">
                        Birthdate
                    </h3>
                    <p className="mt-1 block w-full">
                        {user.user_details.birthdate}
                    </p>
                </div>

                <div>
                    <h3 className="text-lg font-medium text-gray-900">Class</h3>
                    <p className="mt-1 block w-full">
                        {user.user_details.class}
                    </p>
                </div>
            </div>
        </section>
    );
}
