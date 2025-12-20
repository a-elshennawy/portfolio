"use client";
import SocialMediaIcons from "@/components/inPageComponents/ContactPage/SocialMediaIcons";
import "./Contact.css";
import Link from "next/link";
import ContactForm from "@/components/inPageComponents/ContactPage/ContactForm";
import { FaArrowCircleRight } from "react-icons/fa";

function Contact() {
  return (
    <>
      <section className="contact p-0 text-center z-2">
        <div className="hero">
          <div className="heroContent">
            <SocialMediaIcons />

            <Link
              className="glassmorphism basicBtn contactBtn"
              href="#contactForm"
            >
              book your call
              <FaArrowCircleRight />
            </Link>
          </div>
        </div>
        <div className="row text-center justify-content-center align-items-center py-5 m-0">
          <ContactForm />
        </div>
      </section>
    </>
  );
}

export default Contact;
