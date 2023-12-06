// Assets
import LogoMaterDei from "/public/Assets/Logo-MaterDei.png";
import HomeBackground from "/public/Assets/Home.webp";
import LineFooter from "/public/Assets/line-footer.png";

export default function Guest({ className, children }) {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Header for mobile */}
            <div className="flex md:hidden justify-around w-full bg-primaryBlue items-center py-2 px-8 text-white">
                <div className="flex items-center">
                    <img src={LogoMaterDei} alt="" className="w-16" />
                    <h1>E-Learning SMPK Mater Dei</h1>
                </div>
            </div>

            {/* Header for desktop */}
            <div className="hidden md:flex justify-between w-full bg-primaryBlue items-center py-2 px-8 text-white">
                <div className="flex items-center">
                    <img src={LogoMaterDei} alt="" className="w-16" />
                    <h1>E-Learning SMPK Mater Dei</h1>
                </div>
                <h1>Unggul - Kasih - Bermartabat</h1>
            </div>

            {/* Background */}
            <img
                className="z-[-1] fixed filter brightness-50 object-cover w-screen h-screen"
                src={HomeBackground}
            />

            {/* Content */}
            <main className={className}>{children}</main>

            {/* Footer for mobile */}
            <footer className="bottom-0 mt-auto block lg:hidden text-white">
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
                                <h1 className="text-xl font-bold">Alamat</h1>
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
                                <p className="text-xs">(Phone) 021-7407148</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full mt-4">
                        <p className="text-xs italic">
                            Sebagai lembaga pendidikan yang telah terbukti
                            memberikan layanan sesuai dengan kebutuhan pasar dan
                            menghasilkan generasi muda yang berprestasi, Sekolah
                            Mater Dei - Pamulang terus menerus meningkatkan mutu
                            layanannya. Di era globalisasi, tetap memberikan
                            pendidikan karakter untuk keberhasilan peserta didik
                            di masa datang.
                        </p>
                    </div>
                </div>
                <div className="bg-[#0f75ce] pt-1 pb-1">
                    <p className="text-center">&copy; Copyright 2023</p>
                </div>
            </footer>

            {/* Footer for desktop */}
            <footer className="bottom-0 mt-auto lg:block hidden text-white">
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
                            Jl. Pamulang Permai, Pamulang Bar., Pamulang, Kota
                            Tangerang Selatan, Banten 15417, Indonesia.
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
                            memberikan layanan sesuai dengan kebutuhan pasar dan
                            menghasilkan generasi muda yang berprestasi, Sekolah
                            Mater Dei - Pamulang terus menerus meningkatkan mutu
                            layanannya. Di era globalisasi, tetap memberikan
                            pendidikan karakter untuk keberhasilan peserta didik
                            di masa datang.
                        </p>
                    </div>
                </div>
                <div className="bg-secondaryBlue pt-1">
                    <p className="text-center">&copy; Copyright 2023</p>
                </div>
            </footer>
        </div>
    );
}
