"use client";
import Link from "next/link";
import "./not-found.css";
import Image from "next/image";
import useMobile from "@/hooks/useMobile";
import { motion } from "motion/react";

function notFound() {
  const { isMobile } = useMobile();
  return (
    <>
      <section className="notFound py-5 text-center z-2">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className="content py-5 row text-center justify-content-center align-items-center m-0"
        >
          <div className="col-12 p-0">
            <Image
              src="/404.png"
              alt="404"
              width={450}
              height={500}
              style={{ width: isMobile ? "100%" : "40%", height: "auto" }}
              unoptimized
            />
          </div>

          <h4>what are you doing here ?</h4>
          <button className="mt-2 glassmorphism goHomeBtn">
            <Link href="/">Go Home</Link>
          </button>
        </motion.div>
      </section>
    </>
  );
}

export default notFound;
