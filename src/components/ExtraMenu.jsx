import home_def from "./../assets/home_def.svg"
import hisob_def from "./../assets/hisob_def.svg"

function ExtraMenu() {
  return (
    <div className="pt-3 px-6 pb-8 border-t-[1px] border-gray-200">
      <div className="flex justify-between max-w-[500px] mx-auto">
        <div className="flex flex-col items-center">
            <img src={home_def} alt="" />
            <p className="text-xs text-gray-500 font-displey m-0 pt-0.5">Bosh sahifa</p>
        </div>
        <div className="py-2.5 px-6 text-lg font-semibold bg-gray-200 rounded-xl text-primary">
            <span>Menu</span>
        </div>
        <div className="flex flex-col items-center min-w-16">
            <img src={hisob_def} alt="" />
            <p className="text-xs text-gray-500 font-displey">Hisob</p>
        </div>
      </div>
    </div>
  );
}

export default ExtraMenu;
