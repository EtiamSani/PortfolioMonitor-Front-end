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
    <div>
      <h1 className="ml-[400px] text-4xl mt-10 text-slate-600">
        <span className="font-bold text-slate-600">
          👋 Bonjour <span className="text-[#003F91]">{ownerName}</span>,
        </span>{" "}
        Re-bienvenue
      </h1>
    </div>
  );
};

export default Greeting;
