import ExtraMenu from "../components/ExtraMenu";
import Header from "../components/Header";
import Meal from "../components/Meal";

function Kits() {
  return (
    <div className="pt-[100px] pb-24 px-4 min-h-screen">
      <div className="fixed top-0 left-0 w-full bg-white z-10">
        <Header />
      </div>

      <div className="max-w-[500px] grid grid-cols-2 gap-4 mx-auto">
        <div className="">
          <Meal />
        </div>
        <div className="">
          <Meal />
        </div>
        <div className="">
          <Meal />
        </div>
        <div className="">
          <Meal />
        </div>
      </div>

      <div className="fixed bottom-0 left-0 w-full bg-white">
        <ExtraMenu />
      </div>
    </div>
  );
}

export default Kits;
