import ApplicationLogo from "@/Components/ApplicationLogo";
import Header from "@/Components/Header";
import { Link } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";

export default function Guest({ children }) {
    return (
        <section className="w-screen h-screen text-white font-poppins">
            <img
                className="z-[-1] fixed filter brightness-50 object-cover w-screen h-screen"
                src="/Assets/Home.webp"
            />
            <Navbar />
            <main>{children}</main>
            <div className="fixed bottom-0 w-screen h-24 bg-primaryBlue">
                <div>
                    <h1>Footer</h1>
                </div>
            </div>
        </section>
    );
}
