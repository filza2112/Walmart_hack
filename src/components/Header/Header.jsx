import logo from "../../assets/walmartLogo.png";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { allItems } from "../../constants";
import HeaderBottom from "./HeaderBottom";
import { Link, useLoaderData } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAuth, signOut } from "firebase/auth";
import { signoutUser } from "../../redux/walmartSlice";

const Header = () => {
  const auth = getAuth();
  const dispatch = useDispatch();

  const userInfo = useSelector((state) => state.walmartReducer.userInfo);
  const products = useSelector((state) => state.walmartReducer.products);

  const [showAll, setShowAll] = useState(false);
  // console.log(userInfo);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign out successfully");
        dispatch(signoutUser());
      })
      .catch((error) => {
        console.log(error);
      });
  };


  return (
    <div className="w-full sticky top-0 z-50">
      <div className="w-full bg-blue-600 text-white px-4 py-3 flex md:justify-between items-center gap-2 md:gap-4 lgl:gap-2 xl:gap-4">
        {/* Image Part */}
        <Link to="/">
          <div className="headerHover">
            <img className="w-10 mt-2" src={logo} alt="" />
          </div>
        </Link>

        {/* Deliver logo part */}
        <div className="hidden md:inline-flex headerHover">
          <LocationOnOutlinedIcon />
          <p className="text-xs text-lightText font-light flex flex-col">
            Deliver to
            <span className="text-sm font-semibold -mt-1 text-white">
              India
            </span>
          </p>
        </div>

        {/* Search Bar */}
        <div className="hidden lgl:inline-flex h-10 flex-grow relative rounded-md">
          <span
            onClick={() => setShowAll(!showAll)}
            className="w-14 h-full bg-gray-200 hover:bg-gray-300 border-2 cursor-pointer duration-300 text-sm text-amazon_blue font-titleFont flex items-center justify-center rounded-tl-md rounded-bl-md"
          >
            All{" "}
            <span>
              <ArrowDropDownOutlinedIcon />
            </span>
          </span>
          {showAll && (
            <div>
              <ul className="absolute w-56 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden bg-white border-[1px] border-amazon_blue text-black p-2 flex flex-col gap-1 z-50">
                {allItems.map((item) => (
                  <li
                    className="text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200"
                    key={item._id}
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <input
            className="h-full text-base text-amazon_blue flex-grow outline-none border-none px-2"
            type="search"
          />
          <span className="w-12 h-full flex items-center justify-center bg-amazon_yellow hover:bg-[#f3a847] duration-300 text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md">
            <SearchIcon />
          </span>
        </div>
        {/* Sign in logo */}
        <Link to="/signin">
          <div className="flex flex-col items-start justify-center headerHover">
            {userInfo ? (
              <p className="text-sm mdl:text-xs text-lightText">
                {userInfo.userName}
              </p>
            ) : (
              <p className="text-sm mdl:text-xs text-lightText">
                Hello, sign in
              </p>
            )}

            <p className="text-sm font-semibold -mt-1 text-whiteText hidden mdl:inline-flex">
              Accounts & Lists{" "}
              <span>
                <ArrowDropDownOutlinedIcon />
              </span>
            </p>
          </div>
        </Link>
        {/* Orders Logo */}
        <div className="hidden lgl:flex flex-col items-start justify-center headerHover">
          <p className="text-xs text-lightText font-light">Returns</p>
          <p className="text-sm font-semibold -mt-1 text-whiteText">& Orders</p>
        </div>
        {/* Cart Logo */}
        <Link to="/cart">
          <div className="flex items-start justify-center headerHover relative">
            <ShoppingCartIcon />
            <p className="text-xs font-semibold mt-3 text-whiteText">
              Cart{" "}
              <span className="absolute text-xs top-0 left-6 w-4 font-semibold p-1 h-4 bg-[#f3a847] text-amazon_blue rounded-full flex justify-center items-center">
                {products.length > 0 ? products.length : 0}
              </span>
            </p>
          </div>
        </Link>
        {userInfo && (
          <div
            onClick={handleLogout}
            className="flex flex-col justify-center items-center headerHover relative"
          >
            <LogoutIcon />
            <p className="hidden mdl:inline-flex text-xs font-semibold text-whiteText">
              Log out
            </p>
          </div>
        )}
      </div>

      <HeaderBottom />
    </div>
  );
};

export default Header;
