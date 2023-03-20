import React from "react";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
function Navbar() {
  return (
    <div className="flex justify-between items-center py-4 px-2">
      <div>
        <h3 className="text-[#101828]">Welcome</h3>
        <p className="-mt-4 text-[.9rem] text-[#475467]">
          Your current sales auction and activity.
        </p>
      </div>
      <div className="relative">
        <NotificationsNoneIcon className="" />
        <span className="bg-[#F04438] absolute -bottom-1 left-[.9rem] text-white rounded-[50%] text-[.6rem] p-1 w-2  text-center">
          2
        </span>
      </div>
    </div>
  );
}

export default Navbar;
