import React from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";

const ProductRow = ({ product, buttonToast, handelFavoriteItems }) => {
  // console.log(product);
  return (
    <>
      <tr className="sora">
        <td className="text-left p-8 flex items-center gap-2.5">
          <img
            className="w-12 h-12 object-cover rounded-lg"
            src={product.image}
            alt=""
          />{" "}
          {product.title}
        </td>
        <td className="text-left p-8">${product.currentBidPrice}</td>
        <td className="text-left p-8">{product.timeLeft}</td>
        <td className="text-left p-8">
          <button
            className="cursor-pointer"
            onClick={() => {
              handelFavoriteItems(product);
              buttonToast();
            }}
          >
            <FaHeart className="" />
          </button>
        </td>
      </tr>
    </>
  );
};

export default ProductRow;
