import imageMapel from "../Icon/imagemapel.png";
import PropTypes from "prop-types";

export default function ListTable({ matkul, kelas, teacher, time, attend, bgColor }) {

    return (
    <tr>
        <td className="flex flex-row py-2">
            <img src={imageMapel} className={`rounded-lg hidden md:block w-24 py-2 px-6 ${bgColor}`} alt="imageMapel" />
            <div className="flex flex-col md:ml-4">
                <h4 className="font-bold text-base">{matkul} - {kelas}</h4>
                <h4 className="font-semibold text-sm">{teacher}</h4>
            </div>
        </td>
        <td><h3 className="items-center justify-center font-bold flex text-wrap">{time}</h3></td>
        <td><h3 className="items-center justify-center font-bold flex text-wrap">{attend}</h3></td>
        <td className="w-6 text-center"><input type="checkbox" className="h-5 w-5 text-green-600 border-gray-300 rounded-full focus:ring-green-600" /></td>
    </tr>
    )
}
ListTable.propTypes = {
    matkul: PropTypes.string.isRequired,
    kelas: PropTypes.string.isRequired,
    teacher: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    attend: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired
  };