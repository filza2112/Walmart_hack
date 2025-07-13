
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/walmartSlice";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Product = ({ item }) => {
  const dispatch = useDispatch();

  if (!item) {
    return null;
  }

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: item.id, // Use id instead of _id
        title: item.title,
        image: item.thumbnail,
        price: item.price,
        quantity: 1,
        description: item.description,
      })
    );
  };

  return (
    <div className="w-full relative group border border-gray-200 rounded-md overflow-hidden">
        <div className="w-full h-64 relative cursor-pointer overflow-hidden">
            <img
            className="w-full h-full object-cover group-hover:scale-110 duration-200"
            src={item.thumbnail}
            alt={item.title}
            />
        </div>
        <div className="w-full border-t-[1px] px-2 py-4">
            <div className="flex justify-between items-center">
            <h2 className="font-titleFont text-base font-bold">
                {item.title.length > 20 ? item.title.substring(0, 20) + "..." : item.title}
            </h2>
            </div>
            <p>${item.price}</p>
            <button
            onClick={handleAddToCart}
            className="w-full py-1.5 rounded-md mt-3 font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200 border border-yellow-500 hover:border-yellow-700 hover:from-yellow-300 to-yellow-400 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200"
            >
            Add to Cart
            </button>
        </div>
    </div>
  );
};

export default Product;