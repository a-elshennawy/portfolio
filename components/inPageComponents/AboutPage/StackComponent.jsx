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

function StackComponent() {
  const stackIcons = [
    { id: 0, src: <FaReact />, className: "react", link: "https://react.dev/" },
    {
      id: 1,
      src: <RiNextjsFill />,
      className: "next",
      link: "https://nextjs.org/",
    },
    {
      id: 2,
      src: <IoLogoJavascript />,
      className: "javaScript",
      link: "https://www.javascript.com/",
    },
    { id: 3, src: <FaHtml5 />, className: "html", link: "https://whatwg.org/" },
    {
      id: 4,
      src: <IoLogoCss3 />,
      className: "css",
      link: "https://www.w3.org/TR/",
    },
    {
      id: 5,
      src: <FaBootstrap />,
      className: "bootstrap",
      link: "https://getbootstrap.com/",
    },
    {
      id: 6,
      src: <FaGitAlt />,
      className: "git",
      link: "https://git-scm.com/",
    },
    {
      id: 7,
      src: <FaGithub />,
      className: "gitHub",
      link: "https://github.com/a-elshennawy",
    },
    {
      id: 8,
      src: <IoLogoFirebase />,
      className: "firebase",
      link: "https://console.firebase.google.com/",
    },
    {
      id: 9,
      src: <RiSupabaseFill />,
      className: "supabase",
      link: "https://supabase.com/",
    },
  ];

  const handleIconClick = (link) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };
  return (
    <>
      {stackIcons.map((icon) => (
        <div
          key={icon.id}
          className={`${icon.className} stackIcon p-0`}
          onClick={() => handleIconClick(icon.link)}
        >
          {icon.src}
        </div>
      ))}
    </>
  );
}

export default StackComponent;
