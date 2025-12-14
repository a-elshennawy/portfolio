"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import "./About.css";
import FadeContent from "@/components/UI/FadeContent/FadeContent";
import TextType from "@/components/UI/TextType/TextType";
import Link from "next/link";
import SpotlightCard from "@/components/UI/SpotlightCard/SpotlightCard";
import StackComponent from "@/components/inPageComponents/AboutPage/StackComponent";
import LightRays from "@/components/UI/LightRays/LightRays";

function About() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch("/API/approachCards.json")
      .then((res) => res.json())
      .then((data) => setCards(data.cards))
      .catch((err) => console.error("Error cards:", err));
  }, []);

  return (
    <>
      <section className="about p-0 text-center z-2">
        <div style={{ width: "100%", height: "100%", position: "absolute" }}>
          <LightRays
            raysOrigin="top-center"
            raysColor="fff"
            raysSpeed={1.5}
            lightSpread={0.8}
            rayLength={1.2}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0.1}
            distortion={0.05}
            className="custom-rays"
          />
        </div>
        <div className="hero">
          <div className="heroContent">
            <FadeContent
              blur={true}
              duration={3000}
              easing="ease-out"
              initialOpacity={0}
            >
              <Image
                src={"/favicon.png"}
                alt={"main logo"}
                width={100}
                height={100}
                unoptimized
                className="mb-3"
              />
            </FadeContent>

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
                "pixel perfectionist.",
                "a budget friendly developer",
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
              know more
            </Link>
          </div>
        </div>

        <div
          id="more"
          className="row justify-content-center align-items-start gap-1 mt-5 pt-5 mx-0"
        >
          <div className="approachCards col-10 row justify-content-center align-items-center gap-3 m-0">
            <h2 className="mb-3">how ?</h2>
            {cards.map((card) => (
              <SpotlightCard
                key={card.id}
                className="approachCard col-md-2 col-12 p-2"
                spotlightColor={card.SpotlightColor}
              >
                <Image
                  className="cardIcon mb-3"
                  src={card.icon}
                  alt={card.title}
                  width={80}
                  height={80}
                  unoptimized
                />
                <h3 className="mb-2">{card.title}</h3>
                <h5>{card.content}</h5>
              </SpotlightCard>
            ))}
          </div>

          <div className="stack col-10 row justify-content-center align-items-center p-0 my-5 mx-0">
            <StackComponent />
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
