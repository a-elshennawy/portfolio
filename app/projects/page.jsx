"use client";
import ProjectsComponent from "@/components/inPageComponents/ProjectsPage/ProjectsComponent";

function Projects() {
  return (
    <>
      <section className="projects py-5 mt-4 text-center z-2">
        <div className="projectsSection row justify-content-center align-items-center gap-3 m-0 pb-5">
          <ProjectsComponent />
        </div>
      </section>
    </>
  );
}

export default Projects;
