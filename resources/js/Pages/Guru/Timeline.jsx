import submission from "../../Icon/logo-submission.png"
import jam from "../../Icon/jam.png"

export default function TimelineGuru() {
    return (
        <div className="p-6">
            <div className="flex flex-col items-center">
                <h1 className="font-black text-center text-2xl text-bold border-b-2 w-2/3 border-black pb-5 mb-10">Tugas Siswa</h1>
            </div>

            <div className="flex flex-col">
                <h1 className="font-black text-left text-xl text-bold mb-2">Rabu, 1 November 2023</h1>
                <div className="bg-slate-100 flex flex-row w-full p-4 rounded-lg">
                    <div className="rounded-full bg-slate-300 h-8 p-1">
                        <img src={submission} className="w-6 h-6" />
                    </div>
                    <div className="flex flex-row justify-between w-full">
                        <div className="flex flex-col text-slate-400 font-semibold ml-4">
                            <h1>Latihan Buku Paket Hal. 30</h1>
                            <h2>Matematika</h2>
                            <button className="bg-blue-400 py-2 rounded-lg mt-4 mb-2">
                                <p className="text-white">Riview</p>
                            </button>
                        </div>
                        <div className="flex items-center">
                            <img src={jam} className="h-6 mr-2" />
                            <h3 className="text-slate-400 font-semibold">13.00</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
