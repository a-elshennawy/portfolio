"use client";
import { ViewTransitions } from "next-view-transitions";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";
import "./Nav.css";
import Image from "next/image";
import Tooltip from "@mui/material/Tooltip";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

function Nav() {
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("contextMenu");
  const otherLocale = locale === "en" ? "ar" : "en";

  const pathWithoutLocale = pathname.replace(/^\/(en|ar)/, "") || "/";

  return (
    <>
      <Link href="/light-mode" className="lightModeBtn navItem p-1">
        <Image
          src={"/icons/contextMenuIcons/lightbulb.png"}
          alt="home"
          width={35}
          height={35}
        />
      </Link>

      <div className="navContainer row text-center justify-content-center align-items-center m-0">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
          className="navDock glassmorphism row justify-content-center align-items-center gap-2 mx-0"
        >
          <ViewTransitions>
            <Tooltip title={t("home")} placement="bottom" arrow>
              <Link
                href="/"
                className={`navItem ${pathWithoutLocale === "/" ? "active" : ""}`}
              >
                <Image
                  src={"/icons/contextMenuIcons/home.png"}
                  alt="home"
                  width={30}
                  height={30}
                />
              </Link>
            </Tooltip>
          </ViewTransitions>
          <ViewTransitions>
            <Tooltip title={t("about")} placement="bottom" arrow>
              <Link
                href="/about"
                className={`navItem ${pathWithoutLocale === "/about" ? "active" : ""}`}
              >
                <Image
                  src={"/icons/contextMenuIcons/info.png"}
                  alt="about"
                  width={30}
                  height={30}
                />
              </Link>
            </Tooltip>
          </ViewTransitions>
          <ViewTransitions>
            <Tooltip title={t("projects")} placement="bottom" arrow>
              <Link
                href="/projects"
                className={`navItem ${pathWithoutLocale === "/projects" ? "active" : ""}`}
              >
                <Image
                  src={"/icons/contextMenuIcons/projects.png"}
                  alt="projects"
                  width={30}
                  height={30}
                />
              </Link>
            </Tooltip>
          </ViewTransitions>
          <ViewTransitions>
            <Tooltip title={t("rating")} placement="bottom" arrow>
              <Link
                href="/testimonials"
                className={`navItem ${pathWithoutLocale === "/testimonials" ? "active" : ""}`}
              >
                <Image
                  src={"/icons/contextMenuIcons/customerReview.png"}
                  alt="testimonials"
                  width={30}
                  height={30}
                />
              </Link>
            </Tooltip>
          </ViewTransitions>
          <ViewTransitions>
            <Tooltip title={t("contact")} placement="bottom" arrow>
              <Link
                href="/contact"
                className={`navItem ${pathWithoutLocale === "/contact" ? "active" : ""}`}
              >
                <Image
                  src={"/icons/contextMenuIcons/contacts.png"}
                  alt="contact"
                  width={30}
                  height={30}
                />
              </Link>
            </Tooltip>
          </ViewTransitions>
          <ViewTransitions>
            <Tooltip title={t("lang_switch")} placement="bottom" arrow>
              <Link
                href={pathWithoutLocale}
                locale={otherLocale}
                className="navItem"
              >
                <Image
                  src={"/icons/contextMenuIcons/translate.png"}
                  alt="language switch"
                  width={30}
                  height={30}
                />
              </Link>
            </Tooltip>
          </ViewTransitions>
        </motion.div>
      </div>
    </>
  );
}
export default Nav;
