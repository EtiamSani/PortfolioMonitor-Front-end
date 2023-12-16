"use client";
import React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Test = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  console.log(pathname);
  return <div>uu</div>;
};

export default Test;
