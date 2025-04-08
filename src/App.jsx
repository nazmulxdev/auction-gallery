import "./App.css";
import Swal from "sweetalert2";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import NavBar from "./Components/NavBar/NavBar";
import HeroSection from "./Components/HeroSection/HeroSection";
import MainSection from "./Components/MainSection/MainSection";
import FooterSection from "./Components/Footer/FooterSection";

// custom sweet alert
// Swal.fire({
//   position: "top-end",
//   icon: "success",
//   title: "Your work has been saved",
//   showConfirmButton: false,
//   timer: 1500
// });

// heart icon
{
  /* <FaHeart className="text-red-500"/> */
}

function App() {
  return (
    <>
      <NavBar></NavBar>
      <HeroSection></HeroSection>
      <MainSection></MainSection>
      <FooterSection></FooterSection>
    </>
  );
}

export default App;
