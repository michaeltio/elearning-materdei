import back from "../../Icon/back.png"
import imageMapel from "../../Icon/gambar-abstrak.png"

export default function HistoryPresensi() {
    return (
        <div className="p-6">
            <button className="rounded-lg bg-slate-300 p-2">
                <img src={back}/>
            </button>
            <div className="flex flex-col items-center">
                <h1 className="font-black text-center text-2xl text-bold border-b-2 w-2/3 border-black pb-5 mb-10">Oktober 2023</h1>
            </div>

            <div className="flex flex-row justify-between">
                <h3 className="text-slate-400 font-semibold">Nama Mata Pelajaran</h3>
                <h3 className="text-slate-400 font-semibold">Kehadiran</h3>
                <h3 className="text-slate-400 font-semibold">Hari & Tanggal</h3>
            </div>
            
            <div className="flex flex-row justify-between mt-4 items-center">
                <div className="flex flex-row">
                    <img src={imageMapel} className="w-22 bg-slate-300 py-2 px-6 rounded-lg hidden md:block"/>
                    <div className="flex flex-col md:ml-4">
                        <h4 className="font-bold text-base">Matematika</h4>
                        <h4 className="font-semibold text-sm">Ibu Mita</h4>
                    </div>
                </div>
                <input type="checkbox" className="ml-3 h-5 w-5 text-green-600 border-gray-300 rounded focus:ring-green-600" />
                <h3 className="font-bold flex items-center text-wrap">Senin, 30 Oktober 2023</h3>
            </div> 
        </div>
    );
}
