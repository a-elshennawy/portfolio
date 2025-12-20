"use client";
import Link from "next/link";
import "./projects.css";
import useMobile from "@/hooks/useMobile";
import ProjectsComponent from "@/components/inPageComponents/ProjectsPage/ProjectsComponent";

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
            <div className="mt-3 p-1">
              <Link className="glassmorphism basicBtn" href="#projects">
                why trust me ?
              </Link>
            </div>
          </div>
        </div>
        <div
          id="projects"
          className="projectsSection row justify-content-center align-items-center gap-2 m-0"
        >
          <ProjectsComponent />
        </div>
      </section>
    </>
  );
}

export default Projects;
