import FavoriteItemList from "../FavoriteItemList/FavoriteItemList";

const FavoriteItems = ({
  favoriteItem,
  bidAmount,
  handelFavoriteList,
  handelBidAmount,
  handelHeartButton
}) => {

  return (
    <>
      <>
        <FavoriteItemList
          favoriteItem={favoriteItem}
          handelFavoriteList={handelFavoriteList}
          handelBidAmount={handelBidAmount}
          handelHeartButton={handelHeartButton}
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
