import LogoMaterDei from "/public/Assets/Logo-MaterDei.png";
import HomeBackground from "/public/Assets/Home.webp";
export default function Guest({ className = "", children }) {
    return (
        <>
            <div className="fixed flex justify-center md:justify-between w-full bg-[#1184e8] items-center p-2 text-white">
                <div className="flex items-center">
                    <img src={LogoMaterDei} alt="" className="w-16" />
                    <h1>E-Learning SMPK Mater Dei</h1>
                </div>
                <h1 className="hidden md:block">
                    Unggul - Kasih - Bermartabat
                </h1>
            </div>
            <img
                className="z-[-1] fixed filter brightness-50 object-cover w-screen h-screen"
                src={HomeBackground}
            />
            <main className={className}>{children}</main>
            <div className="fixed bottom-0 bg-primaryBlue w-full text-white flex flex-col md:flex-row justify-between text-center p-2 items-center">
                <div className="flex items-center">
                    <img src={LogoMaterDei} alt="" className="w-16" />
                    <h1>E-Learning SMPK Mater Dei</h1>
                </div>
                <div>
                    <h1>Contact</h1>
                    <p>SMPK Mater Dei 123-456-890</p>
                </div>
                <div>
                    <h1>Alamat</h1>
                    <p>
                        Jl. Pamulang Permai, Pamulang Bar., Pamulang, Kota
                        Tangerang Selatan, Banten 15417, Indonesia.
                    </p>
                </div>
            </div>
        </>
    );
}
