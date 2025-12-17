import Image from "next/image";
import CardSwap, { Card } from "@/components/UI/CardSwap/CardSwap";

function ProcessComponent() {
  const ProcessCards = [
    {
      id: 0,
      step: 1,
      title: "Concept & Scope",
      content:
        "We align on the must-haves. I listen, ask the hard questions, and craft a clear project roadmap before the first line of code.",
      icon: "/icons/processStepsIcons/light-bulb.png",
    },
    {
      id: 1,
      step: 2,
      title: "Design & Clarity",
      content:
        "I switch to UI/UX (Figma). Every pixel is intentional—obsessed over alignment, spacing, and a clean, touch-friendly feel across all screen sizes.",
      icon: "/icons/processStepsIcons/pencil.png",
    },
    {
      id: 2,
      step: 3,
      title: "Rapid Prototype",
      content:
        "Moving quickly, no cutting corners. I deliver a clean, component-based front-end build and integrate the BaaS (Firebase/Supabase) for rapid functionality.",
      icon: "/icons/processStepsIcons/rocket.png",
    },
    {
      id: 3,
      step: 4,
      title: "Live Review & Refine",
      content:
        "Instant follow-up! I deploy the build to a free host like Vercel right away so you can test it live. We refine with precision based on your real-time feedback.",
      icon: "/icons/processStepsIcons/arrow-right.png",
    },
    {
      id: 4,
      step: 5,
      title: "Launch & Handover",
      content:
        "Clean code, no guesswork. We finalize the production build and I hand over everything—clear documentation, reusable components, and a smooth deployment process.",
      icon: "/icons/processStepsIcons/checked.png",
    },
  ];
  return (
    <>
      <div
        style={{
          height: "600px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        className="text-center"
      >
        <CardSwap
          cardDistance={60}
          verticalDistance={70}
          delay={4000}
          pauseOnHover={true}
        >
          {ProcessCards.map((card) => (
            <Card key={card.id}>
              <h3>{card.title}</h3>
              <p>{card.content}</p>
            </Card>
          ))}
        </CardSwap>
      </div>
    </>
  );
}

export default ProcessComponent;
