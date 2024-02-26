import Header from "../components/Header";
import ExtraMenu from "../components/ExtraMenu";
import Kits from "../components/Kit";
import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
import { useGet } from "../axios/apies";
import { useDispatch, useSelector } from "react-redux";
import { setMenus, setProducts } from "../store/reducer/alldata";

function Menu() {
  const table = useSelector((state) => state.counter?.allData);
  const menus = useSelector((state) => state.counter?.menus)
  const dispatch = useDispatch();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useGet(`/categories?restaurant=${table?.restaurant}`).then(({ data }) => {
      dispatch(setMenus(data));
      dispatch(setProducts(data));
      // console.log(data);
    });
  }, []);

  return (
    <div className="items-center flex-col pt-[100px] pb-24 px-4 min-h-screen">
      <div className="fixed top-0 left-0 w-full bg-white z-10">
        <Header title={"Menu"} />
      </div>

      <div className="max-w-[500px] mx-auto">
        {menus.map((item) => {
          return <Kits key={item._id} data={item} />;
        })}
      </div>

      <div className="fixed bottom-0 left-0 w-full bg-white">
        <ExtraMenu />
      </div>
    </div>
  );
}

export default Menu;
