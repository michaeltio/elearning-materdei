import Dot from "../../Icon/tripledot.png"
import Search from "../../Icon/search-icon.png"
import List from "../../Components/Murid"

export default function Murid() {
    const handleButtonClick = () => {
        console.log("Button clicked!");
    };

    const mdata = [
        {
            name: "Ahmad Mudaffa Santoso",
            kelas: "7A",
            score: "A-",
            parent: "Lorem ipsum dolor sit amet" 
        },
        {
            name: "Budi Santoso",
            kelas: "7B",
            score: "A+",
            parent: "Lorem ipsum dolor sit amet" 
        },
        {
            name: "Caca nurjannah",
            kelas: "8C",
            score: "D",
            parent: "Lorem ipsum dolor sit amet" 
        },
        {
            name: "Deden Kasim Kasmarin",
            kelas: "9A",
            score: "B-",
            parent: "Lorem ipsum dolor sit amet" 
        },
        {
            name: "Endang Supratma",
            kelas: "7E",
            score: "C",
            parent: "Lorem ipsum dolor sit amet" 
        },
        {
            name: "Fattan Rafli Adhy",
            kelas: "8B",
            score: "A",
            parent: "Lorem ipsum dolor sit amet" 
        }
    ];
    return (
        <div className="p-10">
            <h1 className="font-black text-2xl text-bold border-b-2 border-black pb-5">Total Murid : {}</h1>
            <form className="mt-5 flex flex-row">
                <div className="relative w-3/5">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <img src={Search} className="w-7" />
                    </div>
                    <div className="absolute inset-y-0 end-3 flex items-center ps-3">
                        <img src={Dot} className="w-7 cursor-pointer" onClick={handleButtonClick}/>
                    </div>
                    <input type="search" id="default-search" onClick={handleButtonClick} className="block w-full p-4 ps-10 rounded-lg bg-gray-100 border-none" required />
                </div>
                <button className="w-1/5 border border-blue-500 rounded-lg ml-3 text-white bg-blue-500">+ Tambah murid baru</button>
                <button className="w-1/5 border border-blue-500 rounded-lg ml-3 text-white bg-blue-500">Delete all</button>
            </form>
            <table className="w-full mt-5 border-t-2 border-black text-start">
                <thead className="h-16 border-b-2 border-black">
                    <tr>
                        <th><input type="checkbox" className="rounded w-6 border-none bg-gray-200 cursor-pointer" /></th>
                        <th>NAMA</th>
                        <th>KELAS</th>
                        <th>NILAI</th>
                        <th>ORANG TUA</th>
                    </tr>
                </thead>
                <tbody>
                {mdata.map((card, index) => (
                    <List key={index} {...card} />
                ))}
                </tbody>
            </table>
        </div>
    );
}