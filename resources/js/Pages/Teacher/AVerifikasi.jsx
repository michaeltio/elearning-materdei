import ListAttend from "../../Components/Averifikasi"

export default function AVerifikasi() {
    const handleButtonClick = () => {
      console.log("Button clicked!");
    };

    const data = [
      {
        no: "1",
        name: "Ahmad Mudaffa Santoso"
      },
      {
        no: "2",
        name: "Nayla Mutiara Baihaqi"
      }
    ];

    const setmapel = [
      {
        matkul: "Matematika",
        class: "Kelas A",
        date: "Senin, 30 Oktober 2023"
      }
    ];
    return (
      <div className="p-10">
        <p className="text-gray-500">Absensi / Verifikasi</p>
        <div className="flex justify-center mb-8">
          {setmapel.map((map, index) => (
          <h1 key={index} className="font-black text-center text-2xl text-bold border-b-2 border-black pb-5 w-2/5">{map.matkul} - {map.class}</h1>
          ))}
        </div>
        <div className="flex justify-between border-b-2 border-black pb-2">
          <h1 className="font-black text-center text-bold">Hari & Tanggal</h1> 
          {setmapel.map((map, index) => (
          <h1 key={index} className="font-black text-center text-bold">{map.date}</h1>
          ))}
        </div>
        <table className="mt-6 w-full">
          <thead className="text-gray-500">
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Keterangan Absen</th>
              <th>Sakit</th>
              <th>Keterangan Izin</th>
            </tr>
          </thead>
          <tbody className="bg-gray-300 h-12">
            {data.map((card, index) => (
              <ListAttend key={index} {...card} />
            ))}
          </tbody>
        </table>
        <div className="mt-4 flex flex-row-reverse">
          <button
                type="button"
                className="bg-blue-500 text-white py-2 px-4 rounded-md flex flex-row-reverse"
              onClick={handleButtonClick}>
                Submit
              </button>
        </div>
      </div>
    );
  }
  