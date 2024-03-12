import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingBasket } from "@mui/icons-material";
import { useEffect } from "react";
// import ImageDownloader from "./ImageDownloader";

function Header({ title, back = false }) {
  const table = useSelector((state) => state.counter?.allData);
  const basket = useSelector((state) => state.counter?.basket);
  const allData = useSelector((state) => state.counter?.allData);
  const navigate = useNavigate();

  useEffect(() => {
    if (!allData._id) {
      navigate(
        localStorage.getItem("table_id")
          ? `/connect/${localStorage.getItem("table_id")}`
          : "/404"
      );
    }
  }, []);

  console.log(basket);
  return (
    <div className="border-b-[1px] border-gray-200">
      <div className="flex justify-between p-2 pb-1 px-3 max-w-[540px] mx-auto">
        <div
          onClick={() => (back ? navigate(-1) : null)}
          className={`flex items-center w-6/12 ${
            back ? "cursor-pointer" : null
          }`}
        >
          <img
            className="rounded-lg w-8 h-8 object-cover"
            src={back ? "/backarrow.svg" : "/maxfood.png"}
          />
          <span className="pl-3 font-semibold text-xl truncate">
            {title || table?.name}
          </span>
        </div>

        <Link to="/basket">
          <div className="flex flex-col items-center min-w-16 relative">
            {basket?.products?.length > 0 ? (
              <span className="absolute flex h-2 w-2 top-0 right-5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
            ) : null}
            <ShoppingBasket />

            {/* <ShoppingBasketOutlined /> */}

            <p className={`text-xs text-gray-500 font-displey`}>Savat</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
