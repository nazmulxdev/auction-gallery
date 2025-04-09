import React, { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";

const ProductRow = ({
  product,
  buttonToast,
  handelFavoriteItems,
  setBidAmount,
  bidAmount,
}) => {
  // console.log(product);
  const [itemClick, setItemClick] = useState(false);
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
              handelFavoriteItems(product);
              buttonToast();
              setItemClick(true);
              setBidAmount(bidAmount + product.currentBidPrice);
            }}
            style={{
              cursor: itemClick ? "not-allowed" : "pointer",
            }}
            disabled={itemClick}
          >
            {itemClick ? (
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
