import FavoriteItemRow from "../FavoriteItemRow/FavoriteItemRow";

const FavoriteItemList = ({ favoriteItem,setTotalPrice,handelFavoriteList,handelBidAmount,handelHeartButton,deletedToast }) => {
  return (
    <>
      <>
        {favoriteItem.length ? (
          favoriteItem.map((favItem) => (
            <FavoriteItemRow
              key={favItem.id}
              favItem={favItem}
              setTotalPrice={setTotalPrice}
              handelFavoriteList={handelFavoriteList}
              deletedToast={deletedToast}
              handelBidAmount={handelBidAmount}
              handelHeartButton={handelHeartButton}
            ></FavoriteItemRow>
          ))
        ) : (
          <tr>
            <td colSpan={2} className="text-center p-8">
              <h1 className="text-2xl font-medium mb-6">No favorites yet</h1>
              <p className="text-lg font-normal">
                Click the heart icon on any item <br /> to add it to your
                favorites
              </p>
            </td>
          </tr>
        )}
      </>
    </>
  );
};

export default FavoriteItemList;
