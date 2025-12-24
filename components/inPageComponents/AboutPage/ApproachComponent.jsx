"use client";
import SpotlightCard from "@/components/UI/SpotlightCard/SpotlightCard";
import Image from "next/image";
import { motion } from "motion/react";
import { useTranslations, useLocale } from "next-intl";

function ApproachComponent() {
  const locale = useLocale();
  const t = useTranslations("approachCards");
  const approachCards = [
    {
      id: 0,
      title: t("card_1_title"),
      content: t("card_1_desc"),
      icon: "/icons/approachIcons/flash.png",
      SpotlightColor: "rgba(121, 0, 248, 0.2)",
      animationDuration: 0.3,
    },
    {
      id: 1,
      title: t("card_2_title"),
      content: t("card_2_desc"),
      icon: "/icons/approachIcons/focus.png",
      SpotlightColor: "rgba(0, 128, 255, 0.2)",
      animationDuration: 0.5,
    },
    {
      id: 2,
      title: t("card_3_title"),
      content: t("card_3_desc"),
      icon: "/icons/approachIcons/mobile.png",
      SpotlightColor: "rgba(22, 255, 0, 0.2)",
      animationDuration: 0.7,
    },
    {
      id: 3,
      title: t("card_4_title"),
      content: t("card_4_desc"),
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
            <h5 dir={locale === "ar" ? "rtl" : "ltr"}>{card.content}</h5>
          </SpotlightCard>
        </motion.div>
      ))}
    </>
  );
}

export default ApproachComponent;
