// import { useState } from 'react'
import { Button } from "@mui/material";
import "./App.css";
import bell from "./assets/bell.svg";
import bell_green from "./assets/bell_green.svg";
import ExtraMenu from "./components/ExtraMenu";
import Header from "./components/Header";
import { usePost } from "./axios/apies";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import socket from "./socket";
import { setAllData } from "./store/reducer/alldata";

function Home() {
  const allData = useSelector((state) => state.counter.allData);
  const [loading, setLoading] = useState(false);
  const [puls, setPuls] = useState(false);
  const dispatch = useDispatch()

  useEffect(() => {
    getStatusWaiter()

    console.log("salom");
    socket.on("connect", () => {
      console.log("Connected to server!");
    });

    return () => socket.disconnect(); // Disconnect on unmount
  }, []);

  function getStatusWaiter () {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    usePost(`/tables/code/${localStorage.getItem("table_id") || ""}`, {code: localStorage.getItem("code") || ""}).then(({data})=>{
      dispatch(setAllData(data))
    }).catch((e)=>console.log(e))
  }

  function callWaiterReq() {
    let code = "";
    if (localStorage.getItem("code") && !loading) {
      code = localStorage.getItem("code");
    } else {
      console.log("401!");
      return;
    }
    setLoading(true);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    usePost(`/tables/call/${allData._id}`, { code })
      .then((data) => {
        // console.log(data);
        setLoading(false);
        setPuls(true);
        setTimeout(() => setPuls(false), 15000);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  }

  return (
    <div className=" flex justify-center items-center flex-col pt-[70px] pb-24 min-h-screen">
      <div className="fixed top-0 left-0 w-full bg-white z-10">
        <Header />
      </div>
      <div className="w-80 min-h-80 rounded-lg bg-light p-4 pt-3">
        <div className="mb-6">
          <div className="mb-4 text-[32px] leading-10 text-black text-center font-semibold font-unbounded">
            Afitsant chaqirish
          </div>
          <div className="flex justify-center min-h-32">
            {/* <div className=" max-h-min"> */}
            <img
              className={`border-2 border-transparent m-2 rounded-[42px] ${
                allData.call === "calling" || puls ? "animate-pulsar" : ""
              }`}
              src={allData.call === "accpted" ? bell_green : bell}
              alt=""
            />
            {/* </div> */}
          </div>
        </div>
        <Button
          onClick={callWaiterReq}
          variant="contained"
          color="primary"
          className="!py-4 !px-3 w-full !shadow-none !rounded-2xl text-center !text-base !text-white"
        >
          Chaqirish
        </Button>
      </div>
      <div className="fixed bottom-0 left-0 w-full bg-white">
        <ExtraMenu />
      </div>
    </div>
  );
}

export default Home;
