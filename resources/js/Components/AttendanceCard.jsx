import React from "react";

export default function PresensiCard({ content, person, date, bgColor }) {
    return (
        <tr className="w-full">
            <td className="flex flex-row mx-4 mb-4">
                <img
                    src="#"
                    className={`rounded-lg hidden md:block w-24 py-2 px-6 ${bgColor}`}
                    alt="imageMapel"
                />
                <div className="flex flex-col md:ml-4">
                    <h4 className="font-bold text-base">{content}</h4>
                    <h4 className="font-semibold text-sm">{person}</h4>
                </div>
            </td>
            <td className="text-center">
                <input
                    type="checkbox"
                    className="cursor-pointer h-5 w-5 text-green-600 border-gray-300 rounded-full focus:ring-green-600"
                />
            </td>
            <td className="text-end">
                <h3 className="font-bold mr-4">{date}</h3>
            </td>
        </tr>
    );
}
