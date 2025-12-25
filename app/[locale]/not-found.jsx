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
      <section className="notFound pt-3 text-center z-2">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className="content pt-5 pb-0 row text-center justify-content-center align-items-center m-0"
        >
          <div className="col-12 mt-3 p-0">
            <Image
              src="/avatar/404_new.webp"
              alt="404"
              width={isMobile ? 300 : 600}
              height={isMobile ? 300 : 600}
              unoptimized
            />
          </div>
        </motion.div>
      </section>
    </>
  );
}

export default notFound;
