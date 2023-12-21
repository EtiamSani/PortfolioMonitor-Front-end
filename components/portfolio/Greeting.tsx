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
    <div className="bg-white  ">
      <h1 className="ml-[259px] text-2xl p-2 text-[#003F91] border-b">
        <span className="font-bold text-[#003F91]">
          👋 Bonjour <span className="text-[#003F91]">{ownerName}</span>,
        </span>{" "}
        Re-bienvenue
      </h1>
    </div>
  );
};

export default Greeting;
