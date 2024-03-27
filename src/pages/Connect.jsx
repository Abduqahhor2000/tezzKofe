import { useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { setAllData } from "../store/reducer/alldata";
import { Button } from "@mui/material";
// import ExtraMenu from "../components/ExtraMenu";
import BaseInput from "../components/BaseInput";
import { usePost } from "../axios/apies";

export default function Connect() {
  const [code, setCode] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  // console.log(params);

  useEffect(() => {}, []);

  function getToken(e) {
    e.preventDefault();

    if (code.split("").find((item) => /^[a-zA-Z]*$/.test(item))) {
      console.log();
    } else {
      setError("Kamida 1ta harfdan foydalaning.");
      return;
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    usePost(`/tables/code/${params.table_id}`, { code })
      .then(({ data }) => {
        dispatch(setAllData(data));
        localStorage.setItem("code", code);
        localStorage.setItem("table_id", params.table_id);
        navigate("/");
      })
      .catch((e) => {
        console.log(e);
        setCode("");
        setError("Tastiqlash kodi xato.");
      });
  }

  // console.log(code.split("").find((item) => /^[a-zA-Z]*$/.test(item)));

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-80 min-h-60 rounded-xl bg-light p-4 py-6">
        <div className="flex justify-between mb-7">
          <div className="flex items-center">
            <span className="block h-3 w-3 rounded-full bg-green-500 mr-1.5"></span>
            <span className="text-2xl leading-6 font-semibold">
              Stolni band qilish
            </span>
          </div>
          {/* <IconButton>
                <img
                  src="/x.svg"
                  alt=""
                  className="cursor-pointer"
                />
              </IconButton> */}
        </div>
        <div className="font-bold text-base leading-5 mb-3">
        Himoya kalitini yarating yoki mavjud kalitni kiriting!
        </div>
        <form onSubmit={getToken}>
          <BaseInput
            value={code}
            error={error ? true : false}
            onFocus={() => setError("")}
            onChange={(e) => {
              setCode(e.target.value.length > 4 ? code : e.target.value);
            }}
            required
            placeholder={"1234"}
          />
          {error ? (
            <div className="text-red-500">{error}</div>
          ) : (
            <div className="select-none text-transparent">|</div>
          )}
          <Button
            type="submit"
            variant="contained"
            disabled={code.length == 4 ? false : true}
            color="primary"
            className="!py-3 !px-4 !mt-1 w-full !shadow-none !rounded-lg text-center !text-base !leading-5 !text-white !normal-case"
          >
            Kirish
          </Button>
        </form>
      </div>
    </div>
  );
}
