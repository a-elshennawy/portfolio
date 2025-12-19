import SpotlightCard from "@/components/UI/SpotlightCard/SpotlightCard";
import { motion } from "motion/react";
import Image from "next/image";
function ProcessComponent() {
  const ProcessCards = [
    {
      id: 0,
      step: 1,
      title: "Concept & Scope",
      content:
        "We align on the must-haves. I listen, ask the hard questions, and craft a clear project roadmap before the first line of code.",
      icon: "/icons/stepsIcons/light-bulb.png",
      SpotlightColor: "rgba(251, 229, 43, 0.2)",
      animationDuration: 0.3,
    },
    {
      id: 1,
      step: 2,
      title: "Design & Clarity",
      content:
        "I switch to UI/UX (Figma). Every pixel is intentional—obsessed over alignment, spacing, and a clean, touch-friendly feel across all screen sizes.",
      icon: "/icons/stepsIcons/pencil.png",
      SpotlightColor: "rgba(0, 121, 177, 0.2)",
      animationDuration: 0.5,
    },
    {
      id: 2,
      step: 3,
      title: "Rapid Prototype",
      content:
        "Moving quickly, no cutting corners. I deliver a clean, component-based front-end build and integrate the BaaS (Firebase/Supabase) for rapid functionality.",
      icon: "/icons/stepsIcons/rocket.png",
      SpotlightColor: "rgba(151, 222, 255, 0.2)",
      animationDuration: 0.7,
    },
    {
      id: 3,
      step: 4,
      title: "Live Review & Refine",
      content:
        "Instant follow-up! I deploy the build to a free host like Vercel right away so you can test it live. We refine with precision based on your real-time feedback.",
      icon: "/icons/stepsIcons/arrow-right.png",
      SpotlightColor: "rgba(113, 0, 236, 0.2)",
      animationDuration: 0.9,
    },
    {
      id: 4,
      step: 5,
      title: "Launch & Handover",
      content:
        "Clean code, no guesswork. We finalize the production build and I hand over everything—clear documentation, reusable components, and a smooth deployment process.",
      icon: "/icons/stepsIcons/checked.png",
      SpotlightColor: "rgba(0, 236, 75, 0.2)",
      animationDuration: 1.1,
    },
    {
      id: 5,
      step: 6,
      title: "After Support",
      content:
        "I don't vanish post-launch. Bug fixes, feature tweaks, or scaling questions—I'm here to ensure your project stays sharp and adapts as your needs evolve.",
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
          viewport={{ once: false, amount: 0.2 }}
          transition={{
            duration: card.animationDuration,
            delay: card.animationDuration * 0.1,
            ease: "easeInOut",
          }}
          className="Spotcard col-md-4 col-12 p-0"
        >
          <SpotlightCard className="p-2" spotlightColor={card.SpotlightColor}>
            <Image
              className="cardIcon mb-3"
              src={card.icon}
              alt={card.title}
              width={80}
              height={80}
              unoptimized
            />

            <h3 className="mb-2">
              <span className="step">{card.step}</span>
              {card.title}
            </h3>
            <h5>{card.content}</h5>
          </SpotlightCard>
        </motion.div>
      ))}
    </>
  );
}

export default ProcessComponent;
