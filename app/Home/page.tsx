import React from "react";
import Link from "next/link";
import NavBar from "@/components/NavBar/NavBar"
import Land from "@/components/Land/Land";
import GymProgram from "@/components/GymProgram/GymProgram";
import Join from "@/components/Join/Join";
import Coaches from "@/components/Coaches/Coaches"

export default function HomePage() {
  return (
    <>
      <NavBar /> 
      <Land/>
      <GymProgram />
      <Join />
      <Coaches />
    </>
  );
}
