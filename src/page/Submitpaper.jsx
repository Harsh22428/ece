// import React, { useRef } from 'react';
// import gsap from 'gsap';
// import { useGSAP } from '@gsap/react';
// import Footer from '../components/Footer';

// export default function Submitpaper() {
//   const main = useRef();
//   return (
//     <>
//     <div className="relative min-h-screen">
//       <div className="bg-white text-black  absolute inset-0 flex items-center ">
//         ijfbg;oadfng'olbfgoi'adbnoiafdh'agiuorheignrl
//       </div>

//     </div>
//       <Footer className="mt-10" />
//     </>
//   );
// }

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const SubmitPaper = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-4 py-8"
      >
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
          <div
            className="bg-cover bg-center h-64 flex items-center justify-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80')",
            }}
          >
            <div className="bg-black bg-opacity-50 w-full h-full flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                  Submit Paper Submission
                </h1>
                <p className="text-xl text-white">
                  Share your groundbreaking ideas with the world
                </p>
              </div>
            </div>
          </div>

          <div className="p-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-100 rounded-lg p-6 mb-8"
            >
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Submission Guidelines
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Ensure your paper adheres to the specified format</li>
                <li>Include all necessary citations and references</li>
                <li>Proofread your work before submission</li>
                <li>Submit only original and unpublished research</li>
              </ul>
            </motion.div>

            {isLoaded ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLScYs9tQRjRmzHc9l2TglYIEP2dEKCgPQ_6eYvS0kxI_cEqsBA/viewform?embedded=true"
                  width="640"
                  height="705"
                  frameborder="0"
                  marginheight="0"
                  marginwidth="0"
                >
                  Loading…
                </iframe>
              </motion.div>
            ) : (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
              </div>
            )}
          </div>

          <div className="bg-gray-100 p-6 mt-8">
            <p className="text-center text-gray-600">
              Thank you for contributing to the advancement of knowledge in our
              field. Your submission is greatly appreciated!
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SubmitPaper;
