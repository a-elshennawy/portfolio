"use client";
import { Link } from "@/i18n/routing";
import "./LightMode.css";
import Image from "next/image";
import useMobile from "@/hooks/useMobile";

function LightMode() {
  const { isMobile } = useMobile();
  return (
    <>
      <section className="z-2 p-0 lightModeComp">
        <div className="content text-center">
          <h1>TURN OFF THAT LIGHT</h1>
          <Link className="my-5 mx-auto p-2 toHomeBtn" href="/">
            turn it off
          </Link>
          <Image
            src="/avatar/lightMode.webp"
            alt="character"
            width={isMobile ? 250 : 500}
            height={isMobile ? 250 : 500}
            quality={85}
            priority
          />
        </div>
      </section>
    </>
  );
}

export default LightMode;
