type MagicButtonProps = {
    title: string;
    icon?: React.ReactNode;
    position?: "left" | "right";
    handleClick?: () => void;
    otherClasses?: string;
    asChild?: boolean;
};

export const MagicButton = ({
    title,
    icon,
    position,
    handleClick,
    otherClasses,
    asChild = false,
}: MagicButtonProps) => {
    return (
        <button
            className={`relative inline-flex h-12 w-full overflow-hidden rounded-lg p-[1px] focus:outline-none md:w-60 ${!asChild && "md:mt-10"}`}
            onClick={handleClick}
            tabIndex={asChild ? -1 : undefined}
        >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#0E4979_0%,#7CA1FF_50%,#0E4979_100%)]" />
            <span
                className={`inline-flex h-full w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-blue-200 px-7 text-sm font-medium text-white backdrop-blur-3xl ${otherClasses}`}
            >
                {position === "left" && icon}
                {title}
                {position === "right" && icon}
            </span>
        </button>
    );
};
