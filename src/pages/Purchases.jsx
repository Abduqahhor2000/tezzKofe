import { useEffect } from "react";
import CardMeal from "../components/CardMeal";
import ExtraMenu from "../components/ExtraMenu";
import Header from "../components/Header";
import { useGet } from "../axios/apies";
import { useSelector } from "react-redux";

function Purchases() {
  const table = useSelector((state) => state.counter.allData);

  useEffect(() => {
    getOrders();
  }, []);

  function getOrders() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useGet(
      `/clients/orders?restaurant=${table.restaurant}&table=${table._id}&code=${
        localStorage.getItem("code") || ""
      }`
    )
      .then((data) => {
        console.log(data);
      })
      .catch((e) => console.log(e));
  }

  return (
    <div className="pt-[100px] pb-32 px-4 min-h-screen">
      <div className="fixed top-0 left-0 w-full bg-white z-10">
        <Header />
      </div>

      <div className="max-w-[500px] mx-auto grid grid-cols-1 gap-5">
        <CardMeal />
        <CardMeal />
        <CardMeal />
      </div>

      <div className="fixed bottom-0 left-0 w-full bg-white">
        <ExtraMenu />
      </div>
    </div>
  );
}

export default Purchases;
