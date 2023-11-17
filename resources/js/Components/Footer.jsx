import React from "react";
import LogoSekolah from "../Icon/school_logo 3.png";

const Footer = () => {
    return (
        <footer className="mt-8">
            <div className="flex bg-[#0ea5e9] justify-between">
                <div>
                    <div>
                        <img
                            src={LogoSekolah}
                            alt="Logo Sekolah"
                            className="w-12 h-12 mr-1"
                        />
                    </div>
                    <div>
                        <div>
                            <h1 className="font-extrabold">SMPK Mater Dei</h1>
                        </div>
                        <div>
                            <p>Unggul</p>
                            <p>Kasih</p>
                            <p>Bermartabat</p>
                        </div>
                    </div>
                </div>
                <div className="w-38">
                    <h1>Alamat</h1>
                    <p>
                        Jl. Pamulang Permai, Pamulang Bar., Pamulang, Kota
                        Tangerang Selatan, Banten 15417, Indonesia.
                    </p>
                </div>
                <div>
                    <h1 className="font-extrabold">Kontak</h1>
                    <p>(Phone) 021-7407148</p>
                </div>
                <div className="w-32">
                    <p>
                        Sebagai lembaga pendidikan yang telah terbukti
                        memberikan layanan sesuai dengan kebutuhan pasar dan
                        menghasilkan generasi muda yang berprestasi, Sekolah
                        Mater Dei - Pamulang terus menerus meningkatkan mutu
                        layanannya. Di era globalisasi, tetap memberikan
                        pendidikan karakter untuk keberhasilan peserta didik di
                        masa datang.
                    </p>
                </div>
            </div>

            <div className="bg-[#1e40af]">
                <p>&copy; Copyright 2023</p>
            </div>
        </footer>
    );
};

export default Footer;
