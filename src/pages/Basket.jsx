import Header from "../components/Header";
import ExtraMenu from "../components/ExtraMenu";
import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
import { useGet } from "../axios/apies";
import { useDispatch, useSelector } from "react-redux";
import { setBasket } from "../store/reducer/alldata";
import CardMeal from "../components/CardMeal";

function Basket() {
  const table = useSelector((state) => state.counter?.allData);
  const basket = useSelector((state) => state.counter?.basket);
  const dispatch = useDispatch();

  console.log(basket);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useGet(
      `/clients/basket?restaurant=${table.restaurant}&table=${
        table._id
      }&code=${localStorage.getItem("code")}`
    )
      .then(({ data }) => {
        dispatch(setBasket(data));
        //   dispatch(setProducts(data));
        console.log(data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="items-center flex-col pt-[100px] pb-24 px-4 min-h-screen">
      <div className="fixed top-0 left-0 w-full bg-white z-10">
        <Header />
      </div>

      <div className="max-w-[500px] mx-auto grid grid-cols-1 gap-5">
        {basket && basket?.products?.map((item) => {
          return <CardMeal meal={item} key={item._id} />;
        })}
      </div>

      <div className="fixed bottom-0 left-0 w-full bg-white">
        <ExtraMenu />
      </div>
    </div>
  );
}

export default Basket;
