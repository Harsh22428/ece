import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";

import { TransitionProvider } from "../context/TransitionContext";
import TransitionComponent from "../components/Transition";

import Home from "../page/Home";
import About from "../page/About";
import Committee from "../page/Committee";
import Contact from "../page/Contact";
import Submitpaper from "../page/Submitpaper";

const Router = () => {
  return (
    <TransitionProvider>
      <Routes>
        <Route
          index
          element={
            <TransitionComponent>
              <Home />
             </TransitionComponent>
          }
        />
        <Route path="/about" element={<TransitionComponent><About /></TransitionComponent> } />
        <Route path="/contact" element={<TransitionComponent><Contact /></TransitionComponent>} />
        <Route path="/submitpaper" element={<TransitionComponent><Submitpaper /></TransitionComponent>} />
        <Route path="/committee" element={<TransitionComponent><Committee /></TransitionComponent>} />
      </Routes>
     </TransitionProvider> 
  );
};

export default Router;
