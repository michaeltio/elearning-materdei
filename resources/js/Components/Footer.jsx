import React from "react";
import LogoSekolah from "../Icon/school_logo 3.png";

const Footer = () => {
    return (
        <footer className="fixed w-screen bottom-0">
            <div className="p-8 bg-blue-400 text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                        <div className="mb-5">
                            <div className="flex items-center">
                                <img
                                    src={LogoSekolah}
                                    alt="Logo Sekolah"
                                    className="w-12 h-12 mr-1"
                                />
                                <h1 className="font-extrabold">
                                    SMPK Mater Dei
                                </h1>
                            </div>
                            <div>
                                <p>Unggul</p>
                                <p>Kasih</p>
                                <p>Bermartabat</p>
                            </div>
                        </div>
                        <div className="mb-5">
                            <div className="flex items-center">
                                <h1 className="font-extrabold">Alamat</h1>
                            </div>
                            <div>
                                <p>
                                    Jl. Pamulang Permai, Pamulang Bar.,
                                    Pamulang, Kota Tangerang Selatan, Banten
                                    15417, Indonesia.
                                </p>
                            </div>
                        </div>
                        <div className="mb-5">
                            <div className="flex items-center">
                                <h1 className="font-extrabold">Kontak</h1>
                            </div>
                            <div>
                                <p>(Phone) 021-7407148</p>
                            </div>
                        </div>
                        <div className="mb-5">
                            <div className="flex items-center">
                                <p>
                                    Sebagai lembaga pendidikan yang telah
                                    terbukti memberikan layanan sesuai dengan
                                    kebutuhan pasar dan menghasilkan generasi
                                    muda yang berprestasi, Sekolah Mater Dei -
                                    Pamulang terus menerus meningkatkan mutu
                                    layanannya. Di era globalisasi, tetap
                                    memberikan pendidikan karakter untuk
                                    keberhasilan peserta didik di masa datang.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center bg-blue-500">
                    <p>&copy; Copyright {new Date().getFullYear()}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
