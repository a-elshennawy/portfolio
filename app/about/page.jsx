"use client";
import Image from "next/image";
import "./About.css";
import FadeContent from "@/components/UI/FadeContent/FadeContent";
import TextType from "@/components/UI/TextType/TextType";
import Link from "next/link";
import ApproachComponent from "@/components/inPageComponents/AboutPage/ApproachComponent";
import ProcessComponent from "@/components/inPageComponents/AboutPage/ProcessComponent";
import { FaArrowCircleRight } from "react-icons/fa";
import { motion } from "motion/react";

function About() {
  return (
    <>
      <section className="about p-0 text-center z-2">
        <div className="hero">
          <div className="heroContent">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2, ease: "easeInOut" }}
            >
              <Image
                src={"/favicon.png"}
                alt={"main logo"}
                width={100}
                height={100}
                unoptimized
                className="mb-3"
              />
            </motion.div>

            <FadeContent
              blur={true}
              duration={1500}
              easing="ease-out"
              initialOpacity={0}
            >
              <h1>Ahmed El-Shennawy</h1>
            </FadeContent>
            <TextType
              text={[
                "your designer",
                "your friendly developer",
                "your product manager",
                "your tech support",
                "your next right choice",
              ]}
              style={{ fontSize: "1.25rem" }}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              loop={true}
              cursorCharacter="_"
            />

            <Link
              className="scrollDownBtn glassmorphism mt-5 mx-auto"
              href={"#more"}
            >
              need to know
              <FaArrowCircleRight />
            </Link>
          </div>
        </div>

        <div
          id="more"
          className="row justify-content-center align-items-start gap-3 mt-5 pt-5 mx-0"
        >
          <div className="spotLightCards col-10 row justify-content-center align-items-center gap-3 m-0">
            <h2>FOCUS POINTS</h2>
            <ApproachComponent />
          </div>

          <div className="spotLightCards col-10 row justify-content-center align-items-center gap-2 p-0 pt-2 my-5 mx-0">
            <h2>HOW TO ?</h2>
            <ProcessComponent />
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
