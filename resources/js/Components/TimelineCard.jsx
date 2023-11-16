import React from "react";
import PropTypes from "prop-types";
import submission from "../Icon/logo-submission.png";
import jam from "../Icon/jam.png";

export default function TimelineCard({ content, desc, date, time }) {
  const test = () => {
    console.log("Success");
  }
  return (
    <div className="flex flex-col mb-8">
      <h1 className="font-black text-left text-xl text-bold mb-2">{date}</h1>
      <div className="bg-slate-100 flex flex-row w-full p-4 rounded-lg">
        <div className="rounded-full bg-slate-300 h-8 p-1">
          <img src={submission} className="w-6 h-6" alt="submission" />
        </div>

        <div className="flex flex-row justify-between w-full">
          <div className="flex flex-col text-slate-400 font-semibold ml-4">
            <h1>{content}</h1>
            <h2>{desc}</h2>
            <button className="bg-blue-400 py-2 rounded-lg mt-4 mb-2" onClick={test}>
              <p className="text-white">Add Submission</p>
            </button>
          </div>
          <div className="flex items-center">
            <img src={jam} className="h-6 mr-2" alt="jam" />
            <h3 className="text-slate-400 font-semibold">{time}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

TimelineCard.propTypes = {
  content: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};
