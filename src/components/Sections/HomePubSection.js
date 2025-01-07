const HomePubSection = () => {
    return (
        <div className="py-6 px-3 bg-white">
            <h2 className="text-lg font-medium mb-3 text-gray-600">Yiatou, c'est simple !</h2>
            <ul className="[&>*]:font-medium [&>*]:text-gray-700">
                <ol className="flex gap-2 my-2"><span>1.</span>Cliques sur un article</ol>
                <ol className="flex gap-2 my-2"><span>2.</span>Choisis des critères</ol>
                <ol className="flex gap-2 my-2"><span>3.</span>Saisis tes coordonnées Whatsapp</ol>
                <ol className="flex gap-2 my-2"><span>4.</span>Envoies la commande sur Whatsapp</ol>
            </ul>
        </div>
    );
}

export default HomePubSection;
