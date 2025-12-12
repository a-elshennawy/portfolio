"useClient";
import "./Hero.css";
import { motion } from "motion/react";
import TextType from "../../UI/TextType/TextType";
import FadeContent from "../../UI/FadeContent/FadeContent";
import LightRays from "../../UI/LightRays/LightRays";
import { IoIosArrowDown } from "react-icons/io";

function Hero() {
  return (
    <>
      <section className="hero pt-0">
        <FadeContent
          blur={true}
          duration={1500}
          easing="ease-out"
          initialOpacity={0}
        >
          <div style={{ width: "100%", height: "100%", position: "relative" }}>
            <LightRays
              raysOrigin="top-center"
              raysColor="#fff"
              raysSpeed={1.5}
              lightSpread={0.8}
              rayLength={2}
              followMouse={true}
              mouseInfluence={0.1}
              noiseAmount={0.1}
              distortion={0.05}
              className="custom-rays"
            />
          </div>
        </FadeContent>
        <div className="content text-center z-2">
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
              cursorCharacter="|"
            />
          </FadeContent>
          <motion.button
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 0.3, ease: "easeInOut" }}
            className="scrollBtn mt-4"
          >
            <IoIosArrowDown />
          </motion.button>
        </div>
      </section>
    </>
  );
}

export default Hero;
