"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import Image from "next/image";
import useMobile from "@/hooks/useMobile";
import Loading from "@/app/loading";

function ProjectsComponent() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const { isMobile } = useMobile();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/API/projects.json");
        const data = await response.json();
        setProjects(data.projects || []);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const toProductDetails = (id) => {
    router.push(`/product-details/${id}`);
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        projects.map((project) => (
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
              <Image
                src={project.thumbnail}
                alt={project.title}
                width={500}
                height={isMobile ? 250 : 300}
                priority
                quality={85}
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
        ))
      )}
    </>
  );
}

export default ProjectsComponent;
