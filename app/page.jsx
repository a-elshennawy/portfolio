"use client";
import "./Home.css";
import { useEffect } from "react";
import TextType from "@/components/UI/TextType/TextType";
import FadeContent from "@/components/UI/FadeContent/FadeContent";
import { motion } from "motion/react";
import Link from "next/link";

export default function Home() {
  useEffect(() => {
    // @ts-expect-error - no props needed here
    import("bootstrap/dist/js/bootstrap.bundle.min.js")
      .then(() => console.log("Bootstrap JS loaded correctly"))
      .catch(console.error);
  }, []);
  return (
    <>
      <section className="home p-0 text-center z-2">
        <div className="content">
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
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeInOut" }}
            className="glassmorphism homeHeroBtn mt-3"
          >
            <Link href="/about">start your project</Link>
          </motion.button>
        </div>
      </section>
    </>
  );
}
