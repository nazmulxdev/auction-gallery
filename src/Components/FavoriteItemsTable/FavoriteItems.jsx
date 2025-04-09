import React, { use, useState } from "react";
import FavoriteItemList from "../FavoriteItemList/FavoriteItemList";

const FavoriteItems = ({
  favoriteItem,
  bidAmount,
  handelFavoriteList,
  handelBidAmount,
}) => {
  // const [totalPrice, setTotalPrice] = useState(0.0);

  return (
    <>
      <>
        <FavoriteItemList
          favoriteItem={favoriteItem}
          // setTotalPrice={setTotalPrice}
          handelFavoriteList={handelFavoriteList}
          handelBidAmount={handelBidAmount}
        ></FavoriteItemList>
      </>
      <tr>
        <td className="text-left p-8">Total bids Amount</td>
        <td className="text-left p-8">${bidAmount}</td>
      </tr>
    </>
  );
};

export default FavoriteItems;
