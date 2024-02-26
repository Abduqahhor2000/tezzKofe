import Header from "../components/Header";
import ExtraMenu from "../components/ExtraMenu";
import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
import { useGet, usePost } from "../axios/apies";
import { useDispatch, useSelector } from "react-redux";
import { setBasket } from "../store/reducer/alldata";
import ProductCardBasket from "../components/ProductCardBasket";
import { Button } from "@mui/material";

function Basket() {
  const table = useSelector((state) => state.counter?.allData);
  const basket = useSelector((state) => state.counter?.basket);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  //   console.log(basket);

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
        // console.log(data);
      })
      .catch((e) => console.log(e));
  }, []);

  function orderWithBasket() {
    setLoading(true);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    usePost("/clients/orders", {
      restaurant: basket?.restaurant,
      table: basket?.table,
      code: localStorage.getItem("code") || "",
    })
      .then(({ data }) => {
        dispatch(setBasket({}))
        console.log(data);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  }

  return (
    <div className="items-center flex-col pt-[100px] pb-24 min-h-screen">
      <div className="fixed top-0 left-0 w-full bg-white z-10">
        <Header title={"Savat"} />
      </div>

      <div className="max-w-[500px] mx-auto grid grid-cols-1">
        {basket &&
          basket?.products?.map((item) => {
            return <ProductCardBasket meal={item} key={item._id} />;
          })}
      </div>

      <div className="fixed bottom-0 left-0 w-full bg-white">
        {basket.totalPrice ? (
          <div className="mx-auto max-w-[500px] px-4 pt-2.5 pb-5">
            <Button
              onClick={orderWithBasket}
              type="submit"
              variant="contained"
              disabled={loading}
              color="primary"
              className="!py-3 !px-4 w-full !shadow-none !rounded-lg text-center !text-base !leading-5 !text-white !normal-case"
            >
              {basket?.totalPrice} so`m
            </Button>
          </div>
        ) : null}

        <ExtraMenu />
      </div>
    </div>
  );
}

export default Basket;
