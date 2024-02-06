import CardMeal from "../components/CardMeal";
import ExtraMenu from "../components/ExtraMenu";
import Header from "../components/Header";

function Purchases() {
  return (
    <div className="pt-[100px] pb-32 px-4 min-h-screen">
      <div className="fixed top-0 left-0 w-full bg-white z-10">
        <Header />
      </div>

      <div className="max-w-[500px] mx-auto grid grid-cols-1 gap-5">
        <CardMeal />
        <CardMeal />
        <CardMeal />
        <CardMeal />
      </div>

      <div className="fixed bottom-0 left-0 w-full bg-white">
        <ExtraMenu />
      </div>
    </div>
  );
}

export default Purchases;
