import Back from '../../Icon/back.png';
import Next from '../../Icon/next.png';
import imageMapel from '../../Icon/imagemapel.png';

export default function Attendance() {
    return(
        <div className='flex flex-col p-10'>
            <div className="flex justify-between items-center mb-10">
                <button className='rounded-lg bg-slate-300 p-2'>
                    <img src={Back}/>
                </button>
                <h1 className="font-black text-center text-2xl text-bold border-b-2 border-black pb-5 w-2/5">Pertemuan 1</h1>
                <button className='rounded-lg bg-slate-300 p-2'>
                    <img src={Next}/>
                </button>
            </div>
            <div className='flex justify-between border-b-2 border-black pb-2'>
                <h1 className='font-black text-center text-bold'>Hari & Tanggal</h1>
                <h1 className='font-black text-center text-bold'>Senin, 30 Oktober 2023</h1>
            </div>
            <table className='mt-6 w-full'>
                <thead className='text-gray-500'>
                    <tr className="hidden md:table-row">
                        <th className="px-4 py-2">Nama Mata Pelajaran - Kelas</th>
                        <th className="px-4 py-2">Waktu</th>
                        <th className="px-4 py-2">Total Hadir</th>
                        <th className="px-4 py-2">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='flex flex-row'>
                            <img src={imageMapel} className="w-22 bg-slate-300 py-2 px-6 rounded-lg hidden md:block"/>
                            <div className="flex flex-col md:ml-4">
                                <h4 className="font-bold text-base">Matematika - Kelas A</h4>
                                <h4 className="font-semibold text-sm">Ibu Mita</h4>
                            </div>
                        </td>
                        <td><h3 className="items-center justify-center font-bold flex text-wrap">7.00-8.00</h3></td>
                        <td><h3 className="items-center justify-center font-bold flex text-wrap">30/30</h3></td>
                        <td className="w-6"><input type="checkbox" className="ml-3 h-5 w-5 text-green-600 border-gray-300 rounded-full focus:ring-green-600" /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}