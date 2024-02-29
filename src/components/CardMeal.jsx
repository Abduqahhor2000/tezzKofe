import ImageDownloader from "./ImageDownloader";

function CardMeal({ meal }) {
  return (
    <div className="p-4 rounded-lg bg-gray-100 flex">
      <ImageDownloader
        className="aspect-[1/1] w-20 object-cover"
        url={meal?.product?.photo}
        alt=""
      />
      <div className="flex-grow pl-3">
        <h4 className="font-semibold text-sm pb-2 font-unbounded">{meal?.product?.name}</h4>
        <p className="text-gray-400 text-[10px] pb-1">
          {meal?.product?.price} uzs
        </p>
        <span className="block text-sm">
          <span className="text-primary">{meal?.quantity} ta:</span>{" "}
          {meal?.price} uzs
        </span>
      </div>
    </div>
  );
}

export default CardMeal;
