"use client";
import Link from "next/link";
import "./projects.css";
import useMobile from "@/hooks/useMobile";

function Projects() {
  const { isMobile } = useMobile();
  return (
    <>
      <section className="projects p-0 text-center z-2">
        <div className="hero">
          <img
            src="/avatar/proud.webp"
            alt="down"
            style={{ width: isMobile ? "100%" : "40%" }}
            className="avatarImg"
          />
          <div
            className="heroContent"
            style={{ top: isMobile ? "50%" : "70%" }}
          >
            <h1 className="mb-3">ready ?</h1>
            <Link className="glassmorphism toProjectsBtn" href="#">
              why you can trust me ?
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
