import imageMapel from "../../Icon/gambar-abstrak.png"

export default function Subject() {
    return (
        <div className="p-6">
            <p className="font-bold text-sm text-slate-400 cursor-pointer">Mapel / Matematika</p>

            <div className="flex flex-row justify-between items-center mb-6">
                <h1 className="font-bold text-xl">Matematika</h1>
                <img src={imageMapel} className="w-22 bg-slate-300 py-2 px-6 rounded-lg hidden md:block"/>
            </div>

            <div className="flex flex-col w-full text-white">
                <div className="bg-slate-400 p-4 mb-6">
                    <h1 className="font-bold text-xl mb-2">Minggu 1</h1>
                    <div className="flex flex-row items-center border-b w-full border-black">
                        <h2>Pertemuan 1</h2>
                        <input type="checkbox" className="ml-3 h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-600" />
                    </div>
                    <div className="flex flex-row items-center mt-2">
                        <input type="checkbox" className="mr-3 h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-600" />
                        <h2 className="text-sm">Bab 1 - Perpangkatan</h2>
                    </div>
                </div>

                <div className="bg-slate-400 p-4 mb-6">
                    <h1 className="font-bold text-xl mb-2">Minggu 2</h1>
                    <div className="flex flex-row items-center border-b w-full border-black">
                        <h2>Pertemuan 2</h2>
                        <input type="checkbox" className="ml-3 h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-600" />
                    </div>
                    <div className="flex flex-col">
                        <div className="flex flex-row items-center mt-2">
                            <input type="checkbox" className="mr-3 h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-600" />
                            <h2 className="text-sm">Bab 2 - Perpangkatan</h2>
                        </div>
                        <div className="flex flex-row items-center mt-2">
                            <input type="checkbox" className="mr-3 h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-600" />
                            <h2 className="text-sm">Latihan Buku Paket Hal. 30  </h2>
                        </div>
                    </div>    
                </div>
            </div>
        </div>
    );
}
