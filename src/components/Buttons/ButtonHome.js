const ButtonHome = ({children,icon = null,data=""}) => {
    return (
        <button className="grid gap-2 text-[#333333] font-klavika-medium text-left grid-cols-[50px_1fr] w-full h-[50px]">
            <span className="h-full flex justify-center items-center text-2xl">{icon}</span>
            <span className="h-full py-2 grid grid-rows-2">
                <span className="text-[12px]">{children}</span>
                <span className="text-[12px]">{data}</span>
            </span>
        </button>
    );
}

export default ButtonHome;
