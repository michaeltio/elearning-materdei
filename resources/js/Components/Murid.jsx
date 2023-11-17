import PropTypes from "prop-types";
import Dot from "../Icon/tripledot.png"

export default function ListMurid({ name, kelas, score, parent }) {
    const handleButtonClick = () => {
        console.log("Button clicked!");
    };
    return(
        <tr className="text-center border-b-2 border-black hover:bg-slate-100">
            <td className="py-5"><input type="checkbox" className="rounded w-6 border-none bg-gray-200 cursor-pointer" /></td>
            <td className="py-5">{name}</td>
            <td className="py-5">{kelas}</td>
            <td className="py-5">{score}</td>
            <td className="py-5">{parent}</td>
            <td className="py-5"><img src={Dot} className="w-7 cursor-pointer" onClick={handleButtonClick}/></td>
        </tr>
    );
}
ListMurid.propTypes = {
    name: PropTypes.string.isRequired,
    kelas: PropTypes.string.isRequired,
    score: PropTypes.string.isRequired,
    parent: PropTypes.string.isRequired
};