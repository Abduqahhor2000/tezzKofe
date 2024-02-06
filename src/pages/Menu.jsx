import Header from "../components/Header";
import ExtraMenu from "../components/ExtraMenu";
import Kits from "../components/Kit";
import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
import { useGet } from "../axios/apies";

function Menu() {
  const [menu, setMenu] = useState([])
  useEffect(()=>{
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useGet("/menu/all").then(({data})=> {
      setMenu(data.data)
    })
  },[])

  return (
    <div className=" flex items-center flex-col pt-[100px] pb-24 px-4 min-h-screen">
      <div className="fixed top-0 left-0 w-full bg-white z-10">
        <Header />
      </div>

      <div className="max-w-[500px]">
        {
          menu.map((item)=>{
            return<><Kits data={item} /></>
          })
        }
       
      </div>

      <div className="fixed bottom-0 left-0 w-full bg-white">
        <ExtraMenu />
      </div>
    </div>
  );
}

export default Menu;
