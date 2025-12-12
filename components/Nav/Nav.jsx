"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import FadeContent from "../UI/FadeContent/FadeContent";
import LightRays from "../UI/LightRays/LightRays";
import "./Nav.css";

function Nav() {
  const pathname = usePathname();
  return (
    <>
      <div className="navContainer row justify-content-center m-0">
        <FadeContent
          blur={false}
          duration={1500}
          easing="ease-out"
          initialOpacity={0}
        >
          <div style={{ width: "100%", height: "100%", position: "absolute" }}>
            <LightRays
              raysOrigin="top-center"
              raysColor="#fff"
              raysSpeed={1.5}
              lightSpread={0.8}
              rayLength={2}
              followMouse={true}
              mouseInfluence={0.1}
              noiseAmount={0.1}
              distortion={0.05}
              className="custom-rays"
            />
          </div>
          <div className="navDock glassmorphism row justify-content-center align-items-center gap-1 m-0">
            <Link
              href="/"
              className={`navItem glassmorphism ${pathname === "/" ? "active" : ""}`}
            >
              home
            </Link>
            <Link
              href="/about"
              className={`navItem glassmorphism ${pathname === "/about" ? "active" : ""}`}
            >
              about
            </Link>
            <Link
              href="/projects"
              className={`navItem glassmorphism ${pathname === "/projects" ? "active" : ""}`}
            >
              projects
            </Link>
            <Link
              href="/contact"
              className={`navItem glassmorphism ${pathname === "/contact" ? "active" : ""}`}
            >
              contact
            </Link>
          </div>
        </FadeContent>
      </div>
    </>
  );
}

export default Nav;
