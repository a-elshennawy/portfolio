import SpotlightCard from "@/components/UI/SpotlightCard/SpotlightCard";
import { motion } from "motion/react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";

function ProcessComponent() {
  const locale = useLocale();
  const t = useTranslations("processCards");

  const ProcessCards = [
    {
      id: 0,
      step: 1,
      title: t("card_1_title"),
      content: t("card_1_desc"),
      icon: "/icons/stepsIcons/light-bulb.png",
      SpotlightColor: "rgba(251, 229, 43, 0.2)",
      animationDuration: 0.3,
    },
    {
      id: 1,
      step: 2,
      title: t("card_2_title"),
      content: t("card_2_desc"),
      icon: "/icons/stepsIcons/pencil.png",
      SpotlightColor: "rgba(0, 121, 177, 0.2)",
      animationDuration: 0.5,
    },
    {
      id: 2,
      step: 3,
      title: t("card_3_title"),
      content: t("card_3_desc"),
      icon: "/icons/stepsIcons/rocket.png",
      SpotlightColor: "rgba(151, 222, 255, 0.2)",
      animationDuration: 0.7,
    },
    {
      id: 3,
      step: 4,
      title: t("card_4_title"),
      content: t("card_4_desc"),
      icon: "/icons/stepsIcons/arrow-right.png",
      SpotlightColor: "rgba(113, 0, 236, 0.2)",
      animationDuration: 0.9,
    },
    {
      id: 4,
      step: 5,
      title: t("card_5_title"),
      content: t("card_5_desc"),
      icon: "/icons/stepsIcons/checked.png",
      SpotlightColor: "rgba(0, 236, 75, 0.2)",
      animationDuration: 1.1,
    },
    {
      id: 5,
      step: 6,
      title: t("card_6_title"),
      content: t("card_6_desc"),
      icon: "/icons/stepsIcons/technical-support.png",
      SpotlightColor: "rgba(255, 255, 255, 0.2)",
      animationDuration: 1.3,
    },
  ];
  return (
    <>
      {ProcessCards.map((card) => (
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
          className="Spotcard col-12 col-md-5 col-lg-4 p-0"
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

            <h3 className="mb-2" dir={locale === "ar" ? "rtl" : "ltr"}>
              <span className="step">{card.step}</span>
              {card.title}
            </h3>
            <h5 dir={locale === "ar" ? "rtl" : "ltr"}>{card.content}</h5>
          </SpotlightCard>
        </motion.div>
      ))}
    </>
  );
}

export default ProcessComponent;
