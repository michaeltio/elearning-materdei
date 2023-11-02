export default function PrimaryButton({
    className = "",
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={
                `items-center text-center w-full px-4 py-4 bg-primaryBlue border border-transparent rounded-md font-semibold text-sm text-white uppercase tracking-widest hover:bg-secondaryBlue focus:outline-none transition ease-in-out duration-150 ${
                    disabled && "opacity-25"
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
