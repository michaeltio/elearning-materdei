import TimelineInputCard from "../../Components/TimelineInputCard";

export default function TimelineInputGuru() {
    const cards = [
        {
        num: "1",
        student: "Ahmad Mudaffa Santoso",
        file: "Tugas1.pdf",
        score: "90",
        desc: "Assignment was submitted 6 days 13 hours early",
        bgColor: "bg-green-200",
        },
        {
        num: "2",
        student: "Gaga Gigi Gugu",
        file: "Tugas1.pdf",
        score: "90",
        desc: "Assignment was submitted 6 days 13 hours early",
        bgColor: "bg-green-200",
        },
        {
        num: "3",
        student: "Dandang Suparatna",
        file: "Tugas1-Week1.pdf",
        score: "20",
        desc: "Assignment was submitted 3 days 10 hours late",
        bgColor: "bg-red-200",
        },
        {
        num: "4",
        student: "Adudu si Kepala Kotak",
        file: "Tugas1.pdf",
        score: "100",
        desc: "Assignment was submitted 6 days 13 hours early",
        bgColor: "bg-green-200",
        },
        {
        num: "5",
        student: "Endang Supratma",
        file: "-",
        score: "0",
        desc: "Not Submitted Yet",
        bgColor: "bg-red-200",
        },
    ];
    const additionalCards = [
    {
      content: "Matematika",
      kelas: "A",
      desc: "Latihan Soal Aljabar",
      date: "Senin, 6 Oktober 2023",
    },
  ];
    return (
        <div className="p-6">
            {additionalCards.map((card, index) => (
                <div key={index}>
                    <p className="font-bold text-sm text-slate-400 cursor-pointer">Review / Review</p>
                    <div className="flex flex-col items-center">
                        <h1 className="text-center text-2xl font-bold">{card.content} - Kelas {card.kelas}</h1> 
                        <p className="text-sm text-center border-b w-1/3 border-black pb-2 mb-10 font-bold">{card.desc}</p>
                    </div>

                    <div className="flex flex-row justify-between border-b border-black w-full pb-2">
                        <h1 className="text-base font-bold">Hari & Tanggal</h1>
                        <h1 className="text-base font-bold">{card.date}</h1>
                    </div>
                </div>
            ))}

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
                    {cards.map((card, index) => (
                        <TimelineInputCard key={index} {...card} />
                    ))}
                </table>
            </div>
        </div>
    );
}
