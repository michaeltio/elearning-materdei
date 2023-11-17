import React from "react";
import LogoSekolah from "../Icon/school_logo 3.png";

const Footer = () => {
    return (
        <footer className="text-white">
            <div className="flex bg-[#1184e8] justify-between p-8">
                <div className="flex items-center">
                    <img
                        src={LogoSekolah}
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
                    <h1 className="font-extrabold text-xl font-bold">Kontak</h1>
                    <p className="text-xs">(Phone) 021-7407148</p>
                </div>
                <div className="w-1/6">
                    <p className="text-xs">
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
            <div className="bg-[#0f75ce] pt-1 pb-1">
                <p className="text-center">&copy; Copyright 2023</p>
            </div>
        </footer>
    );
};

export default Footer;
