import { logo, indFlag } from "../../assets/index";

const FooterMiddle = () => {
  return (
    <div className="w-full bg-blue-100">
      <div className="w-full flex gap-6 items-center justify-center py-6">
        <div>
          <img className="w-10 " src={logo} alt="logo" />
        </div>
        <div className="flex gap-2">
          <p className="flex text-black gap-1 items-center justify-center border border-gray-500 hover:border-amazon_yellow cursor-pointer duration-200 px-2 py-1">
            English
          </p>
        </div>
        <div className="flex gap-1 items-center justify-center border border-gray-500 hover:border-amazon_yellow cursor-pointer duration-200 px-2 py-1">
          <img className="w-6" src={indFlag} alt="flagImg" />
          <p className="text-black">India</p>
        </div>
      </div>
    </div>
  );
};

export default FooterMiddle;
