import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const FavoriteItemRow = ({
  favItem,
  handelFavoriteList,
  handelBidAmount,
  handelHeartButton,
}) => {
  const { id, title, currentBidPrice, bidsCount, image } = favItem;
  const [clickedCrossButton, setClickedCrossButton] = useState(false);
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
              setClickedCrossButton(true);
              handelBidAmount(currentBidPrice);
              handelHeartButton({ id, clickedCrossButton });
            }}
            className="cursor-pointer hover:text-red-500"
          >
            <RxCross2 className="text-2xl" />
          </button>
        </td>
      </tr>
    </>
  );
};

export default FavoriteItemRow;
