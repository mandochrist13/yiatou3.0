const FormButton = ({children}) => {
    return (
        <button className="px-3 py-2 rounded bg-blue-800 text-white w-full font-medium">
            {children}
        </button>
    );
}

export default FormButton;
