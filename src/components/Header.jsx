import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ImageDownloader from "./ImageDownloader";
// import ImageDownloader from "./ImageDownloader";

function Header({title}) {
  const table = useSelector((state) => state.counter?.allData);
  const navigate = useNavigate()

  // console.log(table);
  return (
    <div className="border-b-[1px] border-gray-200">
      <div className="flex justify-between p-5 pb-4 max-w-[540px] mx-auto">
        <div onClick={()=> navigate(-1)} className="flex items-center cursor-pointer w-6/12">
          <img className="rounded-lg w-8 h-8 object-cover" src="/maxfood.png" />
          <span className="pl-3 font-semibold text-xl truncate">{title || table?.name}</span>
        </div>

        <div className="flex items-center justify-end flex-grow w-6/12">
          <span className="pr-3 text-base text-gray-500 text-right truncate">
            {table?.waiter?.firstName}
          </span>
          <ImageDownloader
            className="rounded-full w-8 h-8 object-cover"
            url={table?.waiter?.avatar}
            // src="/diyorbek.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
