import PropTypes from "prop-types";

export default function ListAttend({ no, name }) {
    return (
        <tr>
            <td className="flex justify-center text-center py-3">{no}</td>
            <td className="text-center">{name}</td>
            <td className="text-center"><input type="checkbox" className="ml-3 h-5 w-5 text-green-600 border-gray-300 rounded focus:ring-green-600" /></td>
            <td className="text-center"><input type="checkbox" className="rounded h-5 w-5" /></td>
            <td className="text-center"><input type="text" className="border-none rounded h-3"></input></td>
        </tr>
    )
}
ListAttend.propTypes = {
    no: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};