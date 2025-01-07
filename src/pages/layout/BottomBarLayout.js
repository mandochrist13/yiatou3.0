const BottomBarLayout = ({className,children}) => {
    return (
        <div>
            <div className={`h-[60px] ${className}`}></div>
            <div className="fixed z-50 bottom-0 w-full bg-white left-0">
                <div className="w-full min-h-[60px] shadow-2xl max-w-[650px] mx-auto flex justify-center items-center">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default BottomBarLayout;