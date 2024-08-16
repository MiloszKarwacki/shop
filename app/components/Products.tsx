import React from "react";

interface ProductProps {
  name: string;
  price: number;
  image: string;
}

const Product: React.FC<ProductProps> = ({ name, price, image }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md hover:scale-110 duration-300">
      <img src={image} alt={name} className="w-full h-32 object-cover mb-2" />
      <h2 className="text-lg font-bold">{name}</h2>
      <p className="text-gray-700">${price.toFixed(2)}</p>
    </div>
  );
};

export default Product;
