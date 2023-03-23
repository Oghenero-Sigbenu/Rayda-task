import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

function Cards({ item }) {
  return (
    <Card className=" w-[98%] md:w-[47%] lg:w-[22.5%] p-2 mb-6">
      <CardContent className=" mx-auto bg-[#F2F4F7]">
        <CardMedia
          component="img"
          alt="product name"
          sx={{ width: 100 }}
          className="mx-auto "
          src={item?.image}
        />
      </CardContent>
      <CardContent className="flex">
        <Typography
          gutterBottom
          variant="p"
          className="rounded-[50%] bg-[#F2F4F7] font-medium w-5 h-5 p-2 text-[#475467] "
          component="div"
          mr={1}
          ml={-2}
        >
          {item?.name?.split(" ")[0][0] + item?.name?.split(" ")[1][0]}
        </Typography>
        <Typography
          variant="p"
          component="div"
          className="font-semibold  py-2 text-[#475467]"
        >
          {item?.name}
        </Typography>
        <Typography
          variant="p"
          component="div"
          className="font-base py-2 text-[#98A2B3]"
        >
          (Highest Bidder)
        </Typography>
      </CardContent>
      <CardContent>
        <Typography
          gutterBottom
          ml={-2}
          mb={4}
          variant="p"
          className="font-semibold   text-[#101828] "
          component="div"
        >
          {" "}
          {item?.title}
        </Typography>
        <Typography
          gutterBottom
          variant="p"
          className="font-base   text-[#344054] "
          component="div"
          ml={-2}
          mt={2}
        >
          Current Bid: <strong className="text-[#101828]">{item?.bid}</strong>
        </Typography>
      </CardContent>
      <hr></hr>
      <div className="mt-4 w-full">
        <button className="border-[#D0D5DD] w-full text-white cursor-pointer   bg-[#004CCC] rounded-md border-[.5px] px-3 py-3">
          Add to wishlist
        </button>
      </div>
    </Card>
  );
}

export default Cards;
