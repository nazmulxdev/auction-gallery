import React from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import ProductRow from "../ProductRow/ProductRow";
const ProductTable = ({ allProducts }) => {
  console.log(allProducts);
  return (
    <div className="grid grid-cols-3 gap-6 items-start">
      <div className="col-span-2 bg-white rounded-2xl">
        <table className="w-full divide-y divide-gray-300">
          <thead className="">
            <tr>
              <th className="text-left p-8">Items</th>
              <th className="text-left p-8">Time Left</th>
              <th className="text-left p-8">Current Bid</th>
              <th className="text-left p-8">Bid Now</th>
            </tr>
          </thead>
          <tbody className="w-full divide-y divide-gray-300">
            {allProducts.map((product) => (
              <ProductRow key={product.id} product={product}></ProductRow>
            ))}
          </tbody>
        </table>
      </div>
      <div className="bg-white rounded-2xl">
        <h1></h1>
      </div>
    </div>
  );
};

export default ProductTable;
