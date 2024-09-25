// // src/components/Navbar.jsx
// import React from "react";
// import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";
// // import logo from "./public/logo.png";

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);

//   // Detects scroll position and updates the navbar's background color
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setIsScrolled(true); // Change to solid background when scrolled
//       } else {
//         setIsScrolled(false); // Transparent background at the top
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);
//   return (
//     <div
//       className={`w-full ${
//         isScrolled
//           ? "fixed bg-violet-950 top-0"
//           : "absolute bg-transparent mt-28"
//       } transition-colors duration-600 ease-in-out z-20`}
//     >
//       <nav className="p-4  ">
//         {/* Logo */}
//         <div
//           className={`flex absolute p-4 rounded-full ml-[100px] ${
//             isScrolled
//               ? "bg-violet-950 opacity-100 transition-opacity duration-600 ease-in-out"
//               : "bg-transparent opacity-0"
//           }`}
//         >
//           <img
//             src="./logo.png"
//             alt="Logo"
//             className="w-16 h-16 object-contain rounded-full"
//           />
//         </div>

//         {/* Navigation Links */}
//         <div className="container flex">
//           <ul
//             className={`flex items-center gap-8 ml-[70%] w-full ${
//               isScrolled
//                 ? "opacity-100 translate-x-0 transition-transform duration-500 ease-out"
//                 : "opacity-100 -translate-x-full transition-all duration-500 ease-in"
//             }`}
//           >
//             <li>
//               <a className="text-white hover:text-pink-400 transition duration-300">
//                 <Link to="/">Home</Link>
//               </a>
//             </li>
//             <li>
//               <a className="text-white hover:text-pink-400 transition duration-300">
//                 <Link to="/submitpaper"> Submit Paper</Link>
//               </a>
//             </li>
//             <li>
//               <a className="text-white hover:text-pink-400 transition duration-300">
//                 <Link to="/about">About</Link>
//               </a>
//             </li>
//             <li>
//               <a className="text-white hover:text-pink-400 transition duration-300">
//                 <Link to="/contact">Contact Us</Link>
//               </a>
//             </li>
//             <div
//               className={`text-white ml-10 ${
//                 isScrolled
//                   ? "opacity-100 translate-x-0 transition-transform duration-500 ease-out"
//                   : "opacity-100 -translate-x-full transition-all duration-500 ease-in"
//               }`}
//             >
//               <button className="hover:text-pink-400 transition duration-300 w-8 h-8 rounded-full ">
//                 <img src="./search.png" alt="Search" className="w-8 h-8 " />
//               </button>
//             </div>
//           </ul>
//           {/* Search Icon */}
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;

// src/components/Navbar.jsx
import React from "react";
import { BrowserRouter, useNavigate, Link } from "react-router-dom";
import { Routes, Router, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "../page/Home";
import About from "../page/About";
import Contact from "../page/Contact";
import Submitpaper from "../page/Submitpaper";
import Commitee from "../page/Committee";
// import logo from "./public/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Detects scroll position and updates the navbar's background color
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true); // Change to solid background when scrolled
      } else {
        setIsScrolled(false); // Transparent background at the top
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div
        className={`w-full  ${
          isScrolled
            ? "fixed bg-blue-950 text-center top-0 h-20 mr-72 py-4"
            : "absolute bg-transparent mt-36 h-20  "
        } transition-colors duration-600 ease-in-out z-20`}
      >
        <nav className="  ">
          {/* Logo */}
          <div
            className={`flex absolute p-3 rounded-full ml-[100px] ${
              isScrolled
                ? "bg-blue-950 opacity-100 transition-opacity duration-600 ease-in-out"
                : "bg-transparent opacity-0"
            }`}
          >
            <img
              src="./logo.png"
              alt="Logo"
              className="  object-contain rounded-full mt-1"
            />
          </div>

          {/* Navigation Links */}
          <div className="container flex justify-center font-custom">
            <div
              className={`flex items-center gap-8 px-8 py-2  rounded-full ${
                isScrolled
                  ? "opacity-100 transition-opacity duration-500 ease-out"
                  : "bg-blue-950 opacity-100 transition-opacity duration-500 ease-in-out"
              }`}
            >
              <ul className="flex items-center gap-8">
                <li>
                  <Link
                    to="/"
                    onClick={() => {
                      if (window.location.pathname === "/") {
                        window.location.reload();
                      } else {
                        window.location.href = "/";
                      }
                    }}
                    className="text-white hover:text-yellow-300 transition duration-300"
                  >
                    Home
                  </Link>
                </li>

                <li className="text-white hover:text-yellow-300 transition duration-300">
                  <Link to="submitpaper">Submit Paper</Link>
                </li>
                <li className="text-white hover:text-yellow-300 transition duration-300">
                  <Link to="/about">About us</Link>
                </li>
                <li className="text-white hover:text-yellow-300 transition duration-300">
                  <Link to="/contact">Contact Us</Link>
                </li>
                <li className="text-white hover:text-yellow-300 transition duration-300">
                  <Link to="/committee">Committee</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
