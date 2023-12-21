import { Link } from "@inertiajs/react";
import Abstract from "/public/Assets/abstract.png";
import Arrow from "/public/Assets/right-arrow.svg";
export default function SubjectCard({
    index,
    user,
    bgColor,
    content,
    arrowColor,
    dynamic,
    classId,
}) {
    console.log(classId);
    return (
        <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2 relative"
        >
            <div className="p-2 rounded-md shadow-md bg-stone-100">
                <div className={`p-4 rounded-md shadow-md ${bgColor}`}>
                    <img
                        src={Abstract}
                        alt="Image"
                        className="w-16 h-16 m-auto"
                    />
                </div>
                <div className="p-2 text-center">
                    <p className="text-gray-600">
                        {content.subjectName}
                        <br />({content.subjectId})
                    </p>
                </div>
            </div>
            {user.user_details.role === "admin" && (
                <>
                    <Link
                        className={`absolute bottom-2 right-2 mb-2 mr-2 p-1 ${arrowColor} rounded-md border border-stone-200`}
                        href={route("adminSubject", {
                            subjectId: dynamic.subjectId,
                        })}
                    >
                        <img className="w-4" src={Arrow} alt="" />
                    </Link>
                    <Link
                        className={`absolute bottom-2 left-2 mb-2 ml-2 p-1 ${arrowColor} rounded-md border border-stone-200`}
                        href={route("adminSubject", {

                        href={route("adminEditSubject", {
                            classId: classId,

                        href={route("adminEditSubject", {
                            //edit
                            subjectId: dynamic.subjectId,
                        })}
                    >
                        <img className="w-4" src={Arrow} alt="" />
                    </Link>
                </>
            )}
            {user.user_details.role === "teacher" && (
                <Link
                    className={`absolute bottom-2 right-2 mb-2 mr-2 p-1 ${arrowColor} rounded-md border border-stone-200`}
                    href={route("teacherSubject", {
                        subjectId: dynamic.subjectId,
                    })}
                >
                    <img className="w-4" src={Arrow} alt="" />
                </Link>
            )}
            {user.user_details.role === "student" && (
                <Link
                    className={`absolute bottom-2 right-2 mb-2 mr-2 p-1 ${arrowColor} rounded-md border border-stone-200`}
                    href={route("studentSubject", {
                        subjectId: dynamic.subjectId,
                    })}
                >
                    <img className="w-4" src={Arrow} alt="" />
                </Link>
            )}
        </div>
    );
}
