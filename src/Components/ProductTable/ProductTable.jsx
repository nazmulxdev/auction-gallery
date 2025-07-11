import React, { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import ProductRow from "../ProductRow/ProductRow";
import FavoriteItems from "../FavoriteItemsTable/FavoriteItems";
const ProductTable = ({
  allProducts,
  buttonToast,
  deletedToast,
  handelFavoriteItems,
  favoriteItem,
  handelFavoriteList,
}) => {
  const [bidAmount, setBidAmount] = useState(0.0);
  const handelBidAmount = (itemAmount) => {
    setBidAmount(bidAmount - itemAmount);
  };
  const [deletedItem, setDeletedItem] = useState([]);
  const handelHeartButton = (itemDeleted) => {
    setDeletedItem([...deletedItem, itemDeleted]);
  };
  return (
    <div className="grid grid-cols-3 gap-6 items-start">
      <div className="col-span-2 bg-white rounded-2xl">
        <table className="w-full divide-y divide-gray-300">
          <thead className="">
            <tr>
              <th className="text-left p-8">Items</th>
              <th className="text-left p-8">Current Bid</th>
              <th className="text-left p-8">Time Left</th>
              <th className="text-left p-8">Bid Now</th>
            </tr>
          </thead>
          <tbody className="w-full divide-y divide-gray-300">
            {allProducts.map((product) => (
              <ProductRow
                key={product.id}
                product={product}
                buttonToast={buttonToast}
                handelFavoriteItems={handelFavoriteItems}
                setBidAmount={setBidAmount}
                bidAmount={bidAmount}
                deletedItem={deletedItem}
              ></ProductRow>
            ))}
          </tbody>
        </table>
      </div>
      <div className="bg-white rounded-2xl">
        <table className="w-full divide-y divide-gray-300">
          <thead className="">
            <tr>
              <th colSpan={2} className="p-8 text-[#0E2954]">
                <FaRegHeart className="inline-block text-2xl" /> Favorite Items
              </th>
            </tr>
          </thead>
          <tbody className="w-full divide-y divide-gray-300">
            <FavoriteItems
              favoriteItem={favoriteItem}
              bidAmount={bidAmount}
              deletedToast={deletedToast}
              handelFavoriteList={handelFavoriteList}
              handelBidAmount={handelBidAmount}
              handelHeartButton={handelHeartButton}
            ></FavoriteItems>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTable;
