export default function AVerifikasi() {
    return (
      <div className="p-10">
        <p className="text-gray-500">Absensi / Verifikasi</p>
        <div className="flex justify-center mb-8">
          <h1 className="font-black text-center text-2xl text-bold border-b-2 border-black pb-5 w-2/5">Matematika - Kelas A</h1>
        </div>
        <div className='flex justify-between border-b-2 border-black pb-2'>
          <h1 className='font-black text-center text-bold'>Hari & Tanggal</h1>
          <h1 className='font-black text-center text-bold'>Senin, 30 Oktober 2023</h1>
        </div>
        <table className="mt-6 w-full">
          <thead className='text-gray-500'>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Keterangan Absen</th>
              <th>Sakit</th>
              <th>Keterangan Izin</th>
            </tr>
          </thead>
          <tbody className="bg-gray-300 h-12">
            <tr>
              <td className="text-center">1</td>
              <td className="text-center">Ahmad Mudaffa Santoso</td>
              <td className="text-center"><input type="checkbox" className="ml-3 h-5 w-5 text-green-600 border-gray-300 rounded focus:ring-green-600" /></td>
              <td className="text-center"><input type="checkbox" className="rounded h-5 w-5" /></td>
              <td className="text-center"><input type="text" className="border-none rounded h-3"></input></td>
            </tr>
          </tbody>
        </table>
        <div className="flex flex-row-reverse">
          <div className="w-1/3 p-4 bg-white border border-black rounded-lg mt-10">
            <h1 className="font-black text-center text-2xl text-bold pb-5">Verifikasi</h1>
            <form className="mt-6">
              <div className="mb-4 flex flex-row">
                <label htmlFor="email" className="font-bold no-wrap mr-2">Email Siswa</label>
                <input
                  type="email"
                  id="email"
                  className="border border-gray-300 rounded-md p-2 w-full"
                />
              </div>
              <div className="mb-4 flex flex-row">
                <label htmlFor="password" className="font-bold no-wrap mr-2">Password</label>
                <input
                  type="password"
                  id="password"
                  className="border border-gray-300 rounded-md p-2 w-full"
                />
              </div>
              <button
                type="button"
                className="bg-blue-500 text-white py-2 px-4 rounded-md"
              >
                Verifikasi
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
  