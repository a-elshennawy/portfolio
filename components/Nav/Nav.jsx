"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./Nav.css";

function Nav() {
  const pathname = usePathname();
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.3 }}
        className="navContainer row justify-content-center align-items-center m-0"
      >
        <div className="navDock glassmorphism row justify-content-center align-items-center gap-1 mx-0">
          <Link
            href="/"
            className={`navItem glassmorphism ${pathname === "/" ? "active" : ""}`}
          >
            home
          </Link>
          <Link
            href="#about"
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
      </motion.div>
    </>
  );
}

export default Nav;
