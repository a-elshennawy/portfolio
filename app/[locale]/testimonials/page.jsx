"use client";
import Image from "next/image";
import "./testimonials.css";
import Link from "next/link";
import useMobile from "@/hooks/useMobile";
import TestmonialsComponent from "@/components/inPageComponents/TestimonialsPage/TestmonialsComponent";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";

function Testimonials() {
  const { isMobile } = useMobile();
  const t = useTranslations("testimonials");

  return (
    <>
      <section className="testimonials p-0 text-center z-2">
        <div className="hero">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="heroContent"
          >
            <div className="img p-0">
              <Image
                src="/avatar/proud.webp"
                alt="character"
                width={isMobile ? 400 : 600}
                height={isMobile ? 350 : 500}
                priority
                className="avatarImg"
              />
            </div>
            <div className="mt-3 p-1">
              <Link
                className="glassmorphism basicBtn"
                href="#testimonialsSection"
              >
                {t("button_1")}
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
