"use client";
import "./Home.css";
import { useEffect } from "react";
import TextType from "@/components/UI/TextType/TextType";
import { motion } from "motion/react";
import Link from "next/link";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import useMobile from "@/hooks/useMobile";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";

export default function Home() {
  const { isMobile } = useMobile();
  const locale = useLocale();
  const t = useTranslations("home");

  useEffect(() => {
    // @ts-expect-error - no props needed here
    import("bootstrap/dist/js/bootstrap.bundle.min.js")
      .then(() => console.log("Bootstrap JS loaded correctly"))
      .catch(console.error);
  }, []);

  return (
    <>
      <section className="home p-0 text-center z-2 row justify-content-center align-items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="content col-10 col-md-3 p-2"
        >
          <h1 className="mb-2">{t("title")}</h1>

          <TextType
            text={[t("subtitle")]}
            style={{ fontSize: "1.5rem" }}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            loop={false}
            cursorCharacter="_"
          />
          <div className="mt-3 p-1">
            <Link
              className="glassmorphism basicBtn homeBtn"
              href="/about"
              dir={locale === "ar" ? "rtl" : "ltr"}
            >
              {t("button_1")}
              {locale === "ar" ? <FaArrowCircleLeft /> : <FaArrowCircleRight />}
            </Link>
            <Link
              className="glassmorphism basicBtn homeBtn"
              href="/contact"
              dir={locale === "ar" ? "rtl" : "ltr"}
            >
              {t("button_2")}
              {locale === "ar" ? <FaArrowCircleLeft /> : <FaArrowCircleRight />}
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="img p-0"
        >
          <Image
            src="/avatar/welcoming.webp"
            alt="waving avatar"
            width={isMobile ? 250 : 300}
            height={isMobile ? 250 : 300}
            priority
            loading="eager"
            quality={85}
          />
        </motion.div>
      </section>
    </>
  );
}
