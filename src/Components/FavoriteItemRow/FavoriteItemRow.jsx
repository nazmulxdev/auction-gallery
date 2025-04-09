import React from "react";
import { RxCross2 } from "react-icons/rx";

const FavoriteItemRow = ({ favItem, handelFavoriteList, handelBidAmount }) => {
  const {
    id,
    title,
    description,
    currentBidPrice,
    timeLedt,
    bidsCount,
    image,
  } = favItem;
  return (
    <>
      <tr>
        <td className="text-left p-6 flex items-center gap-2.5">
          <img className="w-24 h-24 object-cover" src={image} alt="" />
          <p className="text-[#0E2954] font-normal text-lg">
            {title} <br /> ${currentBidPrice}{" "}
            <span className="ml-2">Bids : {bidsCount}</span>
          </p>
        </td>
        <td className="text-left p-6">
          <button
            onClick={() => {
              handelFavoriteList(id);
              handelBidAmount(currentBidPrice);
            }}
            className="cursor-pointer"
          >
            <RxCross2 className="text-2xl" />
          </button>
        </td>
      </tr>
    </>
  );
};

export default FavoriteItemRow;
