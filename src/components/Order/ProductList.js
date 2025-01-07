import OrderProduct from './OrderProduct';

const ProductList = ({ products }) => {
  return (
    <div className="flex flex-col gap-2">
      {products.map((product, index) => (
        <OrderProduct
          key={product.id}
          bgColor={index % 2 === 0 ? "bg-green-400" : "bg-orange-300"}
          name={product.name}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default ProductList; 