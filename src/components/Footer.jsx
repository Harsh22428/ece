import React from "react";
import ReactDOM from "react-dom";

const Footer = () => {
  return (
    <div className="flex flex-col ">
      <footer className="bg-blue-950 text-white py-4 flex flex- h-96">
        <div className="container mx-auto flex justify-between items-center  ">
          {/* Left side: Logo */}
          <div className="flex flex-col items-center justify-center w-96 border-r-2 border-dotted h-full border-white">
            <div>
              <img
                src="./logo.png"
                alt="Organization Logo"
                className="w-18 h-18"
              />
            </div>
            <div>
              <span className="ml-4 text-sm ">
                Kamla Nehru Institute of Technology
              </span>
            </div>
            <div>
              <span className="ml-4  text-sm text-gray-400">
                Sultanpur ,Uttar Pradesh [228001]
              </span>
            </div>
            <br />
            <div className="items-center justify-center flex flex-row gap-2">
              <div>
                <img src="./phone.png" className="h-4 w-4" alt="Phone" />
              </div>
              <div>
                <h3 className="text-gray-400 text-sm">05362 240 454</h3>
              </div>
            </div>
            <div className="items-center justify-center flex flex-row gap-1">
              <div>
                <img src="./mail.png" className="h-4 w-4 " alt="Email" />
              </div>
              <div>
                <a href="mailto:director@knit.ac.in">
                  <h3 className="text-gray-400 text-sm">director@knit.ac.in</h3>
                </a>
              </div>
            </div>
            <div className="items-center justify-center flex flex-row gap-1">
              <div>
                <img src="./web.png" className="h-4 w-4 " alt="Website" />
              </div>
              <div>
                <a href="https://knit.ac.in/">
                  <h3 className="text-gray-400 text-sm">www.knit.ac.in</h3>
                </a>
              </div>
            </div>
          </div>

          {/* Right side: Links */}
          <div className="flex flex-grow flex-row space-x-3 ml-3  h-full">
            <div className="border-2 px-16 ">
              <h1 className="text-sm font-bold mt-2">Quick Links</h1>
              <span className="relative inline-block  left-0 bottom-0 w-8 h-1 bg-red-900"></span>
            </div>
            <div className="px-16 border-2 border-yellow-300 ">
              <h1 className=" text-sm font-bold mt-2">Support</h1>
              <span className="relative inline-block  left-0 bottom-0 w-8 h-1 bg-red-900"></span>
            </div>
            <div className="px-16 border-2 border-yellow-300 ">
              <h1 className=" text-sm font-bold mt-2">Policies</h1>
              <span className="relative inline-block  left-0 bottom-0 w-8 h-1 bg-red-900"></span>
            </div>
            {/* <div className=" flex items-center justify-center border-4 border-gray-200 shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.1638849969067!2d82.07974147512485!3d26.288786686625578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399a7c86d691219f%3A0x99a3eb1e7c07f78f!2sKamla%20Nehru%20Institute%20of%20Technology%2C%20Sultanpur%20(U.P.)!5e0!3m2!1sen!2sin!4v1726995332530!5m2!1sen!2sin"
                width="400"
                height="300"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div> */}
          </div>
        </div>
      </footer>
      <div className="w-full h-10 bg-blue-900 items-center justify-center">
        <h4 className="text-gray-400 text-center mt-2">
          © Kamla Nehru Institute of Technology, Sultanpur (U.P.)
        </h4>
      </div>
    </div>
  );
};

export default Footer;
