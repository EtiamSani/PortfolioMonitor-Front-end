"use client";
import { jwtDecode } from "jwt-decode";
import React, { Children } from "react";

const Greeting = () => {
  let ownerName = "";
  if (typeof window !== "undefined") {
    const token = window.localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode(token);
      ownerName = decodedToken.username;
    }
  }
  return (
    <div className="hidden md:block ">
      <h1 className="ml-[420px] text-2xl p-2 text-[#272838] mt-5 ">
        <span className=" text-[#272838]">
          Bonjour <span className="text-[#272838] font-bold">{ownerName}</span>{" "}
          👋
        </span>
      </h1>
    </div>
  );
};

export default Greeting;
