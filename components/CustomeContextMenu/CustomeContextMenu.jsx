"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";

export default function CustomContextMenu() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const [isPositioned, setIsPositioned] = useState(false);
  const menuRef = useRef(null);
  const locale = useLocale();
  const t = useTranslations("contextMenu");
  const isRTL = locale === "ar";

  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();

      // Reset positioning state
      setIsPositioned(false);

      // Set initial position off-screen to measure
      setMenuPosition({ x: -9999, y: -9999 });
      setMenuVisible(true);

      // Calculate proper position after menu renders
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (menuRef.current) {
            const menuRect = menuRef.current.getBoundingClientRect();
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;

            let x = e.pageX;
            let y = e.pageY;

            // Adjust horizontal position
            if (isRTL) {
              // For RTL, menu appears to the left of cursor
              x = e.pageX - menuRect.width;
              // If it goes off the left edge, show it to the right instead
              if (x < window.scrollX) {
                x = e.pageX;
              }
            } else {
              // For LTR, check if menu goes off right edge
              if (e.clientX + menuRect.width > viewportWidth) {
                x = e.pageX - menuRect.width;
              }
            }

            // Adjust vertical position
            if (e.clientY + menuRect.height > viewportHeight) {
              y = e.pageY - menuRect.height;
            }

            // Ensure menu doesn't go off left edge
            if (x < window.scrollX) {
              x = window.scrollX + 5;
            }

            // Ensure menu doesn't go off top edge
            if (y < window.scrollY) {
              y = window.scrollY + 5;
            }

            setMenuPosition({ x, y });
            setIsPositioned(true);
          }
        });
      });
    };

    const handleClick = () => {
      setMenuVisible(false);
      setIsPositioned(false);
    };

    const handleScroll = () => {
      setMenuVisible(false);
      setIsPositioned(false);
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
  }, [isRTL]);

  if (!menuVisible) return null;

  return (
    <>
      <motion.div
        ref={menuRef}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{
          opacity: isPositioned ? 1 : 0,
          scale: isPositioned ? 1 : 0.95,
        }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.15, ease: "easeOut" }}
        className="contextMenu p-0"
        style={{
          left: `${menuPosition.x}px`,
          top: `${menuPosition.y}px`,
          position: "absolute",
          visibility: isPositioned ? "visible" : "hidden",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <ul dir={locale === "ar" ? "rtl" : "ltr"}>
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
          <Link href={"/projects"}>
            <li>
              {t("projects")}
              <Image
                src="/icons/contextMenuIcons/projects.png"
                alt="projects icon"
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
