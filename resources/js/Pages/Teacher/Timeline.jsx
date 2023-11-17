import TimelineCard from "../../Components/TimelineCard";

export default function Timeline() {
    const cards = [
    {
      content: "Latihan Buku Paket Hal. 30",
      desc: "Matematika",
      date: "Rabu, 1 November 2023",
      time: "13.00",
    },
    {
      content: "Latihan Buku Paket Hal. 100",
      desc: "IPS",
      date: "Kamis, 2 November 2023",
      time: "10.00",
    },
    {
      content: "Latihan LKS Hal. 30",
      desc: "IPA",
      date: "Jumat, 3 November 2023",
      time: "7.00",
    },
    {
      content: "Remedi Ulangan ke-2",
      desc: "Bahasa Indonesia",
      date: "Sabtu, 4 November 2023",
      time: "15.00",
    },
    {
      content: "Latihan Buku Paket Hal. 52",
      desc: "Bahasa Inggris",
      date: "Senin, 6 November 2023",
      time: "23.59",
    },
  ];
    return (
        <div className="p-6">
            <div className="flex flex-col items-center">
                <h1 className="font-black text-center text-2xl text-bold border-b-2 w-1/3 border-black pb-5 mb-10">Tugas Siswa</h1>
            </div>

            {cards.map((card, index) => (
                <TimelineCard key={index} {...card} />
            ))}
        </div>
    );
}
