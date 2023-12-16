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
      <h1 className="ml-[400px] text-4xl mt-10">
        <span className="font-bold">👋 Bonjour {ownerName},</span> Re-bienvenue
      </h1>
    </div>
  );
};

export default Greeting;
