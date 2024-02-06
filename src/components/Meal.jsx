import { Link } from "react-router-dom";

function Meal({ data }) {
  return (
    <div className="pb-3">
      <Link to={data._id}>
        <img
          className="aspect-[1/1] w-full object-cover rounded-xl mb-3"
          src={"http://45.132.106.225:1000/" + data?.image}
          alt=""
        />
        <div className="text-lg font-semibold mb-1">{data.title}</div>
        <div className="flex justify-between items-end">
          <div className="text-red-500 text-sm font-semibold">
            {data.price} uzs
          </div>
          {/* <div className="line-through text-gray-400 text-[10px]">546 000 uzs</div> */}
        </div>
      </Link>
    </div>
  );
}

export default Meal;
