const BulletList = ({ items }) => {
    return (
        <ul className="list-disc pl-4 space-y-2 text-gray-600">
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
}

export default BulletList; 