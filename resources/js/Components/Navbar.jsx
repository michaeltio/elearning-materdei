import React from "react";

export default function Navbar() {
    return (
        <div className="flex flex-row justify-between items-center w-screen h-24 bg-primaryBlue">
            <div className="flex flex-row items-center gap-4 text-lg">
                <img className="w-20 h-20" src="/Logo/MDLogoBG.webp" />
                <h1>
                    <b>E-Learning SMPK Mater Dei</b>
                </h1>
            </div>
            <div className="text-lg">
                <b>Care - Innovative - Respect</b>
            </div>
        </div>
    );
}
