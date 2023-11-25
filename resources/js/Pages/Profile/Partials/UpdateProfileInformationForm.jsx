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

                {mustVerifyEmail && user.email_verified_at === null && (
                    <div>
                        <p className="text-sm mt-2 text-gray-800">
                            Your email address is unverified.
                            <Link
                                href={route("verification.send")}
                                method="post"
                                as="button"
                                className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Click here to re-send the verification email.
                            </Link>
                        </p>

                        {status === "verification-link-sent" && (
                            <div className="mt-2 font-medium text-sm text-green-600">
                                A new verification link has been sent to your
                                email address.
                            </div>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
}
