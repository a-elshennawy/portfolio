"use client";
import Image from "next/image";
import "./About.css";
import TextType from "@/components/UI/TextType/TextType";
import Link from "next/link";
import ApproachComponent from "@/components/inPageComponents/AboutPage/ApproachComponent";
import ProcessComponent from "@/components/inPageComponents/AboutPage/ProcessComponent";
import { FaArrowCircleRight } from "react-icons/fa";
import useMobile from "@/hooks/useMobile";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";

function About() {
  const { isMobile } = useMobile();
  const t = useTranslations("about");

  return (
    <>
      <section className="about p-0 text-center z-2">
        <div className="hero">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="img p-0"
          >
            <Image
              src="/avatar/down.webp"
              alt="character"
              width={500}
              height={350}
              priority
              quality={85}
              sizes={isMobile ? "90vw" : "20vw"}
              style={{ width: isMobile ? "90%" : "20%", height: "auto" }}
              className="avatarImg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="heroContent"
          >
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
              showCursor={true}
              loop={true}
              cursorCharacter="_"
            />
            <div className="mt-5 p-1">
              <Link className="glassmorphism basicBtn aboutBtn" href={"#more"}>
                {t("button_1")}
                <FaArrowCircleRight />
              </Link>
            </div>
          </motion.div>
        </div>
        <div
          id="more"
          className="row justify-content-center align-items-start gap-3 mt-5 pt-5 mx-0"
        >
          <div className="spotLightCards col-10 row justify-content-center align-items-center gap-3 m-0">
            <h2>{t("section_1_title")}</h2>
            <ApproachComponent />
          </div>

          <div className="spotLightCards col-10 row justify-content-center align-items-center gap-2 p-0 pt-2 my-5 mx-0">
            <h2>{t("section_2_title")}</h2>
            <ProcessComponent />
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
