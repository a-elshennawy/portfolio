"use client";
import SocialMediaIcons from "@/components/inPageComponents/ContactPage/SocialMediaIcons";
import "./Contact.css";
import Link from "next/link";
import ContactForm from "@/components/inPageComponents/ContactPage/ContactForm";

function Contact() {
  return (
    <>
      <section className="contact p-0 text-center z-2">
        <div className="hero">
          <div className="heroContent">
            <SocialMediaIcons />
            <Link className="glassmorphism toFormBtn" href="#contactForm">
              book your call
            </Link>
          </div>
        </div>
        <ContactForm />
      </section>
    </>
  );
}

export default Contact;
