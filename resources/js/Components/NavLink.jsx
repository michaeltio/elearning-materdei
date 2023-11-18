import { Link } from "@inertiajs/react";

export default function NavLink({
    active = false,
    className = "",
    children,
    ...props
}) {
    return (
        <Link
            {...props}
            className={
                "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none " +
                (active
                    ? "border-white text-white focus:border-indigo-700 "
                    : "border-transparent text-white hover:text-slate-200 hover:border-slate-200 focus:text-slate-400 focus:border-slate-400 ") +
                className
            }
        >
            {children}
        </Link>
    );
}
