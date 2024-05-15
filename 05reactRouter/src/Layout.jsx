import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";


function Layout(){
    return(
        <>
          <Header />
          {/* yeha pe outlet banane se uper or niche ka header and foofer same rahega but jaha outlet hai wo dynamically change hoga */}
          <Outlet /> 
          <Footer />
        </>
    )
}

export default Layout