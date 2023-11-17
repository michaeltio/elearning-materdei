import React from "react";
import imageMapel from "../../Icon/gambar-abstrak.png";
import SubjectCard from "../../Components/SubjectCard";

export default function Subject() {
  const cards = [
    {
      week: "Minggu 1",
      desc: "Pertemuan 1",
      content: "Bab 1 - Perpangkatan",
    },
    {
      week: "Minggu 1",
      desc: "Pertemuan 2",
      content: "Bab 2 - Aljabar",
    },
    {
      week: "Minggu 2",
      desc: "Pertemuan 3",
      content: "Bab 3 - Aljabar",
    },
    {
      week: "Minggu 2",
      desc: "Pertemuan 4",
      content: "Bab 4 - Aljabar Linier",
    },
    {
      week: "Minggu 3",
      desc: "Pertemuan ",
      content: "Bab 5 - Percobaan",
    },
  ];

  const additionalCards = [
    {
      content: "Matematika",
      bgColor: "bg-red-300",
    },
    // {
    //   content: "IPA",
    //   bgColor: "bg-yellow-200",
    // },
    // {
    //   content: "IPS",
    //   bgColor: "bg-blue-300",
    // },
    // {
    //   content: "Bahasa Indonesia",
    //   bgColor: "bg-red-300",
    // },
    // {
    //   content: "Bahasa Inggris",
    //   bgColor: "bg-yellow-200",
    // },
  ];

  return (
    <div className="p-6">
      {additionalCards.map((card, index) => (
        <div key={index}>
          <p className="font-bold text-sm text-slate-400 cursor-pointer">
            Mapel / {card.content}
          </p>

          <div className="flex flex-row justify-between items-center mb-6">
            <h1 className="font-bold text-xl">{card.content}</h1>
            <img src={imageMapel} className={`rounded-lg hidden md:block w-24 py-2 px-6 ${card.bgColor}`} alt="imageMapel" />
          </div>

          {cards.map((card, index) => (
            <SubjectCard key={index} {...card} />
          ))}
        </div>
      ))}
    </div>
  );
}
