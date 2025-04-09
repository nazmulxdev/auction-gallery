import React, { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { ImInsertTemplate } from "react-icons/im";

const ProductRow = ({
  product,
  buttonToast,
  handelFavoriteItems,
  setBidAmount,
  bidAmount,
  // deletedItemId,
  // deletedItem,
}) => {
  const [btnClicked, setBtnClicked] = useState(false);

  // const [bidButtonId, setBidButtonId] = useState(0);
  // useEffect(() => {
  //   const productDeleted = deletedItem.includes(product);
  //   setBtnClicked(productDeleted);
  // }, [deletedItem, bidButtonId]);
  // console.log(deletedItemId);
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
              setBidAmount(bidAmount + product.currentBidPrice);
              // setBidButtonId(product.id);
              setBtnClicked(true);
            }}
            disabled={btnClicked}
            style={{
              cursor: btnClicked ? "not-allowed" : "pointer",
            }}
          >
            {btnClicked ? (
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
