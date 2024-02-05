import Header from "../components/Header";
import ExtraMenu from "../components/ExtraMenu";
import Kits from "../components/Kit";

function Menu() {
  return (
    <div className=" flex items-center flex-col pt-[100px] pb-24 px-4 min-h-screen">
      <div className="fixed top-0 left-0 w-full bg-white z-10">
        <Header />
      </div>

      <div className="max-w-[500px]">
        <Kits />
        <Kits />
        <Kits />
        <Kits />
      </div>

      <div className="fixed bottom-0 left-0 w-full bg-white">
        <ExtraMenu />
      </div>
    </div>
  );
}

export default Menu;
