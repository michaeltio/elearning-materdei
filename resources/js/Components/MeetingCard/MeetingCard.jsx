export default function MeetingCard({ title }) {
    return (
        <div className="bg-slate-400 p-4 mb-6 rounded-xl">
            <h1 className="font-bold text-xl mb-2 ">Jumat, 24 November 2023</h1>
            <div className="flex flex-row items-center border-b w-full border-black" />
            <div className="flex flex-col">
                <div className="flex flex-row items-center mt-2">
                    <input
                        type="checkbox"
                        className="mr-3 h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-600"
                    />
                    <h2 className="text-sm">Bab 2 - Perpangkatan</h2>
                </div>
                <div className="flex flex-row items-center mt-2">
                    <input
                        type="checkbox"
                        className="mr-3 h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-600"
                    />
                    <h2 className="text-sm">Latihan Buku Paket Hal. 30 </h2>
                </div>
            </div>
        </div>
    );
}
