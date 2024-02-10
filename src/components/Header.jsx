import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  console.log(location);
  return (
    <div className="border-b-[1px] border-gray-200">
      <div className="flex justify-between p-5 pb-4 max-w-[540px] mx-auto">
        <Link to={(() => {
          let path = location.pathname.split("/")
          path.pop()
          return path.join("/")
        })()}>
          <div className="flex items-center">
          <span className="pr-1 font-semibold text-xl">{`<`} </span>
            <img
              className="rounded-lg w-8 h-8 object-cover"
              src="/maxfood.png"
            />
            <span className="pl-3 font-semibold text-xl">Stol-2</span>
          </div>
        </Link>

        <div className="flex items-center">
          <span className="pr-3 text-base text-gray-500">Diyorbek</span>
          <img
            className="rounded-full w-8 h-8 object-cover"
            src="/diyorbek.png"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
