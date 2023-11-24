export default function MeetingContent({ title }) {
    return (
        <div className="flex flex-row items-center mt-2">
            <input
                type="checkbox"
                className="mr-3 h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-600"
            />
            <h2 className="text-sm">{title}</h2>
        </div>
    );
}
