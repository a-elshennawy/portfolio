"use client";
import SocialMediaIcons from "@/components/inPageComponents/ContactPage/SocialMediaIcons";
import "./Contact.css";
import Link from "next/link";
import { motion } from "motion/react";
import ContactForm from "@/components/inPageComponents/ContactPage/ContactForm";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { useTranslations, useLocale } from "next-intl";

function Contact() {
  const t = useTranslations("contact");
  const locale = useLocale();

  return (
    <>
      <section className="contact p-0 text-center z-2">
        <div className="hero">
          <div className="heroContent">
            <SocialMediaIcons />

            <motion.div
              className="p-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link
                className="glassmorphism basicBtn contactBtn"
                href="#contactForm"
                dir={locale === "ar" ? "rtl" : "ltr"}
              >
                {t("button_1")}
                {locale === "ar" ? (
                  <FaArrowCircleLeft />
                ) : (
                  <FaArrowCircleRight />
                )}
              </Link>
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeInOut" }}
          className="row text-center justify-content-center align-items-center py-5 m-0"
        >
          <ContactForm />
        </motion.div>
      </section>
    </>
  );
}

export default Contact;
