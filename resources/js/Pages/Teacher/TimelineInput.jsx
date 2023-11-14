export default function TimelineInputGuru() {
    return (
        <div className="p-6">
            <p className="font-bold text-sm text-slate-400 cursor-pointer">Review / Review</p>
            <div className="flex flex-col items-center">
                <h1 className="text-center text-2xl font-bold">Matematika - Kelas A</h1> 
                <p className="text-sm text-center border-b w-1/3 border-black pb-2 mb-10 font-bold">Latihan Soal Aljabar</p>
            </div>

            <div className="flex flex-row justify-between border-b border-black w-full pb-2">
                <h1 className="text-base font-bold">Hari & Tanggal</h1>
                <h1 className="text-base font-bold">Senin, 6 Oktober 2023</h1>
            </div>

            <div className="w-full">
                <table className="w-full border-collapse">
                    <thead className="text-slate-400 text-sm">
                        <tr>
                            <th class="py-2 px-4 border">No</th>
                            <th class="py-2 px-4 border">Nama</th>
                            <th class="py-2 px-4 border">Link</th>
                            <th class="py-2 px-4 border">Nilai</th>
                            <th class="py-2 px-4 border">Submission Status</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        <tr>
                            <td class="py-2 px-4 border">1</td>
                            <td class="py-2 px-4 border">Ahmad Mudaffa Santoso</td>
                            <td class="py-2 px-4 border">Tugas1.pdf</td>
                            <td class="py-2 px-4 border"><input type="text" value={90} className="rounded-lg text-center border-gray-300"/></td>
                            <td class="py-2 px-4 border bg-green-200">Assignment was submitted 6 days 13 hours early</td>
                        </tr>
                        <tr>
                            <td class="py-2 px-4 border">2</td>
                            <td class="py-2 px-4 border">Endang Supratma</td>
                            <td class="py-2 px-4 border">Tugas1.pdf</td>
                            <td class="py-2 px-4 border"><input type="text" value={0} className="rounded-lg text-center border-gray-300"/></td>
                            <td class="py-2 px-4 border bg-red-200">Assignment was submitted 3 days 10 hours late</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
