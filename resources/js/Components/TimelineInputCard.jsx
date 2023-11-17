import React from "react";
import PropTypes from "prop-types";

export default function TimelineInputCard({ num, student, file, score, desc, bgColor }) {
    return(
    <tbody className="text-center">
        <tr>
            <td class="py-2 px-4 border">{num}</td>
            <td class="py-2 px-4 border">{student}</td>
            <td class="py-2 px-4 border">{file}</td>
            <td class="py-2 px-4 border"><input type="text" value={score} className="rounded-lg text-center border-gray-300"/></td>
            <td class={`py-2 px-4 border ${bgColor}`}>{desc}</td>
        </tr>
    </tbody>
    );
}

TimelineInputCard.propTypes = {
  num: PropTypes.string.isRequired,
  student: PropTypes.string.isRequired,
  file: PropTypes.string.isRequired,
  score: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
};