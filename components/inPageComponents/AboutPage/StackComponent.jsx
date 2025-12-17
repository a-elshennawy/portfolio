import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { RiSupabaseFill } from "react-icons/ri";
import LogoLoop from "@/components/UI/LogoLoop/LogoLoop";

function StackComponent() {
  const stackIcons = [
    {
      id: 0,
      node: <FaReact />,
      className: "react",
      href: "https://react.dev/",
    },
    {
      id: 1,
      node: <RiNextjsFill />,
      className: "next",
      href: "https://nextjs.org/",
    },
    {
      id: 2,
      node: <IoLogoJavascript />,
      className: "javaScript",
      href: "https://www.javascript.com/",
    },
    {
      id: 3,
      node: <FaHtml5 />,
      className: "html",
      href: "https://whatwg.org/",
    },
    {
      id: 4,
      node: <IoLogoCss3 />,
      className: "css",
      href: "https://www.w3.org/TR/",
    },
    {
      id: 5,
      node: <FaBootstrap />,
      className: "bootstrap",
      href: "https://getbootstrap.com/",
    },
    {
      id: 6,
      node: <FaGitAlt />,
      className: "git",
      href: "https://git-scm.com/",
    },
    {
      id: 7,
      node: <FaGithub />,
      className: "gitHub",
      href: "https://github.com/a-elshennawy",
    },
    {
      id: 8,
      node: <IoLogoFirebase />,
      className: "firebase",
      href: "https://console.firebase.google.com/",
    },
    {
      id: 9,
      node: <RiSupabaseFill />,
      className: "supabase",
      href: "https://supabase.com/",
    },
  ];

  const handleIconClick = (link) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };
  return (
    <>
      <div
        style={{
          height: "100%",
          position: "relative",
          overflow: "hidden",
          padding: "0",
        }}
      >
        <LogoLoop
          logos={stackIcons}
          speed={100}
          direction="left"
          logoHeight={48}
          gap={40}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor="#000"
          ariaLabel="Technology partners"
        />
      </div>
    </>
  );
}

export default StackComponent;
