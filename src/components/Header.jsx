import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import ImageDownloader from "./ImageDownloader";
// import ImageDownloader from "./ImageDownloader";

function Header() {
  const location = useLocation();
  const table = useSelector((state)=> state.counter?.allData)

  // console.log(table);
  return (
    <div className="border-b-[1px] border-gray-200">
      <div className="flex justify-between p-5 pb-4 max-w-[540px] mx-auto">
        <Link to={(() => {
          let path = location.pathname.split("/")
          path.pop()
          return path.join("/")
        })()}>
          <div className="flex items-center">
            <img
              className="rounded-lg w-8 h-8 object-cover"
              src="/maxfood.png"
            />
            <span className="pl-3 font-semibold text-xl">{table?.name}</span>
          </div>
        </Link>

        <div className="flex items-center">
          <span className="pr-3 text-base text-gray-500 text-right">{table?.waiter?.firstName}</span>
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
