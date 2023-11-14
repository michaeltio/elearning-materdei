import { Link, Head } from '@inertiajs/react';
import searchIcon from '../../Icon/search-icon.png';
import imgMapel from '../../Icon/gambar-abstrak.png';
import IconPanah from '../../Icon/panah-kanan.png'
import Footer from '../../Components/Footer'; 

export default function Home(props) {
    const handleButtonClick = () => {
        console.log('Button clicked!');
    };

    const cards = [
        {
            content: "Mtk",
            bgColor: "bg-red-300",
            arrowColor : "bg-red-300",
        },
        {
            content: "IPA",
            bgColor: "bg-yellow-200",
            arrowColor : "bg-yellow-200",
        },
        {
            content: "IPS",
            bgColor: "bg-blue-300",
            arrowColor : "bg-blue-300",
        },
        {
            content: "Bahasa Indonesia",
            bgColor: "bg-red-300",
            arrowColor : "bg-red-300",
        },
        {
            content: "Bahasa Inggris",
            bgColor: "bg-yellow-200",
            arrowColor : "bg-yellow-200",
        },
    ];

    const additionalCards = [
        {
            content: "Biologi",
            bgColor: "bg-blue-300",
            arrowColor : "bg-blue-300",
        },
        {
            content: "Kimia",
            bgColor: "bg-red-300",
            arrowColor : "bg-red-300",
        },
        {
            content: "Sejarah",
            bgColor: "bg-yellow-200",
            arrowColor : "bg-yellow-300",
        },
        {
            content: "Fisika",
            bgColor: "bg-blue-300",
            arrowColor : "bg-blue-300",
        },
        {
            content: "Seni Budaya",
            bgColor: "bg-red-300",
            arrowColor : "bg-red-300",
        },
    ];

    return (
        <div>
            <Head title={props.title} />
            <p className='flex justify-center items-center mt-12 text-black text-2xl '>
                <span className="border-b border-black">{props.description}</span>
            </p>
            <div className="flex flex-col items-center justify-center mt-3 sm:flex-row sm:justify-end">
                <input type="text" placeholder="Search" className="mb-2 sm:mb-0 sm:mr-3 rounded-md" />
                <img src={searchIcon} alt="Search Icon" className="w-5 h-5 mb-2 sm:mb-0 sm:mr-4" />
            </div>

            <div className="flex flex-wrap mt-12">
                {cards.map((card, index) => (
                    <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2 relative">
                        <div className="p-4 rounded-md shadow-md bg-stone-100">
                        <div className={`p-4 rounded-md shadow-md ${card.bgColor}`}>
                            <img src={imgMapel} alt="Image" className="w-16 h-16 m-auto" />
                        </div>
                            <div className="p-2 text-center">
                                <p className="text-gray-600">{card.content}</p>
                            </div>
                        </div>
                        <button className={`absolute bottom-2 right-2 mb-2 mr-2 p-1 ${card.arrowColor} rounded-md border border-stone-200`} onClick={handleButtonClick}>
                            <img src={IconPanah} alt="Image" className="w-4 h-4 m-auto" />
                        </button>
                    </div>
                ))}
            </div>
            
            <div className="flex flex-wrap mt-12">
                {additionalCards.map((card, index) => (
                    <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2 relative">
                        <div className="p-4 rounded-md shadow-md bg-stone-100">
                            <div className={`p-4 rounded-md shadow-md ${card.bgColor}`}>
                                <img src={imgMapel} alt="Image" className="w-16 h-16 m-auto" />
                            </div>
                            <div className="p-2 text-center">
                                <p className="text-gray-600">{card.content}</p>
                            </div>
                        </div>
                        <button className={`absolute bottom-2 right-2 mb-2 mr-2 p-1 ${card.arrowColor} rounded-md border border-stone-200`} onClick={handleButtonClick}>
                            <img src={IconPanah} alt="Image" className="w-4 h-4 m-auto" />
                        </button>
                    </div>
                ))}
            </div>
            <Footer/>
        </div>
    );
}