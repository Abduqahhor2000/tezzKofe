import { IconButton } from "@mui/material";
import ImageDownloader from "./ImageDownloader";
import { useRef, useState } from "react";
import { useDelete } from "../axios/apies";
import { useDispatch, useSelector } from "react-redux";
import { setBasket } from "../store/reducer/alldata";
import { Link } from "react-router-dom";

function ProductCardBasket({ meal }) {
  const [isRemoving, setIsRemoving] = useState(false);
  const [loading, setLoading] = useState(false);
  const basket = useSelector((state) => state.counter.basket);
  const cardRef = useRef(null);
  const dispatch = useDispatch();

//   console.log(meal);
  const removeProduct = () => {
    if(loading) return
    setLoading(true);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useDelete(`/clients/basket/${basket._id}`, {
      data: {
        restaurant: basket.restaurant,
        table: basket.table,
        code: localStorage.getItem("code") || "",
        product: meal?._id,
      },
    })
      .then(({ data }) => {
        setLoading(false);
        setIsRemoving(true);
        setTimeout(() => {
          cardRef.current.remove();
          dispatch(setBasket(data));
        }, 300); // Adjust delay for animation duration
      })
      .catch((e) => {
        setLoading(false);
        console.log(e);
      });
  };

  return (
    <div className="overflow-x-hidden px-4">
      <div
        ref={cardRef}
        className={`p-4 rounded-lg bg-gray-100 flex relative duration-300 mb-4 ${
          isRemoving ? "animate-card-remove" : ""
        } ${loading ? "animate-pulse" : ""}`}
      >
        <IconButton
          onClick={removeProduct}
          sx={{ p: "5px", position: "absolute", top: "12px", right: "12px" }}
        >
          {" "}
          <img src="/x.svg" alt="" className="cursor-pointer" />
        </IconButton>
        <Link to={`/menu/${meal?.product?.category}/${meal.product._id}`}>
          <ImageDownloader
            className="aspect-[1/1] w-20 object-cover rounded-lg"
            url={meal?.product?.photo}
            alt=""
          />
        </Link>

        <div className="flex-grow pl-3 pr-5">
          <Link to={`/menu/${meal?.product?.category}/${meal.product._id}`}>
            <h4 className="font-semibold text-sm pb-2 font-unbounded">
              {meal?.product?.name}
            </h4>
          </Link>
          <p className="text-gray-400 text-[10px] pb-1">
            {meal?.product?.price} uzs
          </p>
          <span className="block text-sm">
            <span className="text-primary">{meal?.quantity} ta:</span>{" "}
            {meal?.price} uzs
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductCardBasket;
