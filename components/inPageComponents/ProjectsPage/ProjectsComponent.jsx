"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

function ProjectsComponent() {
  const [projects, setProjects] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch("/API/projects.json")
      .then((response) => response.json())
      .then((data) => setProjects(data.projects || []))
      .catch((error) => console.error(error));
  }, []);

  const toProductDetails = (id) => {
    router.push(`/product-details/${id}`);
  };

  return (
    <>
      {projects.map((project) => (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: project.id * 0.1, ease: "easeOut" }}
          key={project.id}
          className="projectCard glassmorphism col-md-3 col-10 p-0 m-0"
        >
          <span
            className="glassmorphism toProdDetailsBtn p-1"
            onClick={() => toProductDetails(project.id)}
          >
            <FaArrowUpRightFromSquare />
          </span>
          <div className="p-0 img">
            <img
              src={project.thumbnail}
              alt=""
              onClick={() => toProductDetails(project.id)}
            />
          </div>
          <div className="py-2 px-1 details">
            <h3 className="mb-2">{project.title}</h3>
            <div className="tags">
              {project.tags.map((tag) => (
                <span key={tag} className="tag glassmorphism p-1">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </>
  );
}

export default ProjectsComponent;
