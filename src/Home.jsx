// import { useState } from 'react'
import { Button } from "@mui/material";
import "./App.css";
import bell from "./assets/bell.svg";
import ExtraMenu from "./components/ExtraMenu";
import Header from "./components/Header";

function Home() {
  return (
    <div className=" flex justify-center items-center flex-col pt-[70px] pb-24 min-h-screen">
      <div className="fixed top-0 left-0 w-full bg-white z-10">
        <Header />
      </div>

      
        <div className="w-80 min-h-80 rounded-lg bg-light p-4 pt-3">
          <div className="mb-6">
            <div className="mb-4 text-[32px] leading-10 text-black text-center font-semibold">
              Afitsant chaqirish
            </div>
            <div className="flex justify-center min-h-32">
              <img src={bell} alt="" />
            </div>
          </div>
          <Button
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
