"use client";
import useMobile from "@/hooks/useMobile";
import Image from "next/image";
import { supabase } from "@/components/lib/supabaseClient";
import { CircularProgress } from "@mui/material";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { TbXboxXFilled } from "react-icons/tb";
import { FaCheckCircle } from "react-icons/fa";
import { useTranslations } from "next-intl";

function ContactForm() {
  const { isMobile } = useMobile();
  const [customerName, setCustomerName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const t = useTranslations("contact");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setSending(true);

    try {
      if (
        !customerName.trim() ||
        !phoneNumber.trim() ||
        !email.trim() ||
        !note.trim()
      ) {
        setError("please fill in all fields");
        setSending(false);
        setTimeout(() => setError(null), 3000);
        return;
      }

      const { error } = await supabase.from("requests").insert([
        {
          name: customerName.trim(),
          phone: phoneNumber.trim(),
          email: email.trim(),
          note: note.trim(),
        },
      ]);
      if (error) throw error;

      await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: customerName,
          phone: phoneNumber,
          email: email,
          note: note,
        }),
      });

      setSuccess("your request has been sent");
      setCustomerName("");
      setPhoneNumber("");
      setEmail("");
      setNote("");
      setTimeout(() => setSuccess(null), 3000);
    } catch (error) {
      setError(err.message || "An error occurred");
      setTimeout(() => setError(null), 3000);
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {error && (
          <motion.div
            className="submitToast glassmorphism errorToast p-2"
            initial={{ opacity: 0, scale: 0, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {error} <TbXboxXFilled />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {success && (
          <motion.div
            className="submitToast glassmorphism sucessToast p-2"
            initial={{ opacity: 0, scale: 0, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {success} <FaCheckCircle />
          </motion.div>
        )}
      </AnimatePresence>
      <form
        onSubmit={handleSubmit}
        id="contactForm"
        className="glassmorphism pt-4 p-2 col-md-3 col-10 row justify-content-center align-items-center gap-3"
      >
        <div className="img p-0 m-0" style={{ top: "-280px", margin: "auto" }}>
          <Image
            src="/avatar/upperBody.webp"
            alt="character"
            width={isMobile ? 350 : 400}
            height={300}
            priority
            quality={85}
            loading="eager"
          />
        </div>
        <div className="inputContainer col-12">
          <label>{t("name")}</label>
          <input
            className="glassmorphism"
            type="text"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            disabled={sending}
          />
        </div>
        <div className="inputContainer col-12">
          <label>{t("number")}</label>
          <input
            className="glassmorphism"
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            disabled={sending}
          />
        </div>
        <div className="inputContainer col-12">
          <label>{t("email")}</label>
          <input
            className="glassmorphism"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={sending}
          />
        </div>
        <div className="inputContainer col-12">
          <label>{t("note")}</label>
          <textarea
            className="glassmorphism"
            rows={5}
            cols={20}
            value={note}
            onChange={(e) => setNote(e.target.value)}
            disabled={sending}
          ></textarea>
        </div>
        <div className="col-12">
          <button className="glassmorphism submitBtn" disabled={sending}>
            {sending ? (
              <CircularProgress size={30} sx={{ color: "var(--secondary)" }} />
            ) : (
              t("submit")
            )}
          </button>
        </div>
      </form>
    </>
  );
}

export default ContactForm;
