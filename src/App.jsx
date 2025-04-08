import "./App.css";
import Swal from "sweetalert2";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import NavBar from "./Components/NavBar/NavBar";
import HeroSection from "./Components/HeroSection/HeroSection";
import MainSection from "./Components/MainSection/MainSection";
import FooterSection from "./Components/Footer/FooterSection";
import { use, useEffect, useState } from "react";

// custom sweet alert
// const Toast = Swal.mixin({
//   toast: true,
//   position: "top-end",
//   showConfirmButton: false,
//   timer: 3000,
//   timerProgressBar: true,
//   customClass: {
//     timerProgressBar: "rainbow-bar",
//   },
//   didOpen: (toast) => {
//     toast.onmouseenter = Swal.stopTimer;
//     toast.onmouseleave = Swal.resumeTimer;
//   },
// });
// Toast.fire({
//   icon: "success",
//   title: "Item Added to your Favorite Lists",
//   showCloseButton: true,
// });

// heart icon
{
  /* <FaHeart className="text-red-500"/> */
}

function App() {
  const [allProducts, setAllProduct] = useState([]);

  useEffect(() => {
    const auctionProduct = async () => {
      const res = await fetch("auctions.json");
      const data = await res.json();
      return setAllProduct(data);
    };

    auctionProduct();
  }, []);
  return (
    <>
      <NavBar></NavBar>
      <HeroSection></HeroSection>
      <MainSection allProducts={allProducts}></MainSection>
      <FooterSection></FooterSection>
    </>
  );
}

export default App;
