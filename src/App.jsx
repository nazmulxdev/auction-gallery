import "./App.css";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import NavBar from "./Components/NavBar/NavBar";
import HeroSection from "./Components/HeroSection/HeroSection";
import MainSection from "./Components/MainSection/MainSection";
import FooterSection from "./Components/Footer/FooterSection";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify/unstyled";
import { Bounce } from "react-toastify";

function App() {
  const [allProducts, setAllProduct] = useState([]);

  const [favoriteItem, setFavoriteItem] = useState([]);

  useEffect(() => {
    const auctionProduct = async () => {
      const res = await fetch("auctions.json");
      const data = await res.json();
      return setAllProduct(data);
    };

    auctionProduct();
  }, []);

  const handelFavoriteItems = (item) => {
    setFavoriteItem([...favoriteItem, item]);
  };
  const buttonToast = () => {
    toast("🦄 Item Added to your Favorite Lists", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  const handelFavoriteList = (id) => {
    const deletedItems = favoriteItem.filter(
      (finalItems) => finalItems.id !== id
    );
    setFavoriteItem(deletedItems);
  };
  return (
    <>
      <NavBar></NavBar>
      <HeroSection></HeroSection>
      <MainSection
        allProducts={allProducts}
        buttonToast={buttonToast}
        handelFavoriteItems={handelFavoriteItems}
        favoriteItem={favoriteItem}
        handelFavoriteList={handelFavoriteList}
      ></MainSection>
      <FooterSection></FooterSection>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
