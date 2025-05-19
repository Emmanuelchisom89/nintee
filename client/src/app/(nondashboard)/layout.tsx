"use client";
// This layout is used for the landing page and other non-dashboard pages
import Navbar from "@/components/Navbar";
import { NAVBAR_HEIGHT } from "@/lib/constants";
import { useGetAuthUserQuery } from "@/state/api";
import React from "react";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  const { data: authUser } = useGetAuthUserQuery();
  console.log("authUser", authUser);

  return (
    <div className="h-full w-full">
      <Navbar />
      <main
        className={`h-full flex w-full flex-col`}
        style={{ paddingTop: `${NAVBAR_HEIGHT}px` }}
      >
        {children}
      </main>
    </div>
  );
};

export default LandingLayout;
