"use client";
import { useEffect } from "react";
import ScrollBar from "@/components/UI/ScrollBar/ScrollBar";
import Hero from "@/components/Sections/Hero/Hero";

export default function Home() {
  useEffect(() => {
    // @ts-expect-error - no props needed here
    import("bootstrap/dist/js/bootstrap.bundle.min.js")
      .then(() => console.log("Bootstrap JS loaded correctly"))
      .catch(console.error);
  }, []);
  return (
    <>
      <ScrollBar />
      <Hero />
    </>
  );
}
