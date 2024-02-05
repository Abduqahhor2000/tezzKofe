
function Header() {
  return (
    <div className="border-b-[1px] border-gray-200">
      <div className="flex justify-between p-5 pb-4 max-w-[540px] mx-auto">
        <div className="flex items-center">
          <img className="rounded-lg w-8 h-8 object-cover" src="/maxfood.png" />
          <span className="pl-3 font-semibold text-xl">Stol-2</span>
        </div>
        <div className="flex items-center">
          <span className="pr-3 text-base text-gray-500">Diyorbek</span>
          <img className="rounded-full w-8 h-8 object-cover" src="/diyorbek.png" />
        </div>
      </div>
    </div>
  );
}

export default Header;
