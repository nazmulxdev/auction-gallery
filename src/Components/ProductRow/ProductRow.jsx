import React from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { ImInsertTemplate } from "react-icons/im";

const ProductRow = ({
  product,
  buttonToast,
  handelFavoriteItems,
  setBidAmount,
  bidAmount,
}) => {
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
            onClick={() => {
              buttonToast();
              handelFavoriteItems(product);
              setBidAmount(bidAmount + product.currentBidPrice);
              product.isTrue = true;
            }}
            disabled={product.isTrue}
            style={{
              cursor: product.isTrue ? "not-allowed" : "pointer",
            }}
          >
            {product.isTrue ? (
              <FaHeart className="text-red-500 text-2xl" />
            ) : (
              <FaRegHeart className="text-2xl" />
            )}
          </button>
        </td>
      </tr>
    </>
  );
};

export default ProductRow;
