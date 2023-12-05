import { useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/react";

//images
import LogoMaterDei from "/public/Assets/Logo-MaterDei.png";
import LineFooter from "/public/Assets/line-footer.png";

export default function Authenticated({ user, children, className }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <div className="flex flex-col min-h-screen">
                <nav className="flex flex-col text-white">
                    <div className="h-24 bg-primaryBlue flex items-center justify-between">
                        <div className="px-8 flex items-center">
                            <img
                                src={LogoMaterDei}
                                alt="Logo Sekolah"
                                className="w-20 mr-1 "
                            />
                            <h1>E-Learning SMPK Mater Dei</h1>
                        </div>

                        {user.user_details.role === "admin" && (
                            <>
                                <div className="hidden sm:-my-px sm:ml-10 sm:flex">
                                    <NavLink
                                        href={route("adminHome")}
                                        active={route().current("adminHome")}
                                    >
                                        Home
                                    </NavLink>
                                </div>

                                <div className="hidden sm:-my-px sm:ml-10 sm:flex">
                                    <NavLink
                                        href={route("dashboard")}
                                        active={route().current("dashboard")}
                                    >
                                        Schedule
                                    </NavLink>
                                </div>
                            </>
                        )}

                        {user.user_details.role === "teacher" && (
                            <>
                                <div className="hidden sm:-my-px sm:ml-10 sm:flex">
                                    <NavLink
                                        href={route("teacherHome")}
                                        active={route().current("teacherHome")}
                                    >
                                        Home
                                    </NavLink>
                                </div>

                                <div className="hidden sm:-my-px sm:ml-10 sm:flex">
                                    <NavLink
                                        href={route("dashboard")}
                                        active={route().current("dashboard")}
                                    >
                                        Schedule
                                    </NavLink>
                                </div>
                            </>
                        )}

                        {user.user_details.role === "student" && (
                            <>
                                <div className="hidden sm:-my-px sm:ml-10 sm:flex">
                                    <NavLink
                                        href={route("studentHome")}
                                        active={route().current("studentHome")}
                                    >
                                        Home
                                    </NavLink>
                                </div>

                                <div className="hidden sm:-my-px sm:ml-10 sm:flex">
                                    <NavLink
                                        href={route("studentAttendance")}
                                        active={route().current(
                                            "studentAttendance"
                                        )}
                                    >
                                        Attendance
                                    </NavLink>
                                </div>

                                <div className="hidden sm:-my-px sm:ml-10 sm:flex">
                                    <NavLink
                                        href={route("dashboard")}
                                        active={route().current("dashboard")}
                                    >
                                        Schedule
                                    </NavLink>
                                </div>
                            </>
                        )}

                        <div className="hidden px-8 sm:flex sm:items-center sm:ml-6">
                            <div className="ml-3 relative">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md hover:bg-white hover:text-primaryBlue focus:outline-none transition ease-in-out duration-150"
                                            >
                                                {user.user_details.full_name}

                                                <svg
                                                    className="ml-2 -mr-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link
                                            href={route("profile.edit")}
                                        >
                                            Profile
                                        </Dropdown.Link>
                                        <Dropdown.Link
                                            href={route("logout")}
                                            method="post"
                                            as="button"
                                        >
                                            Log Out
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>

                        <div className="flex px-8 items-center sm:hidden">
                            <button
                                onClick={() =>
                                    setShowingNavigationDropdown(
                                        (previousState) => !previousState
                                    )
                                }
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                            >
                                <svg
                                    className="h-6 w-6"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        className={
                                            !showingNavigationDropdown
                                                ? "inline-flex"
                                                : "hidden"
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={
                                            showingNavigationDropdown
                                                ? "inline-flex"
                                                : "hidden"
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div
                        className={
                            (showingNavigationDropdown ? "block" : "hidden") +
                            " sm:hidden"
                        }
                    >
                        {user.user_details.role === "admin" && (
                            <>
                                <div className="pt-2 pb-3 space-y-1">
                                    <ResponsiveNavLink
                                        href={route("adminHome")}
                                        active={route().current("adminHome")}
                                    >
                                        Home
                                    </ResponsiveNavLink>
                                </div>

                                <div className="pt-2 pb-3 space-y-1">
                                    <ResponsiveNavLink
                                        href={route("dashboard")}
                                        active={route().current("dashboard")}
                                    >
                                        Schedule
                                    </ResponsiveNavLink>
                                </div>
                            </>
                        )}

                        {user.user_details.role === "teacher" && (
                            <>
                                <div className="pt-2 pb-3 space-y-1">
                                    <ResponsiveNavLink
                                        href={route("teacherHome")}
                                        active={route().current("teacherHome")}
                                    >
                                        Home
                                    </ResponsiveNavLink>
                                </div>

                                <div className="pt-2 pb-3 space-y-1">
                                    <ResponsiveNavLink
                                        href={route("dashboard")}
                                        active={route().current("dashboard")}
                                    >
                                        Schedule
                                    </ResponsiveNavLink>
                                </div>
                            </>
                        )}

                        {user.user_details.role === "student" && (
                            <>
                                <div className="pt-2 pb-3 space-y-1">
                                    <ResponsiveNavLink
                                        href={route("studentHome")}
                                        active={route().current("studentHome")}
                                    >
                                        Home
                                    </ResponsiveNavLink>
                                </div>

                                <div className="pt-2 pb-3 space-y-1">
                                    <ResponsiveNavLink
                                        href={route("studentAttendance")}
                                        active={route().current(
                                            "studentAttendance"
                                        )}
                                    >
                                        Attendance
                                    </ResponsiveNavLink>
                                </div>

                                <div className="pt-2 pb-3 space-y-1">
                                    <ResponsiveNavLink
                                        href={route("dashboard")}
                                        active={route().current("dashboard")}
                                    >
                                        Schedule
                                    </ResponsiveNavLink>
                                </div>
                            </>
                        )}

                        <div className="pt-4 pb-1 border-t border-gray-200">
                            <div className="px-4">
                                <div className="font-medium text-base text-gray-800">
                                    {user.user_details.full_name}
                                </div>
                                <div className="font-medium text-sm text-gray-500">
                                    {user.email}
                                </div>
                            </div>

                            <div className="mt-3 space-y-1">
                                <ResponsiveNavLink href={route("profile.edit")}>
                                    Profile
                                </ResponsiveNavLink>
                                <ResponsiveNavLink
                                    method="post"
                                    href={route("logout")}
                                    as="button"
                                >
                                    Log Out
                                </ResponsiveNavLink>
                            </div>
                        </div>
                    </div>
                </nav>

                <main className={"flex-grow " + className}>{children}</main>

                {/* footer for mobile */}
                <footer className="mt-auto block md:hidden text-white">
                    <div className="flex flex-col bg-primaryBlue justify-between p-8">
                        <div className="flex justify-center gap-8">
                            <div className="flex flex-col items-between justify-between w-2/5 text-center">
                                <img
                                    src={LogoMaterDei}
                                    alt="Logo Sekolah"
                                    className="w-24 mx-auto "
                                />
                                <div>
                                    <b>SMPK Mater Dei</b>
                                </div>
                            </div>
                            <img src={LineFooter} alt="" />
                            <div className="w-2/5">
                                <div>
                                    <h1 className="text-xl font-bold">
                                        Alamat
                                    </h1>
                                    <p className="text-xs">
                                        Jl. Pamulang Permai, Pamulang Bar.,
                                        Pamulang, Kota Tangerang Selatan, Banten
                                        15417, Indonesia.
                                    </p>
                                </div>
                                <div>
                                    <h1 className="font-extrabold text-xl font-bold">
                                        Kontak
                                    </h1>
                                    <p className="text-xs">
                                        (Phone) 021-7407148
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full mt-4">
                            <p className="text-xs italic">
                                Sebagai lembaga pendidikan yang telah terbukti
                                memberikan layanan sesuai dengan kebutuhan pasar
                                dan menghasilkan generasi muda yang berprestasi,
                                Sekolah Mater Dei - Pamulang terus menerus
                                meningkatkan mutu layanannya. Di era
                                globalisasi, tetap memberikan pendidikan
                                karakter untuk keberhasilan peserta didik di
                                masa datang.
                            </p>
                        </div>
                    </div>
                    <div className="bg-[#0f75ce] pt-1 pb-1">
                        <p className="text-center">&copy; Copyright 2023</p>
                    </div>
                </footer>

                {/* footer for desktop */}
                <footer className="mt-auto md:block hidden text-white">
                    <div className="flex bg-primaryBlue justify-between p-8">
                        <div className="flex items-center">
                            <img
                                src={LogoMaterDei}
                                alt="Logo Sekolah"
                                className="w-20 mr-1 "
                            />
                            <div>
                                <b>SMPK Mater Dei</b>
                                <p>Unggul</p>
                                <p>Kasih</p>
                                <p>Bermartabat</p>
                            </div>
                        </div>
                        <div className="w-1/6">
                            <h1 className="text-xl font-bold">Alamat</h1>
                            <p className="text-xs">
                                Jl. Pamulang Permai, Pamulang Bar., Pamulang,
                                Kota Tangerang Selatan, Banten 15417, Indonesia.
                            </p>
                        </div>
                        <div>
                            <h1 className="font-extrabold text-xl font-bold">
                                Kontak
                            </h1>
                            <p className="text-xs">(Phone) 021-7407148</p>
                        </div>
                        <div className="w-1/6">
                            <p className="text-xs italic">
                                Sebagai lembaga pendidikan yang telah terbukti
                                memberikan layanan sesuai dengan kebutuhan pasar
                                dan menghasilkan generasi muda yang berprestasi,
                                Sekolah Mater Dei - Pamulang terus menerus
                                meningkatkan mutu layanannya. Di era
                                globalisasi, tetap memberikan pendidikan
                                karakter untuk keberhasilan peserta didik di
                                masa datang.
                            </p>
                        </div>
                    </div>
                    <div className="bg-secondaryBlue pt-1">
                        <p className="text-center">&copy; Copyright 2023</p>
                    </div>
                </footer>
            </div>
        </div>
    );
}
