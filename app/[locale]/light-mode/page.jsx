"use client";
import { Link } from "@/i18n/routing";
import "./LightMode.css";
import Image from "next/image";
import useMobile from "@/hooks/useMobile";
import { useTranslations } from "next-intl";

function LightMode() {
  const t = useTranslations("texts");
  const { isMobile } = useMobile();
  return (
    <>
      <section className="z-2 p-0 lightModeComp">
        <div className="content text-center">
          <Link className="my-2 mx-auto p-3 toHomeBtn" href="/">
            {t("lightMode_btn")}
          </Link>
          <Image
            src="/avatar/lightMode.webp"
            alt="character"
            width={isMobile ? 200 : 400}
            height={isMobile ? 200 : 400}
            quality={85}
            priority
          />
        </div>
      </section>
    </>
  );
}

export default LightMode;
