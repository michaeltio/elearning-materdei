import Back from "../../Icon/back.png";
import Next from "../../Icon/next.png";
import ListTable from "../../Components/Attendance";

export default function Attendance() {
    const handleButtonClick = () => {
        console.log("Button clicked!");
    };

    const sets = [
        {
            matkul: "Matematika",
            kelas: "Kelas A",
            teacher: "Ibu Mita",
            time: "7.00 - 8.00",
            attend: "30/30",
            bgColor: "bg-red-300"
        },
        {
            matkul: "Bahasa Indonesia",
            kelas: "Kelas B",
            teacher: "Ibu Nurul",
            time: "7.00 - 8.00",
            attend: "30/30",
            bgColor: "bg-red-300"
        },
        {
            matkul: "IPA",
            kelas: "Kelas C",
            teacher: "Pak Dandi",
            time: "7.00 - 8.00",
            attend: "30/30",
            bgColor: "bg-yellow-200"
        },
        {
            matkul: "IPS",
            kelas: "Kelas B",
            teacher: "Pak Dandi",
            time: "7.00 - 8.00",
            attend: "30/30",
            bgColor: "bg-blue-300"
        },
        {
            matkul: "Bahasa Inggris",
            kelas: "Kelas B",
            teacher: "Miss Gita",
            time: "7.00 - 8.00",
            attend: "30/30",
            bgColor: "bg-yellow-200"
        }
    ];

    const setweek = [
        {
            meet: "Pertemuan 1",
            datetime: "Senin, 30 Oktober 2023"
        },
    ];

    return(
<div className="flex flex-col p-10">
            <div className="flex justify-between items-center mb-10">
                <button className="rounded-lg bg-slate-300 p-2" onClick={handleButtonClick}>
                    <img src={Back}/>
                </button>
                {setweek.map((meeting, index) => (
                    <h1 key={index} className="font-black text-center text-2xl text-bold border-b-2 border-black pb-5 w-2/5">{meeting.meet}</h1>
                ))}
                <button className="rounded-lg bg-slate-300 p-2" onClick={handleButtonClick}>
                    <img src={Next}/>
                </button>
            </div>
            <div className="flex justify-between border-b-2 border-black pb-2">
                <h1 className="font-black text-center text-bold">Hari & Tanggal</h1>
                {setweek.map((meeting, index) => (
                    <h1 key={index} className="font-black text-center text-bold">{meeting.datetime}</h1>
                ))}
            </div>
            <table className="mt-6 w-full">
                <thead className="text-gray-500">
                    <tr className="hidden md:table-row">
                        <th className="px-4 py-2">Nama Mata Pelajaran - Kelas</th>
                        <th className="px-4 py-2">Waktu</th>
                        <th className="px-4 py-2">Total Hadir</th>
                        <th className="px-4 py-2">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {sets.map((card, index) => (
                        <ListTable key={index} {...card} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}