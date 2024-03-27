import { useEffect, useState } from "react";
import ExtraMenu from "../components/ExtraMenu";
import Header from "../components/Header";
import Meal from "../components/Meal";
import { useParams } from "react-router-dom";
import { useGet } from "../axios/apies";
import { useSelector } from "react-redux";

function Kits() {
  const params = useParams();
  const menus = useSelector((state) => state.allData.menus);
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   // eslint-disable-next-line react-hooks/rules-of-hooks
  //   useGet(`/products?menu_id=${params.kit_id}`).then(({ data }) => {
  //     setProducts(data); console.log(data);
  //   });
  // }, []);

  // console.log(menus);

  return (
    <div className="pt-[100px] pb-24 px-4 min-h-screen">
      <div className="fixed top-0 left-0 w-full bg-white z-10">
        <Header title={menus.find((item)=>item._id === params.kit_id).name || null} back={true} />
      </div>

      <div className="max-w-[500px] grid grid-cols-2 gap-4 mx-auto">
        {menus.map((item) => {
          if (item._id != params.kit_id) {
            return null;
          }
          return item.products.map((product) => {
            if(!product.available){
              return null
            }
            return (
              <>
                <Meal data={product} />
              </>
            );
          });
        })}
      </div>

      <div className="fixed bottom-0 left-0 w-full bg-white">
        <ExtraMenu />
      </div>
    </div>
  );
}

export default Kits;
