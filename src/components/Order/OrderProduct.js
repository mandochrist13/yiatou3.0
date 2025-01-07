import { IoImage } from "react-icons/io5";

const OrderProduct = ({ bgColor, name, price }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className={`${bgColor} w-[45px] h-[45px] rounded flex justify-center items-center`}>
          <IoImage className="w-5 h-5"/>
        </div>
        <p className="text-sm">{name}</p>
      </div>
      <p className="text-sm">{price.toLocaleString()} FCFA</p>
    </div>
  );
};

export default OrderProduct; 