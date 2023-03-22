import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import BannerImage from "../assests/banner1.png";
import Logo from "../assests/task-logo.png";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";

function Banner() {
  return (
    <Card className="p-4  mx-auto">
      <CardMedia
        component="img"
        className="rounded-[10px] h-[150px] lg:h-auto"
        src={BannerImage}
        title="Image Banner "
      />
      <CardContent className="flex ">
        <CardContent className="-mt-[3.5rem] md:-mt-[6rem] -ml-4 md:0  w-[25%] md:w-auto">
          <CardMedia
            component="img"
            className="contain "
            src={Logo}
            title="Image Banner "
          />
        </CardContent>
        <CardContent className="flex justify-between  w-[90%] ">
          <div className=" ">
            <p className="text-[.7rem] -ml-9 font-semibold md:text-2xl -mt-5 md:-mt-2 md:-ml-3">
              {" "}
              Starts in: 3 days : 2 hours : 24 minutes
            </p>
            <div className="hidden md:flex -ml-9   md:-ml-4  md:-mt-5 ">
              <div className="flex bg-[#FFFAEB] px-3 py-1 text-[.8rem] mr-4 items-center  rounded-[10px] ">
                <span className="bg-[#F79009]  w-1 h-1 rounded-[50%] mr-2 "></span>
                <span className="text-[#B54708]  "> Not Live</span>
              </div>
              <span>Layers Auction</span>
            </div>
          </div>
          <div className="-mt-5 md:-mt-2  -mr-8">
            <button className="border-[#D0D5DD] cursor-pointer flex items-center text-[.6rem] md:text-[.8rem] text-[#344054] bg-transparent rounded-md border-[.5px] px-1 py-1 md:px-3 md:py-2">
              <ThumbUpOffAltIcon className="pr-1 hidden md:block" /> Accept
              Invite
            </button>
          </div>
        </CardContent>
      </CardContent>
    </Card>
  );
}

export default Banner;
