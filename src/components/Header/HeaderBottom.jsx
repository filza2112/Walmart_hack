import { useEffect, useRef, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { motion } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SideNavContent from "./SideNavContent";
import { useSelector } from "react-redux";

const HeaderBottom = () => {
  const ref = useRef();
  const userInfo = useSelector((state) => state.walmartReducer.userInfo);

  const [sideBar, setSidebar] = useState(false);

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (e.target.contains(ref.current)) {
        setSidebar(false);
      }
    });
  }, [ref]);
  return (
    <div className="w-full px-4 h-[36px] bg-blue-100 text-white flex items-center">
      {/* Items list */}
      <ul className="flex items-center gap-2 text-sm tracking-wide">
        <li
          onClick={() => setSidebar(!sideBar)}
          className="headerHover text-gray-600 flex items-center gap-1"
        >
          <MenuIcon />
          All
        </li>
        <li className="headerHover hidden md:inline-flex text-gray-600">Today's Deals</li>
        <li className="headerHover hidden md:inline-flex text-gray-600">Customer Service</li>
        <li className="headerHover hidden md:inline-flex text-gray-600">Gift Cards</li>
        <li className="headerHover hidden md:inline-flex text-gray-600">Registry</li>
        <li className="headerHover hidden md:inline-flex text-gray-600">Sell</li>
      </ul>
      {/* sideNavbar */}

      {sideBar && (
        <div className="w-full h-screen text-black fixed top-0 left-0 bg-black bg-opacity-50">
          <div className="w-full h-full relative">
            <motion.div
              ref={ref}
              initial={{ x: -500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-[80%] md:w-[350px] h-full bg-white border border-black"
            >
              <div className="w-full bg-blue-500 text-white py-2 px-6 flex items-center gap-4">
                <AccountCircleIcon />
               {
                userInfo ? (
                  <h3 className="font-titleFont font-bold text-lg tracking-wide">
                  {userInfo.userName}
                </h3>
                ):(
                  <h3 className="font-titleFont font-bold text-lg tracking-wide">
                  Hello, Sign In
                </h3>
                )
               }
              </div>
              <SideNavContent
                title="Purchase History"
                one="Returns and Order"
                two="Help"
                three="List"
              />
           
              <span
                onClick={() => setSidebar(false)}
                className="cursor-pointer absolute top-0 left-[82%] md:left-[360px] w-10 h-10 text-black flex items-center justify-center border bg-gray-200 hover:bg-red-500 hover:text-white duration-300"
              >
                {" "}
                <CloseIcon />{" "}
              </span>{" "}
            </motion.div>{" "}
          </div>{" "}
        </div>
      )}
    </div>
  );
};

export default HeaderBottom;
