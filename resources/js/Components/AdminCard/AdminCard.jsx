export default function AdminCard({ title, icon, qty, path }) {
    const handleView = () => {
        console.log(path);
    };

    return (
        <div className="flex flex-col bg-gradient-to-r from-red-400 to-red-500 w-96 h-64 rounded-xl p-8  justify-between">
            <div className="flex justify-between">
                <div>
                    <h1 className="text-2xl">{title}</h1>
                    <h1 className="text-3xl">{qty}</h1>
                </div>
                <img src={icon} alt="" className="w-20" />
            </div>
            <button
                onClick={handleView}
                className="bg-red-300 px-4 py-2  rounded-xl text-2xl"
            >
                View
            </button>
        </div>
    );
}
