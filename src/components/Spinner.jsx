import React, { useEffect, useState } from "react";
import logo1 from "/logo.png";
import logo2 from "/logo4.png";
import logo3 from "/logo5.png"; // Add more logos as needed

const logos = [logo1, logo2, logo3]; // Array of logos

const Spinner = () => {
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);

  useEffect(() => {
    // Set an interval to cycle through logos
    const intervalId = setInterval(() => {
      setCurrentLogoIndex((prevIndex) => (prevIndex + 1) % logos.length);
    }, 1000); // Change logo every 1 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="spinner flex flex-col justify-center items-center h-screen bg-[url('')]">
      <div className="animate-fade">
        <img
          src={logos[currentLogoIndex]}
          alt="Loading..."
          className="spinner-logo w-[100px] h-[100px] "
        />
      </div>
      <div>
        <h1 className="font-bold  mt-1 text-2xl text-black">
          KAMLA NEHRU INSTITUTE OF TECHNOLOGY
        </h1>
      </div>
    </div>
  );
};

export default Spinner;
