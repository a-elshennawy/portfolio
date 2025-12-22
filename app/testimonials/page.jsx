"use client";
import Image from "next/image";
import "./testimonials.css";
import Link from "next/link";
import useMobile from "@/hooks/useMobile";
import TestmonialsComponent from "@/components/inPageComponents/TestimonialsPage/TestmonialsComponent";
import { motion } from "motion/react";

function Testimonials() {
  const { isMobile } = useMobile();

  return (
    <>
      <section className="testimonials text-center">
        <div className="hero">
          <motion.div
            className="img p-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Image
              src="/avatar/proud.webp"
              alt="character"
              width={isMobile ? 400 : 600}
              height={isMobile ? 400 : 600}
              priority
              style={{
                top: isMobile ? "10%" : "20%",
                height: "auto",
              }}
              className="avatarImg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="heroContent"
            style={{ top: isMobile ? "50%" : "70%" }}
          >
            <div className="mt-3 p-1">
              <Link
                className="glassmorphism basicBtn"
                href="#testimonialsSection"
              >
                why trust me ?
              </Link>
            </div>
          </motion.div>
        </div>
        <div
          id="testimonialsSection"
          className="row text-center justify-content-center align-items-center gap-4 m-0 py-5"
        >
          <TestmonialsComponent />
        </div>
      </section>
    </>
  );
}

export default Testimonials;
