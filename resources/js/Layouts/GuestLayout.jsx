import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";

export default function Guest({ children }) {
    return (
        <>
            <img
                className="z-[-1] fixed filter brightness-50 object-cover w-full h-screen"
                src="/Assets/Home.webp"
            ></img>
            <div className="text-white font-poppins min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
                <div className="p-1 flex flex-row justify-between items-center fixed top-0 w-screen h-24 bg-primaryBlue">
                    <div className="flex flex-row gap-4 items-center">
                        <img className="w-20 h-20" src="/Logo/MDLogoBG.webp" />
                        <h1 className="text-lg">
                            <b>E-Learning SMPK Mater Dei</b>
                        </h1>
                    </div>
                    <div className="text-lg pr-10">
                        <b>Care - Innovative - Respect</b>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <Link href="/">
                        <ApplicationLogo className="w-28 h-28 fill-current text-gray-500" />
                    </Link>
                    <h1 className="text-center text-2xl">
                        <b>SMPK MATER DEI PAMULANG</b>
                    </h1>
                </div>
                <div className="w-full sm:max-w-md overflow-hidden sm:rounded-lg">
                    <h1 className="text-center text-white text-xl py-5">
                        <b>Sign In</b>
                    </h1>
                    {children}
                </div>
                <div className="items-center fixed bottom-0 p-1 w-screen h-24 bg-primaryBlue">
                    <div>
                        <h1>SMPK Mater Dei</h1>
                        <p>Care</p>
                        <p>Innovative</p>
                        <p>Respect</p>
                    </div>
                </div>
            </div>
        </>
    );
}
