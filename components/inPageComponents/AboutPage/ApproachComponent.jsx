"use client";
import SpotlightCard from "@/components/UI/SpotlightCard/SpotlightCard";
import Image from "next/image";
import { motion } from "motion/react";

function ApproachComponent() {
  const approachCards = [
    {
      id: 0,
      title: "fast & focused",
      content:
        "moving quickly no cutting corners — delivering clean builds fast, then refinig with precision",
      icon: "/icons/approachIcons/flash.png",
      SpotlightColor: "rgba(121, 0, 248, 0.2)",
      animationDuration: 0.3,
    },
    {
      id: 1,
      title: "pixel precision",
      content:
        "Every component I craft is intentional — I obsess over alignment, spacing, and visual clarity.",
      icon: "/icons/approachIcons/focus.png",
      SpotlightColor: "rgba(0, 128, 255, 0.2)",
      animationDuration: 0.5,
    },
    {
      id: 2,
      title: "mobile first",
      content:
        "From the smallest screens up, I design interfaces that feel smooth, natural, and touch-friendly.",
      icon: "/icons/approachIcons/mobile.png",
      SpotlightColor: "rgba(22, 255, 0, 0.2)",
      animationDuration: 0.7,
    },
    {
      id: 3,
      title: "clarity wins",
      content:
        "Whether in code or communication, I keep things clear — no guesswork, no messy logic.",
      icon: "/icons/approachIcons/handshake.png",
      SpotlightColor: "rgba(226, 255, 0, 0.2)",
      animationDuration: 0.9,
    },
  ];

  return (
    <>
      {approachCards.map((card) => (
        <motion.div
          key={card.id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: card.animationDuration,
            delay: card.animationDuration * 0.1,
            ease: "easeInOut",
          }}
          className="Spotcard col-12 col-md-5 col-lg-2 p-0"
        >
          <SpotlightCard className="p-2" spotlightColor={card.SpotlightColor}>
            <Image
              className="cardIcon mb-3"
              src={card.icon}
              alt={card.title}
              width={80}
              height={80}
              priority
              loading="eager"
              quality={85}
            />
            <h3 className="mb-2">{card.title}</h3>
            <h5>{card.content}</h5>
          </SpotlightCard>
        </motion.div>
      ))}
    </>
  );
}

export default ApproachComponent;
