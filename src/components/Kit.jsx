import { Link } from "react-router-dom";
import ImageDownloader from "./ImageDownloader";

function Kit({ data }) {
  return (
    <div className="min-w-full relative mb-3 border-b-[1px] border-gray-200">
      <Link to={"/menu/"+data._id}>
        <ImageDownloader
          className="w-full aspect-[2/1] object-cover rounded-xl mb-2"
          url={data?.photo}
          alt=""
        />
        <div className="text-2xl pb-2 font-semibold text-start font-unbounded">
          {data.name}
        </div>
      </Link>
    </div>
  );
}

export default Kit;
