"use client";
import useMobile from "@/hooks/useMobile";

function ContactForm() {
  const { isMobile } = useMobile();
  return (
    <>
      <form
        id="contactForm"
        className="contactForm glassmorphism pt-4 p-2 col-md-3 col-10 row justify-content-center align-items-center gap-3"
      >
        <div
          className="img p-0 m-0"
          style={{ top: isMobile ? "-250px" : "-350px" }}
        >
          <img src="/avatar/upperBody.webp" alt="character" loading="lazy" />
        </div>
        <div className="inputContainer col-12">
          <label>name</label>
          <input className="glassmorphism" type="text" />
        </div>
        <div className="inputContainer col-12">
          <label>phone number</label>
          <input className="glassmorphism" type="tel" />
        </div>
        <div className="inputContainer col-12">
          <label>email</label>
          <input className="glassmorphism" type="email" />
        </div>
        <div className="inputContainer col-12">
          <label>additional note</label>
          <textarea className="glassmorphism" rows={5} cols={20}></textarea>
        </div>
        <button className="glassmorphism submitBtn">submit</button>
      </form>
    </>
  );
}

export default ContactForm;
