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
import { setAllData } from "./store/reducer/alldata";
import io from "socket.io-client";

function Home() {
  const allData = useSelector((state) => state.counter.allData);
  const [loading, setLoading] = useState(false);
  const [puls, setPuls] = useState(false);
  const dispatch = useDispatch();
  // const yaxmalay = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    getStatusWaiter()
    if (!allData._id) {
      return;
    }

    const socket = io("https://tezzcafe.uz", {
      withCredentials: true,
      autoConnect: true,
      secure: true,
      reconnection: true,
      reconnectionAttempts: Infinity,
      transports: ["websocket"],
      query: {
        table: allData._id,
        restaurant: allData.restaurant,
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZDY1MmNlYzQ0ODVmMjBiZGY1ZDg5OSIsInJvbGUiOiJkaXJlY3RvciIsInJlc3RhdXJhbnQiOiI2NWQ2NTJjZWM0NDg1ZjIwYmRmNWQ4OTciLCJpYXQiOjE3MDk0ODQ1MTUsImV4cCI6MTcwOTY1NzMxNX0.3NOP06BW8gRmL4Drmxb2XpeHuS0VTWGUgQVFKY4_Lv0",
      },
    });
    socket.connect()
    // console.log("salom");
    socket.on("callAccepted", () => {
      getStatusWaiter()
      console.log("Connected to server!");
      // getStatusWaiter()
    });

    // socket.connect();

    return () => {
      socket.off("callAccepted");
      socket.disconnect();
    }; // Disconnect on unmount
  }, []);

  function getStatusWaiter() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    usePost(`/tables/code/${localStorage.getItem("table_id") || ""}`, {
      code: localStorage.getItem("code") || "",
    })
      .then(({ data }) => {
        dispatch(setAllData(data));
      })
      .catch((e) => console.log(e));
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
        dispatch(setAllData({...allData, call: "calling"}))
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  }

  console.log("saaaaaaaaaaaalom", allData);

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
          <div className="flex justify-center flex-col items-center min-h-40 w-full">
            {/* <div className=" max-h-min"> */}
            <img
              className={`border-2 border-transparent rounded-[42px] ${
                allData.call === "calling" ? "animate-pulsar" : ""
              }`}
              src={allData.call === "accepted" ? bell_green : bell}
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
