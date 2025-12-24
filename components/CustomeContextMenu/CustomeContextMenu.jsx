"use client";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function CustomContextMenu() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const t = useTranslations("contextMenu");

  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();

      setMenuPosition({
        x: e.pageX,
        y: e.pageY,
      });
      setMenuVisible(true);
    };

    const handleClick = () => {
      setMenuVisible(false);
    };

    const handleScroll = () => {
      setMenuVisible(false);
    };

    const handleKeyDown = (e) => {
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key)) ||
        (e.ctrlKey && e.key === "u") ||
        (e.metaKey && e.altKey && ["i", "j", "c"].includes(e.key))
      ) {
        e.preventDefault();
        return false;
      }
    };

    // Prevent image dragging
    const handleDragStart = (e) => {
      if (e.target.tagName === "IMG") {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("click", handleClick);
    document.addEventListener("scroll", handleScroll);
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("dragstart", handleDragStart);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("click", handleClick);
      document.removeEventListener("scroll", handleScroll);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("dragstart", handleDragStart);
    };
  }, []);

  if (!menuVisible) return null;

  return (
    <>
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: "auto" }}
        exit={{ height: 0 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className="contextMenu p-0"
        style={{
          left: `${menuPosition.x}px`,
          top: `${menuPosition.y}px`,
          position: "absolute",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <ul>
          <Link href={"/"}>
            <li>
              {t("home")}
              <Image
                src="/icons/contextMenuIcons/home.png"
                alt="home icons"
                width={20}
                height={20}
                priority
                loading="eager"
              />
            </li>
          </Link>
          <Link href={"/about"}>
            <li>
              {t("about")}
              <Image
                src="/icons/contextMenuIcons/info.png"
                alt="about icon"
                width={20}
                height={20}
                priority
                loading="eager"
              />
            </li>
          </Link>
          <Link href={"/contact"}>
            <li>
              {t("contact")}
              <Image
                src="/icons/contextMenuIcons/contacts.png"
                alt="phone icon"
                width={20}
                height={20}
                priority
                loading="eager"
              />
            </li>
          </Link>
          <Link href={"/testimonials#testimonialsSection"}>
            <li>
              {t("rating")}
              <Image
                src="/icons/contextMenuIcons/rate.png"
                alt="phone icon"
                width={20}
                height={20}
                priority
                loading="eager"
              />
            </li>
          </Link>
          <Link href={"https://wa.me/201033926177"} target="_blank">
            <li>
              {t("whatsApp")}
              <Image
                src="/icons/contextMenuIcons/whatsapp.png"
                alt="whatsapp icon"
                width={20}
                height={20}
                priority
                loading="eager"
              />
            </li>
          </Link>
        </ul>
      </motion.div>
    </>
  );
}
