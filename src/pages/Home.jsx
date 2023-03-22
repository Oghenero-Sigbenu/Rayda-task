import React from "react";
import { Banner, Navbar } from "../components";

function Home() {
  return (
    <div className="w-[96%] mx-auto bg-[#FCFCFD]">
      <Navbar />
      <Banner />
    </div>
  );
}

export default Home;
