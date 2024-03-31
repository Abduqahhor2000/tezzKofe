import { useEffect, useState } from "react";
import CardMeal from "../components/CardMeal";
import ExtraMenu from "../components/ExtraMenu";
import Header from "../components/Header";
import { useGet } from "../axios/apies";
import { useSelector } from "react-redux";

function Purchases() {
  const table = useSelector((state) => state.allData.allData);
  const [purchs, setPurchs] = useState(null);

  useEffect(() => {
    getOrders();
  }, []);

  function getOrders() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useGet(
      `/clients/orders?restaurant=${table.restaurant._id}&table=${
        table._id
      }&code=${localStorage.getItem("code") || ""}`
    )
      .then(({ data }) => {
        setPurchs(data);
        console.log(data);
      })
      .catch((e) => console.log(e));
  }

  return (
    <div className="pt-[100px] pb-32 px-4 min-h-screen">
      <div className="fixed top-0 left-0 w-full bg-white z-10">
        <Header title={"Hisob"} />
      </div>
      {/* {purchs?.activeOrder?.products?.length > 0 ? (
        <div className="max-w-[500px] mx-auto pl-1">
          Ofisiant qabul qilishi kutilmoqda...
        </div>
      ) : null} */}
      <div className="max-w-[500px] mx-auto grid grid-cols-1 gap-5">
        {purchs?.activeOrder?.products?.map((purch) => {
          return <CardMeal isActive={true} meal={purch} key={purch._id} />;
        })}
        {purchs?.order?.products?.map((purch) => {
          return <CardMeal meal={purch} key={purch._id} />;
        })}
      </div>

      <div className="fixed bottom-0 left-0 w-full bg-white">
        <ExtraMenu />
      </div>
    </div>
  );
}

export default Purchases;
