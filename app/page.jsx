"use client";
import "./Home.css";
import { useEffect } from "react";
import TextType from "@/components/UI/TextType/TextType";
import FadeContent from "@/components/UI/FadeContent/FadeContent";
import { motion } from "motion/react";
import Link from "next/link";
import { TbBrandWhatsappFilled } from "react-icons/tb";
import { FaArrowCircleRight } from "react-icons/fa";
import useMobile from "@/hooks/useMobile";
import Image from "next/image";
export default function Home() {
  const { isMobile } = useMobile();

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
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="mb-2"
          >
            function meets finesse.
          </motion.h1>
          <FadeContent
            blur={true}
            duration={1500}
            easing="ease-out"
            initialOpacity={0}
          >
            <TextType
              text={["meet shennawy, pixel perfectionist."]}
              style={{ fontSize: "1.5rem" }}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              loop={false}
              cursorCharacter="_"
            />
          </FadeContent>
          <div className="mt-3 p-1">
            <Link className="glassmorphism basicBtn homeBtn" href="/about">
              know more
              <FaArrowCircleRight />
            </Link>
            <Link className="glassmorphism basicBtn homeBtn" href="/contact">
              contact
              <FaArrowCircleRight />
            </Link>
          </div>
        </motion.div>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="whatsAppBtn"
        >
          <Link href="https://wa.me/201033926177" target="_blank">
            <TbBrandWhatsappFilled />
          </Link>
        </motion.button>
        <Image
          src="/avatar/pointingRight.webp"
          alt="character"
          width={500}
          height={500}
          priority
          quality={85}
          sizes={isMobile ? "80vw" : "20vw"}
          style={{
            width: isMobile ? "80%" : "20%",
            height: "auto",
            right: isMobile ? "8%" : "5%",
          }}
        />
      </section>
    </>
  );
}
