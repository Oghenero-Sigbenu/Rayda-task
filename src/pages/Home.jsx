import React from "react";
import { Banner, Navbar, ProductCards } from "../components";

function Home() {
  return (
    <div className="w-[96%] mx-auto bg-[#FCFCFD]">
      <Navbar />
      <hr className="mb-6"></hr>
      <Banner />
      <ProductCards />
    </div>
  );
}

export default Home;
