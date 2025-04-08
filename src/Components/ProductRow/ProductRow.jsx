import React from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";

const ProductRow = ({ product }) => {
  console.log(product);
  return (
    <>
      <tr className="sora">
        <td className="text-left p-8">
          <img
            className="w-12 h-12 object-cover rounded-lg"
            src={product.image}
            alt=""
          />
        </td>
        <td className="text-left p-8">Vintage Leica M3 Camera</td>
        <td className="text-left p-8">${product.currentBidPrice}</td>
        <td className="text-left p-8">{product.timeLeft}</td>
        <td className="text-left p-8">
          <button className="cursor-pointer">
            <FaHeart className="" />
          </button>
        </td>
      </tr>
    </>
  );
};

export default ProductRow;
