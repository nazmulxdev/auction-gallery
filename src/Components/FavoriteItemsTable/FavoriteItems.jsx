import React from "react";

const FavoriteItems = ({ favoriteItem }) => {
  console.log(favoriteItem);
  return (
    <>
      <tr>
        <td colSpan={2} className="text-center p-8">
          <h1 className="text-2xl font-medium mb-6">No favorites yet</h1>
          <p className="text-lg font-normal">
            Click the heart icon on any item <br /> to add it to your favorites
          </p>
        </td>
      </tr>
      <tr>
        <td className="text-left p-8">Total bids Amount</td>
        <td className="text-left p-8">$0000</td>
      </tr>
    </>
  );
};

export default FavoriteItems;
