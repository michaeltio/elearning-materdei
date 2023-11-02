import { forwardRef, useEffect, useRef } from "react";

export default forwardRef(function TextInput(
    { type = "text", className = "", isFocused = false, ...props },
    ref
) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    let icon = "";

    if (type == "email") {
        icon = "personicon.svg";
    } else {
        icon = "lockicon.svg";
    }

    return (
        <>
            <div className="absolute bg-lightGray rounded-md">
                <div className="w-12 py-2 px-2 flex justify-center">
                    <img src={`/SVGicons/${icon}`} />
                </div>
            </div>
            <input
                {...props}
                type={type}
                className={"border-gray-300 rounded-md shadow-sm" + className}
                ref={input}
            />
        </>
    );
});
