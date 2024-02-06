import home_def from "./../assets/home_def.svg";
import home_active from "./../assets/home_aktiv.svg";
import hisob_def from "./../assets/hisob_def.svg";
import hisob_active from "./../assets/hisob_active.svg";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function ExtraMenu() {
  const [direct, setDirect] = useState("/iiii");
  const location = useLocation();

  useEffect(() => {
    setDirect(location.pathname.split("/")[1]);
  }, [location.pathname]);
  return (
    <div className="pt-3 px-6 pb-8 border-t-[1px] border-gray-200">
      <div className="flex justify-between max-w-[500px] mx-auto">
        <Link to="/">
          <div className="flex flex-col items-center">
            <img src={ direct === "" ? home_active : home_def} className={direct === "" ? "mt-[3px] mb-[2px]" : ""} alt="" />
            <p className={`text-xs text-gray-500 font-displey m-0 pt-0.5 ${direct === "" ? "text-primary font-semibold" : ""}`}>
              Bosh sahifa
            </p>
          </div>
        </Link>
        <Link to="/menu">
          <div className={`py-2.5 px-6 text-lg font-semibold bg-gray-200 rounded-xl text-primary duration-200 ${direct === "menu" ? "text-white bg-primary" : ""}`}>
            <span>Menu</span>
          </div>
        </Link>
        <Link to="/purchases">
          <div className="flex flex-col items-center min-w-16">
            <img src={direct === "purchases" ? hisob_active : hisob_def} alt="" />
            <p className={`text-xs text-gray-500 font-displey ${direct === "purchases" ? "text-primary font-semibold" : ""}`}>Hisob</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ExtraMenu;
