import { Typography } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Cards from "./Cards";

function ProductCards() {
  return (
    <Card className="p-4 mt-[3rem] mx-auto">
      <CardContent className="flex justify-between ">
        <Typography variant="h6" component="h6">
          Featured Items
        </Typography>
        <button className="border-[#D0D5DD] cursor-pointer flex items-center text-[.9rem] text-[#344054] bg-transparent rounded-md border-[.5px] px-1 py-1 md:px-3 md:py-2">
          View Auction
        </button>
      </CardContent>
      <hr></hr>
      <CardContent className="flex justify-between">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </CardContent>
    </Card>
  );
}

export default ProductCards;
