"use client";
import Image from "next/image";
import "./About.css";
import TextType from "@/components/UI/TextType/TextType";
import Link from "next/link";
import ApproachComponent from "@/components/inPageComponents/AboutPage/ApproachComponent";
import ProcessComponent from "@/components/inPageComponents/AboutPage/ProcessComponent";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import useMobile from "@/hooks/useMobile";
import { motion } from "motion/react";
import { useTranslations, useLocale } from "next-intl";

function About() {
  const { isMobile } = useMobile();
  const locale = useLocale();
  const t = useTranslations("about");

  return (
    <>
      <section className="about p-0 text-center z-2">
        <div className="hero">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="heroContent text-center"
          >
            <div className="img p-0">
              <Image
                src="/avatar/down.webp"
                alt="character"
                width={isMobile ? 400 : 500}
                height={isMobile ? 350 : 400}
                priority
                quality={85}
              />
            </div>
            <h1>{t("title")}</h1>
            <TextType
              text={[
                t("subtitle_1"),
                t("subtitle_2"),
                t("subtitle_3"),
                t("subtitle_4"),
                t("subtitle_5"),
              ]}
              style={{ fontSize: "1.25rem" }}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={false}
              loop={true}
              startOnVisible={true}
            />
            <div className="mt-5 p-1">
              <Link
                className="glassmorphism basicBtn aboutBtn"
                href={"#more"}
                dir={locale === "ar" ? "rtl" : "ltr"}
              >
                {t("button_1")}
                {locale === "ar" ? (
                  <FaArrowCircleLeft />
                ) : (
                  <FaArrowCircleRight />
                )}
              </Link>
            </div>
          </motion.div>
        </div>
        <div
          id="more"
          className="row justify-content-center align-items-start gap-3 mt-5 pt-5 mx-0"
        >
          <div className="spotLightCards col-sm-12 col-md-12 col-lg-12 row justify-content-center align-items-center gap-1 m-0">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
              className="mb-2"
            >
              {t("section_1_title")}
            </motion.h2>
            <ApproachComponent />
          </div>

          <div className="spotLightCards col-sm-12 col-md-12 col-lg-10 row justify-content-center align-items-center gap-2 py-2 my-5 mx-0">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
              className="mb-2"
            >
              {t("section_2_title")}
            </motion.h2>
            <ProcessComponent />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
            className="currentPosition mb-3 col-12"
          >
            <h2 className="mb-2">{t("section_3_title")}</h2>
            <Link href={"https://dokkan.agency/"} target="_blank">
              <Image
                src="/dokkanLogo.webp"
                alt="dokkan agency logo"
                width={isMobile ? 200 : 300}
                height={isMobile ? 80 : 100}
              />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default About;
