"use client";
import Link from "next/link";
import "./not-found.css";
import Image from "next/image";
import useMobile from "@/hooks/useMobile";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";

function notFound() {
  const { isMobile } = useMobile();
  const t = useTranslations("texts");
  return (
    <>
      <section className="notFound pt-3 text-center z-2">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className="content pt-5 pb-0 row text-center justify-content-center align-items-center m-0"
        >
          <div className="col-12 p-0">
            <Image
              src={t("404_img")}
              alt="404"
              width={isMobile ? 250 : 400}
              height={isMobile ? 250 : 400}
              unoptimized
            />
          </div>

          <h4>{t("404_text")}</h4>
          <button className="mt-2 glassmorphism goHomeBtn">
            <Link href="/">{t("404_btn")}</Link>
          </button>
        </motion.div>
      </section>
    </>
  );
}

export default notFound;
