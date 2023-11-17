import React from "react";
import PropTypes from "prop-types";

export default function SubjectCard({ week, desc, content }) {
  return (
    <div className="flex flex-row w-full text-white bg-slate-400 p-4 mb-6 rounded-xl justify-between">
      <div className="flex flex-col w-2/3">
        <h1 className="font-bold text-xl mb-2">{week}</h1>
        <div className="flex flex-row items-center border-b w-full border-black">     
          <h2>{desc}</h2>
          <input type="checkbox" className="ml-3 h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-600" />
        </div>
        <div className="flex flex-row items-center mt-2 ">
          <input type="checkbox" className="mr-3 h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-600" />
          <h2 className="text-sm">{content}</h2>
        </div>
      </div>

      <div className="flex items-center justify-center flex-col">
        <label clasNames="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="multiple_files">Upload Material</label>
        <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="multiple_files" type="file" multiple />
      </div>
    </div>
  );
}

SubjectCard.propTypes = {
  week: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
