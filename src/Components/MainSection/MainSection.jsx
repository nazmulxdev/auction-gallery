import React from "react";
import ProductTable from "../ProductTable/ProductTable";

const MainSection = ({
  allProducts,
  buttonToast,
  deletedToast,
  handelFavoriteItems,
  favoriteItem,
  handelFavoriteList
}) => {
  return (
    <div className="sora bg-[#EBF0F5] px-36 py-36">
      <h1 className="mb-5 font-medium text-[#0E2954] text-3xl">
        Active Auction
      </h1>
      <p className="font-normal text-xl text-black mb-8">
        Discover and bid on extraordinary items
      </p>
      <ProductTable
        allProducts={allProducts}
        buttonToast={buttonToast}
        deletedToast={deletedToast}
        handelFavoriteItems={handelFavoriteItems}
        favoriteItem={favoriteItem}
        handelFavoriteList={handelFavoriteList}
      ></ProductTable>
    </div>
  );
};

export default MainSection;
