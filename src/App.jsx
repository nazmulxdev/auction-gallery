import "./App.css";
import Swal from "sweetalert2";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import NavBar from "./Components/NavBar/NavBar";

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
    </>
  );
}

export default App;
