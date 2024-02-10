import { Button } from "@mui/material";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGet } from "../axios/apies";

function Product() {
  const [amount, setAmount] = useState(1)
  const params = useParams()
  const [product, setProduct] = useState({})

  useEffect(()=>{
   // eslint-disable-next-line react-hooks/rules-of-hooks
   useGet("/products/" + params.item_id).then(({data})=> {
    setProduct(data); console.log(data);
   })
  }, [])

  return (
    <div className="pt-24">
      <div className="fixed top-0 left-0 w-full bg-white z-10">
        <Header />
      </div>
      <div className="pb-3 max-w-[500px] mx-auto px-3">
        <img
          className="aspect-[1.7/1] w-full object-cover rounded-xl mb-3"
          src={product?.image}
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
            <div onClick={() => setAmount(amount > 1 ? amount - 1 : 1 )} className="bg-light p-4 pt-0 pb-4 rounded-xl cursor-pointer">_</div>
            <div className="text-base text-black px-4 font-semibold">{amount}</div>
            <div onClick={() => setAmount(amount > 32 ? 33 : amount + 1 )} className="bg-light p-5 py-2 rounded-xl font-semibold cursor-pointer">+</div>
          </div>
          <Button
            variant="contained"
            color="primary"
            className="!py-2.5 !px-3 !w-full !shadow-none !rounded-2xl text-center !text-base !font-semibold !text-white !lowercase"
          >
            {amount * 72000} so`m
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Product;
