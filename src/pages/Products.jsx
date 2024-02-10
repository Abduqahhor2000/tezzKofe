import { useEffect, useState } from "react";
import ExtraMenu from "../components/ExtraMenu";
import Header from "../components/Header";
import Meal from "../components/Meal";
import { useParams } from "react-router-dom";
import { useGet } from "../axios/apies";

function Kits() {
  const params = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useGet(`/products?menu_id=${params.kit_id}`).then(({ data }) => {
      setProducts(data); console.log(data);
    });
  }, []);

  return (
    <div className="pt-[100px] pb-24 px-4 min-h-screen">
      <div className="fixed top-0 left-0 w-full bg-white z-10">
        <Header />
      </div>

      <div className="max-w-[500px] grid grid-cols-2 gap-4 mx-auto">
        {products.map((item) => {
          return (
            <>
              <Meal data={item} />
            </>
          );
        })}
      </div>

      <div className="fixed bottom-0 left-0 w-full bg-white">
        <ExtraMenu />
      </div>
    </div>
  );
}

export default Kits;
