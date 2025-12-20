"use client";
import { ViewTransitions } from "next-view-transitions";
import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./Nav.css";

function Nav() {
  const pathname = usePathname();
  return (
    <>
      <div className="navContainer row text-center justify-content-center align-items-center m-0">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
          className="navDock glassmorphism row justify-content-center align-items-center gap-1 mx-0"
        >
          <ViewTransitions>
            <Link
              href="/"
              className={`navItem glassmorphism ${pathname === "/" ? "active" : ""}`}
            >
              home
            </Link>
          </ViewTransitions>

          <ViewTransitions>
            <Link
              href="/about"
              className={`navItem glassmorphism ${pathname === "/about" ? "active" : ""}`}
            >
              about
            </Link>
          </ViewTransitions>

          <ViewTransitions>
            <Link
              href="/projects"
              className={`navItem glassmorphism ${pathname === "/projects" ? "active" : ""}`}
            >
              projects
            </Link>
          </ViewTransitions>

          <ViewTransitions>
            <Link
              href="/contact"
              className={`navItem glassmorphism ${pathname === "/contact" ? "active" : ""}`}
            >
              contact
            </Link>
          </ViewTransitions>
        </motion.div>
      </div>
    </>
  );
}

export default Nav;
