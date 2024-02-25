import { Button } from "@mui/material";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGet, usePost } from "../axios/apies";
import { useSelector } from "react-redux";
import ImageDownloader from "../components/ImageDownloader";

function Product() {
  const params = useParams();
  const navigate = useNavigate()
  const [amount, setAmount] = useState(1);
  const [product, setProduct] = useState({});
  const products = useSelector((state) => state.counter.products);
  const allData = useSelector((state) => state.counter.allData);
  const [loading, setLoading] = useState(false);

  console.log(allData);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    if (products.length > 0) {
      setProduct(products.find((item) => item._id === params.item_id));
    }
  }, [products]);

  function addProductToBasket() {
    setLoading(true);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    usePost("/clients/basket", {
      restaurant: product?.restaurant,
      table: allData._id,
      code: localStorage.getItem("code") || "",
      product: product._id,
      quantity: amount,
    })
      .then((data) => {
        console.log(data);
        setLoading(false);
        navigate(-1)
      })
      .catch((e) => {
        console.log(e);
        setLoading(false)
      });
  }

  return (
    <div className="pt-24">
      <div className="fixed top-0 left-0 w-full bg-white z-10">
        <Header />
      </div>
      <div className="pb-3 max-w-[500px] mx-auto px-3">
        <ImageDownloader
          className="aspect-[1.7/1] w-full object-cover rounded-xl mb-3"
          url={product?.photo}
          alt=""
        />
        <div className="text-xl font-semibold mb-1">{product.name}</div>
        <div className="flex justify-start items-end pb-6">
          <div className="text-red-500 text-sm font-semibold pr-4">
            {product.price} uzs
          </div>
          {/* <div className="line-through text-gray-400 text-[10px]">
            546 000 uzs
          </div> */}
        </div>
        <div className="border-t-[1px] border-gray-200">
          {product.description}
        </div>
      </div>
      <div className="p-3 fixed w-full bottom-0 bg-white border-t-[1px] border-gray-200 flex justify-center">
        <div className="relative w-full max-w-[500px]">
          <div className="absolute -top-[90px] right-0 flex items-center text-xl text-primary bg-white rounded-xl select-none">
            <div
              onClick={() => setAmount(amount > 1 ? amount - 1 : 1)}
              className="bg-light p-4 pt-0 pb-4 rounded-xl cursor-pointer"
            >
              _
            </div>
            <div className="text-base text-black px-4 font-semibold">
              {amount}
            </div>
            <div
              onClick={() => setAmount(amount > 32 ? 33 : amount + 1)}
              className="bg-light p-5 py-2 rounded-xl font-semibold cursor-pointer"
            >
              +
            </div>
          </div>
          <Button
            variant="contained"
            color="primary"
            disabled={loading}
            onClick={addProductToBasket}
            className="!py-2.5 !px-3 !w-full !shadow-none !rounded-2xl text-center !text-base !font-semibold !text-white !lowercase"
          >
            {amount * product.price} so`m
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Product;
