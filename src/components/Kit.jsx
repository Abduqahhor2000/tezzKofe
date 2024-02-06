import { Link } from "react-router-dom";

function Kit({ data }) {
  return (
    <div className="min-w-full relative mb-3 border-b-[1px] border-gray-200">
      <Link to={"/menu/"+data._id}>
        <img
          className="min-w-full aspect-[2/1] object-cover rounded-xl mb-2"
          src={"http://45.132.106.225:1000/" + data?.image}
          alt=""
        />
        <div className="text-2xl pb-2 font-semibold text-start">
          {data.title}
        </div>
      </Link>
    </div>
  );
}

export default Kit;
