"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import "./About.css";
import FadeContent from "@/components/UI/FadeContent/FadeContent";
import TextType from "@/components/UI/TextType/TextType";
import Link from "next/link";
import SpotlightCard from "@/components/UI/SpotlightCard/SpotlightCard";
import StackComponent from "@/components/inPageComponents/AboutPage/StackComponent";

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
              know more
            </Link>
          </div>
        </div>

        <div
          id="more"
          className="row justify-content-center align-items-start gap-1 mt-5 pt-5 mx-0"
        >
          <div className="approachCards col-10 row justify-content-center align-items-center gap-3 m-0">
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

          <div className="process"></div>
        </div>
      </section>
    </>
  );
}

export default About;
